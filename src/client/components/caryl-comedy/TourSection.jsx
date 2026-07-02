import { useState, useEffect } from 'react'

export function TourSection({ content }) {
  const [gigs, setGigs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/gigs')
      .then(r => r.json())
      .then(data => { setGigs(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleTicketClick = (gig) => {
    fetch('/api/analytics/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event_type: 'ticket_click', metadata: { venue: gig.venue, gig_id: gig.id } }),
    }).catch(() => {})
  }

  return (
    <section className="tour" id="tour">
      <h2 className="tour-heading" data-reveal>
        {content.heading}<br />
        <span>{content.headingAccent}</span>
      </h2>

      {loading && (
        <div className="tour-loading" data-reveal>
          <div className="loading-dots"><span /><span /><span /></div>
        </div>
      )}

      {!loading && gigs.length === 0 && (
        <p className="tour-empty" data-reveal>{content.noGigs}</p>
      )}

      {gigs.map((gig, index) => (
        <article
          className={`date-row reveal r${(index % 4) + 1}`}
          key={gig.id}
          data-reveal
        >
          <div className="d-date">{gig.date_display}</div>
          <div className="d-show">{gig.show_name}</div>
          <div className="d-venue">{gig.venue}</div>
          {gig.href && (
            <a
              className="d-btn"
              href={gig.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleTicketClick(gig)}
            >
              {content.ticketLabel}
            </a>
          )}
        </article>
      ))}
    </section>
  )
}
