import heroPhoto from '../assets/Adobe Express - file high qal.png'
import aboutPhoto from '../assets/CARYLBURKE-12, ©Mefus Photography.jpg'


export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#tour', label: 'Gigs' },
  { href: '#videos', label: 'Video' },
  { href: '#contact', label: 'Contact' },
]

// TODO: confirm real profile URLs — placeholders until Caryl/the site owner supplies them
export const socialLinks = [
  { href: 'https://instagram.com/', label: 'Instagram', icon: 'instagram' },
  { href: 'https://tiktok.com/', label: 'TikTok', icon: 'tiktok' },
]

export const heroContent = {
  titleLine1: 'CARYL',
  titleLine2: 'BURKE',
  eyebrow: '',
  quote: 'The most promising thing to come out of Wales since Gareth Bale.',
  ctaHref: '#tour',
  ctaLabel: 'See upcoming gig dates',
}

export const heroImage = heroPhoto

export const aboutContent = {
  heading: 'A sharp, fun set with proper punchlines. ',
  highlighted: 'Witty, warm, and unapologetically Welsh!',
  paragraphs: [
    'Caryl\'s awkward storytelling comes with a hint of self-deprecation and sarcasm lead her to being described as "the most promising thing to come out of Wales since Gareth Bale". Since starting stand up in 2022, she\'s performed in venues such as The Frog and Bucket, The London Comedy store and all over Wales, including a few gigs in her native language of Welsh. Chosen as one of Leicester comedy Festival\'s 2023 Circuit Breakers, she\'s also regularly features on Radio Cymru and has appeared on the comedy panel show "Chwalu Pen" and "Uffern Iaith y Nefoedd". She was part of the \'Beat The Frog World Series\' and became the first woman to open for Paul Smith at one of his sold out tour gigs in Coventry as well as tour support for Elis James.',
  ],
  credentials: [
    'Stand-up Comedy',
    'Acting',
    'Welsh and English Language Performances',
    'Gigging Across the UK',
  ],
}

export const aboutImage = aboutPhoto

export const tourContent = {
  heading: 'Upcoming',
  headingAccent: 'Gigs',
  noGigs: 'No upcoming gigs announced right now — check back soon.',
  ticketLabel: 'Tickets',
}

export const videosContent = {
  heading: 'Watch',
  headingAccent: 'Caryl',
}

// TODO: no reference screenshot covered this section — real video links/copy still needed
export const videoHighlights = [
  {
    href: 'https://www.youtube.com/watch?v=sXx3cwkaHMU',
    title: 'RSVP | Drama Gomedi | Comedy Drama ',
    description: 'Cadi is a young single woman and on a quest for a wedding date! With her best friends, Beth and Huw on her team, will she score the perfect plus one?',
  },
  {
    href: 'https://www.youtube.com/watch?v=BsF80Pz2jUs',
    title: 'Caryl Burke, Beat The Frog ',
    description: 'Beat The Frog at the Frog and Bucket Feb 2023',
  },
  {
    href: 'https://www.youtube.com/watch?v=af8_4A44MFA',
    title: 'Sesiwn Fawr highlights',
    description: 'One-off stand-up show showcasing the most exciting new Welsh comedy stars. Hosted by Mel Owen and starring Carwyn Blayney, Laurie Watts and Caryl Burke. Filmed live in Aberystwyth.',
  },
]

// TODO: no reference screenshot covered this section — draft copy, confirm before shipping
export const contactContent = {
  heading: 'Get in',
  headingAccent: 'Touch',
  subheading: 'For bookings, general enquiries, or just to say hello.',
  fields: {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
  },
  successMessage: "Thanks — I'll get back to you as soon as I can.",
  errorMessage: 'Something went wrong sending your message. Please try again, or email directly.',
  privacy: 'By submitting this form you agree to our',
  privacyLink: 'Privacy Policy',
  submitLabel: 'Send message',
}

// TODO: no reference screenshot covered this section — draft copy, confirm before shipping
export const footerColumns = [
  {
    heading: 'Site',
    links: [
      { href: '#about', label: 'About' },
      { href: '#tour', label: 'Gigs' },
      { href: '#videos', label: 'Video' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
]

export const footerContent = {
  brand: 'Caryl',
  accent: 'Comedy',
  tagline: 'Welsh stand-up comedian peforming in English and Welsh.',
  bottomLeft: '© 2026 Caryl Comedy. All rights reserved.',
}