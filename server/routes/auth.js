import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import db from '../db.js'

const router = Router()

const COOKIE_MAX_AGE = 8 * 60 * 60 * 1000 // 8h, matches JWT expiresIn below

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
}

router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' })
  }

  const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username)
  if (!user || !bcrypt.compareSync(password, user.password_hash)) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: '8h',
  })
  res.cookie('admin_token', token, { ...cookieOptions, maxAge: COOKIE_MAX_AGE })
  res.json({ success: true, username: user.username })
})

router.post('/logout', (req, res) => {
  res.clearCookie('admin_token', cookieOptions)
  res.json({ success: true })
})

export default router
