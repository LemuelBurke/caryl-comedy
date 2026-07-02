import heroPhoto from '../assets/Adobe Express - file high qal.png'
import aboutPhoto from '../assets/IMG_5042 - ©Andy Hollingworth.jpg'

export const navLinks = [
  { href: '#about', label: 'Am' },
  { href: '#tour', label: 'Sioeau' },
  { href: '#videos', label: 'Fideo' },
  { href: '#contact', label: 'Cysylltu' },
]

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
  ctaLabel: 'Gweler dyddiadau sioeau sydd ar ddod',
}

export const heroImage = heroPhoto

export const aboutContent = {
  heading: 'Set graff, hwyliog gyda phunchlinau go iawn.',
  highlighted: 'Craff, cynnes, a Chymreig di-ffrwgwd!',
  paragraphs: [
    'Daw straeon lletchwith Caryl gyda mymryn o hunan-ddirmyg a sarcasm, ac arweiniodd at ei disgrifio fel "the most promising thing to come out of Wales since Gareth Bale". Ers dechrau stand-yp yn 2022, mae hi wedi perfformio mewn lleoliadau fel The Frog and Bucket, The London Comedy Store, a ledled Cymru, gan gynnwys ychydig o gigs yn ei hiaith frodorol, sef y Gymraeg.',
    'Wedi\'i dewis fel un o "Circuit Breakers" Gŵyl Gomedi Leicester 2023, mae hi hefyd yn ymddangos yn rheolaidd ar Radio Cymru ac wedi ymddangos ar y sioeau panel comedi "Chwalu Pen" ac "Uffern Iaith y Nefoedd". Roedd hi\'n rhan o\'r "Beat The Frog World Series" a hi oedd y fenyw gyntaf i agor i Paul Smith yn un o\'i gigiau taith a oedd wedi gwerthu allan yn Coventry, yn ogystal â darparu cefnogaeth ar daith i Elis James.',
  ],
  credentials: [
    'Comedi',
    'Actio',
    'Perfformiadau yn Gymraeg a Saesneg',
    'Perfformio Ledled y DU',
  ],
}

export const aboutImage = aboutPhoto

export const tourContent = {
  heading: 'Sioeau i',
  headingAccent: 'Ddod',
  noGigs: "Dim sioeau i ddod wedi'u cyhoeddi ar hyn o bryd — edrychwch eto'n fuan.",
  ticketLabel: 'Tocynnau',
}

export const videosContent = {
  heading: 'Gwylio',
  headingAccent: 'Caryl',
}

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

export const contactContent = {
  heading: 'Cysylltu',
  headingAccent: '',
  subheading: "Ar gyfer archebion, ymholiadau'r wasg, neu jest i ddweud helo.",
  fields: {
    name: 'Enw',
    email: 'E-bost',
    subject: 'Pwnc',
    message: 'Neges',
  },
  successMessage: 'Diolch — byddaf yn cysylltu â chi cyn gynted ag y gallaf.',
  errorMessage: "Aeth rhywbeth o'i le wrth anfon eich neges. Cofiwch roi cynnig arall, neu anfonwch e-bost yn uniongyrchol.",
  privacy: "Drwy gyflwyno'r ffurflen hon, rydych yn cytuno i'n",
  privacyLink: 'Polisi Preifatrwydd',
  submitLabel: 'Anfon neges',
}

export const footerColumns = [
  {
    heading: 'Safle',
    links: [
      { href: '#about', label: 'Amdanom' },
      { href: '#tour', label: 'Sioeau' },
      { href: '#videos', label: 'Fideo' },
      { href: '#contact', label: 'Cysylltu' },
    ],
  },
  {
    heading: 'Cyfreithiol',
    links: [
      { href: '/privacy', label: 'Polisi Preifatrwydd' },
      { href: '/terms', label: 'Telerau' },
    ],
  },
]

export const footerContent = {
  brand: 'Caryl',
  accent: 'Comedy',
  tagline: 'Comedi stand-yp Gymreig, siaradus.',
  bottomLeft: '© 2026 Caryl Comedy. Cedwir pob hawl.',
  bottomRight: 'Gwnaed yng Nghymru',
}