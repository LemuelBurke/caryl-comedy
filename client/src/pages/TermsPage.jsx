import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'

const content = {
  en: {
    title: 'Terms & Conditions',
    updated: 'Last updated: June 2026',
    back: '← Back to site',
  },
  cy: {
    title: 'Telerau ac Amodau',
    updated: 'Diweddarwyd ddiwethaf: Mehefin 2026',
    back: '← Yn ôl i\'r wefan',
  },
}

export function TermsPage() {
  const { lang } = useLang()
  const t = content[lang] || content.en

  return (
    <div className="legal-shell">
      <nav className="legal-nav">
        <a href="/" className="nav-logo">Caryl Comedy</a>
        <Link to="/" className="legal-back">{t.back}</Link>
      </nav>
      <main className="legal-content">
        <h1>{t.title}</h1>
        <p className="legal-updated">{t.updated}</p>

        <h2>1. Agreement to Terms</h2>
        <p>
          By accessing and using this website (<strong>carylcomedy.co.uk</strong>), you accept and agree to
          be bound by these Terms and Conditions. If you do not agree to these terms, please do not use this website.
          These terms are governed by the laws of England and Wales.
        </p>

        <h2>2. About This Website</h2>
        <p>
          This website is a promotional and informational platform for Caryl Burke, a comedian based in Wales, UK.
          The site provides information about upcoming gig dates, press materials, video content, and a means
          to make booking and press enquiries.
        </p>

        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website — including but not limited to text, photographs, videos, graphics, and design —
          is the intellectual property of Caryl Burke or their respective copyright holders (including credited
          photographers) and is protected by copyright law. You may not reproduce, distribute, or use any content
          without express written permission.
        </p>
        <p>
          Photographer credits where displayed must be retained in any permitted reproduction of images.
        </p>

        <h2>4. Use of This Website</h2>
        <p>You agree to use this website only for lawful purposes. You must not:</p>
        <ul>
          <li>Use the contact form to send spam, unsolicited commercial communications, or abusive messages.</li>
          <li>Attempt to gain unauthorised access to any part of the website or its server.</li>
          <li>Use automated means (bots, scrapers) to access or collect content from this website.</li>
          <li>Misrepresent your identity or affiliation when submitting a contact enquiry.</li>
        </ul>

        <h2>5. External Links</h2>
        <p>
          This website contains links to third-party websites, including ticket vendors, social media platforms,
          and YouTube. These links are provided for your convenience only. We have no control over the content
          of those sites and accept no responsibility or liability for them. Visiting third-party sites is at
          your own risk.
        </p>

        <h2>6. Ticket Purchases and Bookings</h2>
        <p>
          Ticket links on this website redirect to third-party ticketing platforms. Any ticket purchase is a
          transaction between you and that platform; Caryl Burke Comedy accepts no liability for issues arising
          from third-party ticket sales, including cancellations, refunds, or pricing errors.
        </p>
        <p>
          For booking enquiries (corporate events, private events, festival slots), use the contact form on this
          website. Confirmed bookings are subject to a separate agreement and terms provided at time of booking.
        </p>

        <h2>7. Accuracy of Information</h2>
        <p>
          We endeavour to keep gig dates, venue information, and other content accurate and up to date.
          However, we cannot guarantee that all information is free from error. Gig dates, times, and venues
          may change — always confirm with the venue or ticketing platform before travelling.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Caryl Burke Comedy shall not be liable for any direct,
          indirect, incidental, or consequential loss or damage arising from your use of, or inability to use,
          this website or any content on it.
        </p>

        <h2>9. Privacy</h2>
        <p>
          Your use of this website is also governed by our <Link to="/privacy">Privacy Policy</Link>,
          which is incorporated into these Terms by reference.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time. Changes will be posted on
          this page with an updated revision date. Your continued use of the website following any changes
          constitutes acceptance of the new terms.
        </p>

        <h2>11. Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales.
          Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts
          of England and Wales.
        </p>
      </main>
    </div>
  )
}
