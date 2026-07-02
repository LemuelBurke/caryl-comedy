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
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach((node) => node.classList.add('on'))
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

    // Content like the gig list loads asynchronously and adds its own
    // [data-reveal] nodes after this effect's initial scan, so watch for
    // nodes added later (not just what's present on mount).
    const observeNode = (node) => {
      if (node.hasAttribute?.('data-reveal')) observer.observe(node)
      node.querySelectorAll?.('[data-reveal]').forEach((child) => observer.observe(child))
    }

    document.querySelectorAll('[data-reveal]').forEach((node) => observer.observe(node))

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeNode(node)
        })
      })
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
    }
  }, [lang])

  return (
    <div className="page-shell">
      <SiteNav links={d.navLinks} social={d.socialLinks} />
      <main>
        <HeroSection content={d.heroContent} image={d.heroImage} />
        <AboutSection content={d.aboutContent} image={d.aboutImage} />
        <TourSection content={d.tourContent} />
        <VideosSection content={d.videosContent} items={d.videoHighlights} />
        <ContactSection content={d.contactContent} />
      </main>
      <FooterSection columns={d.footerColumns} content={d.footerContent} />
    </div>
  )
}
