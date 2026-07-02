import 'dotenv/config'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'

import authRoutes from './routes/auth.js'
import gigsRoutes from './routes/gigs.js'
import contactRoutes from './routes/contact.js'
import analyticsRoutes from './routes/analytics.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distPath = path.join(__dirname, '../../dist')

const app = express()
const PORT = process.env.PORT || 3002

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", 'https://www.googletagmanager.com', 'https://www.google-analytics.com'],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https://www.google-analytics.com'],
      connectSrc: ["'self'", 'https://www.google-analytics.com', 'https://region1.google-analytics.com'],
      frameSrc: ['https://www.youtube.com'],
    },
  },
}))

app.use(cors({
  origin: process.env.NODE_ENV === 'production' ? false : 'http://localhost:5173',
}))
app.use(express.json())

const contactLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 5, message: { error: 'Too many requests, please try again later.' } })
const analyticsLimiter = rateLimit({ windowMs: 60 * 1000, max: 30 })

app.use('/api/auth', authRoutes)
app.use('/api/gigs', gigsRoutes)
app.use('/api/contact', contactLimiter, contactRoutes)
app.use('/api/analytics', analyticsLimiter, analyticsRoutes)

app.use(express.static(distPath))
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Caryl Comedy server running on http://localhost:${PORT}`)
})
