import { Router } from 'express'
import nodemailer from 'nodemailer'
import db from '../db.js'

const router = Router()

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Caryl Comedy Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: `"${name}" <${email}>`,
      subject: `[Caryl Comedy] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px">
          <h2 style="color:#1a1200">New message from Caryl Comedy website</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;font-weight:bold;color:#c9870d">Name</td><td style="padding:8px">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#c9870d">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;color:#c9870d">Subject</td><td style="padding:8px">${subject}</td></tr>
          </table>
          <div style="margin-top:1rem;padding:1rem;background:#f5f5f5;border-left:4px solid #ffe135">
            <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
          </div>
        </div>
      `,
    })

    db.prepare(
      "INSERT INTO analytics_events (event_type, metadata) VALUES ('contact_submit', ?)"
    ).run(JSON.stringify({ subject }))

    res.json({ success: true })
  } catch (err) {
    console.error('Contact email error:', err)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
})

export default router
