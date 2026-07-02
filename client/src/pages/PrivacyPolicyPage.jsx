import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext.jsx'

const content = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: June 2026',
    back: '← Back to site',
  },
  cy: {
    title: 'Polisi Preifatrwydd',
    updated: 'Diweddarwyd ddiwethaf: Mehefin 2026',
    back: '← Yn ôl i\'r wefan',
  },
}

export function PrivacyPolicyPage() {
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

        <h2>1. Who We Are</h2>
        <p>
          This website (<strong>carylcomedy.co.uk</strong>) is operated by <a href="https://cainan.studio">Cainan</a> ("we", "us", "our").
          We are committed to protecting your personal information in compliance with the UK General Data Protection
          Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <p>
          For data enquiries, contact us via the <a href="https://cainan.studio/contact">contact form</a> on the <a href="https://cainan.studio">Cainan</a> website.
        </p>

        <h2>2. What Data We Collect and Why</h2>

        <h3>Contact Form</h3>
        <p>
          When you submit our contact form, we collect your <strong>name</strong>, <strong>email address</strong>,
          <strong>subject</strong>, and <strong>message</strong>. This data is used solely to respond to your
          enquiry. We process this data under the legal basis of <em>legitimate interests</em> (responding to
          direct communications) and <em>contract performance</em> (if your enquiry leads to a booking agreement).
        </p>
        <p>
          Your message is delivered directly to our inbox via our email server. We do not store the full content
          of your message on our servers beyond what is retained in standard email systems.
        </p>

        <h3>Website Analytics</h3>
        <p>
          We collect anonymised usage data to understand how visitors use this site. This includes page views,
          ticket link click-throughs, and contact form submissions. We do <strong>not</strong> store your full
          IP address; instead we generate a daily-rotating hash that cannot be reversed to identify you.
          No cookies are used for our internal analytics.
        </p>
        <p>
          This data is processed under the legal basis of <em>legitimate interests</em> (understanding site
          performance and improving user experience). No data collected through our analytics can be used to
          personally identify you.
        </p>

        <h3>Google Analytics (if enabled)</h3>
        <p>
          This site may use Google Analytics 4 to collect standard internet log information and visitor behaviour.
          This data is anonymised and processed by Google in accordance with their privacy policy. Google Analytics
          may set cookies on your device. You can opt out using the{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
            Google Analytics Opt-out Browser Add-on
          </a>.
        </p>

        <h2>3. How Long We Keep Your Data</h2>
        <ul>
          <li><strong>Contact form enquiries:</strong> Retained in our email inbox for up to 24 months, or until no longer required.</li>
          <li><strong>Analytics events:</strong> Retained indefinitely in anonymised, aggregated form.</li>
        </ul>

        <h2>4. Who We Share Your Data With</h2>
        <p>
          We do not sell, rent, or share your personal data with third parties for marketing purposes.
          Data may be processed by the following sub-processors:
        </p>
        <ul>
          <li><strong>Email provider (SMTP):</strong> Used to deliver contact form messages to our inbox.</li>
          <li><strong>Google LLC:</strong> If Google Analytics is enabled (see above).</li>
          <li><strong>Web hosting provider:</strong> Our server provider may process data in transit.</li>
        </ul>
        <p>All sub-processors are required to handle your data in accordance with UK GDPR.</p>

        <h2>5. Your Rights Under UK GDPR</h2>
        <p>You have the following rights regarding your personal data:</p>
        <ul>
          <li><strong>Right of access:</strong> Request a copy of the personal data we hold about you.</li>
          <li><strong>Right to rectification:</strong> Request correction of inaccurate data.</li>
          <li><strong>Right to erasure ("right to be forgotten"):</strong> Request deletion of your data where there is no compelling reason for its continued processing.</li>
          <li><strong>Right to restrict processing:</strong> Request that we limit how we use your data.</li>
          <li><strong>Right to data portability:</strong> Receive your data in a structured, machine-readable format.</li>
          <li><strong>Right to object:</strong> Object to processing based on legitimate interests.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us via the <a href="https://cainan.studio/contact">contact form</a>.
          We will respond within 30 days. If you are not satisfied with our response, you have the right to
          lodge a complaint with the{' '}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
            Information Commissioner's Office (ICO)
          </a>.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Our internal analytics do not use cookies. If Google Analytics is enabled on this site, it may set
          the following cookies: <code>_ga</code>, <code>_gid</code>, <code>_ga_*</code>. These are used to
          distinguish users and sessions. They are not used for advertising.
        </p>
        <p>
          By continuing to use this site you acknowledge this use. You can disable cookies in your browser settings
          at any time.
        </p>

        <h2>7. Data Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect your personal data from unauthorised
          access, loss, or disclosure. Our admin panel is protected by server-validated authentication tokens.
          All data is stored on servers within the UK or EEA.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be reflected on this page with
          an updated revision date. We encourage you to review this page periodically.
        </p>

        <h2>9. Contact</h2>
        <p>
          For any privacy-related questions, please use the <a href="https://cainan.studio/contact">contact form</a> on the <a href="https://cainan.studio">Cainan</a> website.
        </p>
      </main>
    </div>
  )
}
