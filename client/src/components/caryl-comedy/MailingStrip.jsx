export function MailingStrip({ content }) {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="mailing" data-reveal>
      <div className="mailing-label">{content.label}</div>
      <form className="mailing-form" onSubmit={handleSubmit}>
        <input type="email" placeholder={content.placeholder} aria-label="Email address" />
        <button type="submit">{content.buttonLabel}</button>
      </form>
    </div>
  )
}