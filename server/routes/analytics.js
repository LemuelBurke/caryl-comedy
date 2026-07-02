import { Router } from 'express'
import { createHash } from 'crypto'
import db from '../db.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

router.post('/event', (req, res) => {
  const { event_type, metadata } = req.body
  const allowed = ['page_view', 'ticket_click', 'contact_open']
  if (!event_type || !allowed.includes(event_type)) {
    return res.status(400).json({ error: 'Invalid event_type' })
  }

  const ip = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress || ''
  const ip_hash = createHash('sha256')
    .update(ip + new Date().toDateString() + (process.env.JWT_SECRET || 'salt'))
    .digest('hex')
    .slice(0, 16)

  db.prepare(
    'INSERT INTO analytics_events (event_type, metadata, ip_hash) VALUES (?, ?, ?)'
  ).run(event_type, metadata ? JSON.stringify(metadata) : null, ip_hash)

  res.json({ success: true })
})

router.get('/stats', requireAuth, (req, res) => {
  const days30 = new Date(Date.now() - 30 * 864e5).toISOString()
  const days7  = new Date(Date.now() - 7  * 864e5).toISOString()

  const totalViews = db.prepare(
    "SELECT COUNT(*) as n FROM analytics_events WHERE event_type = 'page_view'"
  ).get().n

  const views30 = db.prepare(
    "SELECT COUNT(*) as n FROM analytics_events WHERE event_type = 'page_view' AND timestamp >= ?"
  ).get(days30).n

  const views7 = db.prepare(
    "SELECT COUNT(*) as n FROM analytics_events WHERE event_type = 'page_view' AND timestamp >= ?"
  ).get(days7).n

  const unique30 = db.prepare(
    "SELECT COUNT(DISTINCT ip_hash) as n FROM analytics_events WHERE event_type = 'page_view' AND timestamp >= ?"
  ).get(days30).n

  const ticketClicks = db.prepare(
    "SELECT COUNT(*) as n FROM analytics_events WHERE event_type = 'ticket_click'"
  ).get().n

  const contactSubmits = db.prepare(
    "SELECT COUNT(*) as n FROM analytics_events WHERE event_type = 'contact_submit'"
  ).get().n

  const ticketClicksByGig = db.prepare(
    `SELECT json_extract(metadata, '$.venue') as venue, COUNT(*) as n
     FROM analytics_events WHERE event_type = 'ticket_click'
     GROUP BY venue ORDER BY n DESC`
  ).all()

  const dailyViews = db.prepare(
    `WITH RECURSIVE days(day) AS (
       SELECT date('now', '-29 days')
       UNION ALL
       SELECT date(day, '+1 day') FROM days WHERE day < date('now')
     )
     SELECT days.day as day, COUNT(ae.id) as n
     FROM days
     LEFT JOIN analytics_events ae
       ON substr(ae.timestamp, 1, 10) = days.day AND ae.event_type = 'page_view'
     GROUP BY days.day
     ORDER BY days.day ASC`
  ).all()

  res.json({
    totalViews,
    views30,
    views7,
    unique30,
    ticketClicks,
    contactSubmits,
    ticketClicksByGig,
    dailyViews,
  })
})

export default router
