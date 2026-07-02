import { Router } from 'express'
import db from '../db.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.get('/', (req, res) => {
  const today = new Date().toISOString().slice(0, 10)
  const gigs = db.prepare(
    'SELECT * FROM gigs WHERE date >= ? ORDER BY date ASC'
  ).all(today)
  res.json(gigs)
})

router.get('/all', requireAuth, (req, res) => {
  const gigs = db.prepare('SELECT * FROM gigs ORDER BY date ASC').all()
  res.json(gigs)
})

router.post('/', requireAuth, (req, res) => {
  const { date, date_display, show_name, venue, href } = req.body
  if (!date || !date_display || !venue) {
    return res.status(400).json({ error: 'date, date_display, and venue are required' })
  }
  const result = db.prepare(
    'INSERT INTO gigs (date, date_display, show_name, venue, href) VALUES (?, ?, ?, ?, ?)'
  ).run(date, date_display, show_name || 'CARYL BURKE', venue, href || null)
  const gig = db.prepare('SELECT * FROM gigs WHERE id = ?').get(result.lastInsertRowid)
  res.status(201).json(gig)
})

router.put('/:id', requireAuth, (req, res) => {
  const { id } = req.params
  const { date, date_display, show_name, venue, href } = req.body
  if (!date || !date_display || !venue) {
    return res.status(400).json({ error: 'date, date_display, and venue are required' })
  }
  const result = db.prepare(
    'UPDATE gigs SET date = ?, date_display = ?, show_name = ?, venue = ?, href = ? WHERE id = ?'
  ).run(date, date_display, show_name || 'CARYL BURKE', venue, href || null, id)
  if (result.changes === 0) return res.status(404).json({ error: 'Gig not found' })
  const gig = db.prepare('SELECT * FROM gigs WHERE id = ?').get(id)
  res.json(gig)
})

router.delete('/:id', requireAuth, (req, res) => {
  const { id } = req.params
  const result = db.prepare('DELETE FROM gigs WHERE id = ?').run(id)
  if (result.changes === 0) return res.status(404).json({ error: 'Gig not found' })
  res.json({ success: true })
})

export default router
