import { useLocation } from 'react-router-dom'
import { useLang } from '../../context/LanguageContext.jsx'

export function LanguageGate() {
  const { hasChosen, choose } = useLang()
  const { pathname } = useLocation()

  if (hasChosen || pathname.startsWith('/admin')) return null

  return (
    <div className="lang-gate" role="dialog" aria-modal="true" aria-label="Choose your language / Dewiswch eich iaith">
      <div className="lang-gate-box">
        <button
          className="lang-gate-skip"
          onClick={() => choose('en')}
          aria-label="Skip / Hepgor"
        >
          Skip / Hepgor
        </button>
        <p className="lang-gate-eyebrow">Choose your language</p>
        <div className="lang-gate-options">
          <button className="lang-gate-btn" onClick={() => choose('en')}>
            English
          </button>
          <button className="lang-gate-btn" onClick={() => choose('cy')}>
            Cymraeg
          </button>
        </div>
      </div>
    </div>
  )
}
