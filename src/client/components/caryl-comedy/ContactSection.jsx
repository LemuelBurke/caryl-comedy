import { useState } from 'react'
import { Link } from 'react-router-dom'

export function ContactSection({ content }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact">
      <h2 className="contact-heading" data-reveal>
        {content.heading}<br />
        <span>{content.headingAccent}</span>
      </h2>
      <p className="contact-sub" data-reveal>{content.subheading}</p>

      {status === 'success' ? (
        <div className="contact-success" data-reveal>
          <p>{content.successMessage}</p>
        </div>
      ) : (
        <form className="contact-form reveal" data-reveal onSubmit={handleSubmit}>
          <div className="contact-row">
            <div className="contact-field">
              <label htmlFor="name">{content.fields.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="contact-field">
              <label htmlFor="email">{content.fields.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
          </div>
          <div className="contact-field">
            <label htmlFor="subject">{content.fields.subject}</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={form.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="contact-field">
            <label htmlFor="message">{content.fields.message}</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          {status === 'error' && (
            <p className="contact-error">{content.errorMessage}</p>
          )}

          <div className="contact-footer">
            <p className="contact-privacy">
              {content.privacy}{' '}
              <Link to="/privacy">{content.privacyLink}</Link>.
            </p>
            <button type="submit" className="contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? '…' : content.submitLabel}
            </button>
          </div>
        </form>
      )}
    </section>
  )
}
