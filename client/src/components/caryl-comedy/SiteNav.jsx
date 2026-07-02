import { useLang } from '../../context/LanguageContext.jsx'

export function SiteNav({ links, social }) {
  const { lang, toggle } = useLang()

  const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <circle cx="17.5" cy="6.5" r="1.5"></circle>
    </svg>
  )

  const TikTokIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
    </svg>
  )

  return (
    <nav className="site-nav">
      <a href="#home" className="nav-logo">
        Caryl Comedy
      </a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <div className="nav-social">
        {social.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="nav-social-icon"
            title={link.label}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon === 'instagram' && <InstagramIcon />}
            {link.icon === 'tiktok' && <TikTokIcon />}
          </a>
        ))}
        <button
          className="lang-toggle"
          onClick={toggle}
          aria-label={lang === 'en' ? 'Switch to Welsh' : 'Newid i Saesneg'}
        >
          {lang === 'en' ? 'CY' : 'EN'}
        </button>
      </div>
    </nav>
  )
}
