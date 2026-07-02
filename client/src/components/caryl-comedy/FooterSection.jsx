import { Link } from 'react-router-dom'
import Logo from './cainanLogo'

export function FooterSection({ columns, content }) {
  return (
    <footer id="footer">
      <div className="footer-grid">
        <div>
          <div className="f-logo">
            {content.brand} <span>{content.accent}</span>
          </div>
          <p className="tagline">{content.tagline}</p>
        </div>
        {columns.map((column, ci) => (
          <div className="f-col" key={ci}>
            <h4>{column.heading}</h4>
            <ul>
              {column.links.map((link, li) => (
                <li key={li}>
                  {link.href?.startsWith('/') ? (
                    <Link to={link.href}>{link.label}</Link>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>{content.bottomLeft}</p>
        <a
          href="https://cainan.studio/websites"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit"
        >
          <span className="footer-credit-text">
            Designed &amp; Developed by
            <Logo fill="#FFFFFF" size={20} />
            <span className="footer-credit-brand">Cainan</span>
          </span>
          <span className="footer-credit-cta">Want a website like this?</span>
        </a>
      </div>
    </footer>
  )
}
