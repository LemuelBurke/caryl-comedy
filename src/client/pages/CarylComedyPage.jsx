import { useEffect } from 'react'
import { useLang } from '../context/LanguageContext.jsx'

import * as dataEN from '../data/carylComedyDataEN.js'
import * as dataCY from '../data/carylComedyDataCY.js'

import { FooterSection } from '../components/caryl-comedy/FooterSection.jsx'
import { HeroSection } from '../components/caryl-comedy/HeroSection.jsx'
import { SiteNav } from '../components/caryl-comedy/SiteNav.jsx'
import { AboutSection } from '../components/caryl-comedy/AboutSection.jsx'
import { TourSection } from '../components/caryl-comedy/TourSection.jsx'
import { VideosSection } from '../components/caryl-comedy/VideosSection.jsx'
import { ContactSection } from '../components/caryl-comedy/ContactSection.jsx'

export function CarylComedyPage() {
  const { lang } = useLang()
  const d = lang === 'cy' ? dataCY : dataEN

  useEffect(() => {
    fetch('/api/analytics/event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event_type: 'page_view' }),
    }).catch(() => {})
  }, [])

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll('[data-reveal]'))

    if (!('IntersectionObserver' in window)) {
      revealNodes.forEach((node) => node.classList.add('on'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
          }
        })
      },
      { threshold: 0.2 },
    )

    revealNodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [lang])

  return (
    <div className="page-shell">
      <SiteNav links={d.navLinks} social={d.socialLinks} />
      <main>
        <HeroSection content={d.heroContent} image={d.heroImage} />
        <AboutSection content={d.aboutContent} image={d.aboutImage} />
        <TourSection content={d.tourContent} />
        <VideosSection items={d.videoHighlights} />
        <ContactSection content={d.contactContent} />
      </main>
      <FooterSection columns={d.footerColumns} content={d.footerContent} />
    </div>
  )
}
