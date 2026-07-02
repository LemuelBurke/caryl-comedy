export function HeroSection({ content, image }) {
  return (
    <section className="hero" id="home">
      <div className="hero-type" aria-hidden="true">
        <span className="ht-caryl">{content.titleLine1}</span>
        <span className="ht-comedy">{content.titleLine2}</span>
      </div>
      <div className="hero-photo" data-reveal>
        <img src={image} alt="Caryl Burke, stand-up comedian" fetchpriority="high" decoding="sync" />
      </div>
      <p className="hero-eyebrow">{content.eyebrow}</p>
      <div className="hero-bottom" data-reveal>
        <div className="hero-quote-box">“{content.quote}”</div>
        <a href={content.ctaHref} className="hero-cta">
          {content.ctaLabel} →
        </a>
      </div>      <div className="hero-quote-section" data-reveal>
        <div className="hero-quote-box">"{content.quote}"</div>
        <a href={content.ctaHref} className="hero-cta">
          {content.ctaLabel} →
        </a>
      </div>    </section>
  )
}