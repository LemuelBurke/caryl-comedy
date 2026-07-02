export function VideosSection({ content, items }) {
  const getYouTubeId = (url) => {
    if (!url) return null
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  return (
    <section className="videos" id="videos">
      <h2 className="videos-heading" data-reveal>
        {content.heading}<br />
        <span>{content.headingAccent}</span>
      </h2>
      <div className="vid-grid" data-reveal>
        <div className="vid-big">
          {items[0].href ? (
            <iframe
              title={items[0].title}
              src={`https://www.youtube.com/embed/${getYouTubeId(items[0].href)}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          ) : (
            <div
              className="vid-placeholder"
              style={{
                background: '#ffe135',
                color: '#1a1200',
                display: 'grid',
                placeItems: 'center',
                height: '100%',
                padding: '2rem',
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '2rem', margin: '0 0 0.75rem', fontFamily: 'Arial Black, sans-serif', textTransform: 'uppercase' }}>{items[0].title}</h3>
                <p style={{ margin: '0', fontSize: '1rem', lineHeight: '1.6' }}>{items[0].description}</p>
              </div>
            </div>
          )}
        </div>
        <div className="vid-col">
          {items.slice(1).map((item, i) => (
            <a href={item.href} target="_blank" rel="noopener noreferrer" className="vid-small-link" key={i}>
              <article className="vid-small">
                <div className="vid-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" role="presentation">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p>{item.title}</p>
                <span className="vid-small-copy">{item.description}</span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}