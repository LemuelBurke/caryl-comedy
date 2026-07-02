export function AboutSection({ content, image }) {
  return (
    <section className="about" id="about">
      <div className="about-photo" data-reveal>
        <img src={image} alt="Caryl during a comedy set" />
      </div>
      <div className="about-text" data-reveal>
        <h2>
          {content.heading}
          <em>{content.highlighted}</em>
        </h2>
        {content.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
        <div className="cred-strip">
          {content.credentials.map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}