export const SITE = {
  name: 'Endrare',
  url: 'https://endrare.com',
  language: 'en',
  author: 'Deependra Sai Kumar Reddy',
  authorShort: 'Deependra',
  authorUrl: 'https://endrare.com',
  email: 'hello@endrare.com',
  services: ['Web development', 'Mobile app development', 'AI automation', 'AI assistants', 'AI security reviews', 'Software modernization', 'Cloud engineering', 'Product design'],
  themeColor: '#fafaf8',
  defaultImage: '/og/endrare-og.png',
  defaultImageAlt: 'Endrare: Good ideas. Extraordinarily built. Software, AI and digital products, Sweden.',
  defaultTitle: 'Endrare — Software & AI Studio in Sweden',
  defaultDescription:
    'Endrare is a software and AI studio in Sweden. We build websites, apps, AI automation, and reliable systems for businesses. Led by Deependra.',
}

export const AUTHOR = {
  name: SITE.author,
  url: SITE.authorUrl,
  jobTitle: 'Software Builder',
  knowsAbout: [
    'Software Engineering',
    'AI',
    'Product Thinking',
    'UX',
    'Systems Design',
    'Computer Vision',
  ],
}

export const PAGE_SEO = [
  {
    id: 'playground',
    path: '/playground',
    title: 'Playground',
    seoTitle: 'Endrare Playground — Build Interactive Website Ideas',
    description: 'Create, edit, and animate responsive website directions in the Endrare Playground.',
    type: 'website',
    changefreq: 'monthly',
    priority: '0.8',
    dateModified: '2026-09-08',
    keywords: ['Endrare Playground', 'website builder', 'interactive design', 'motion design'],
  },
  {
    id: 'services', path: '/services', title: 'Services',
    seoTitle: 'Software Development & AI Services — Endrare Studio',
    description: 'Software and AI services from Endrare: AI automation, internal assistants, AI security reviews, websites, mobile apps, modernization, and cloud engineering.',
    type: 'website', changefreq: 'monthly', priority: '0.9', dateModified: '2026-09-08',
    keywords: ['AI automation', 'internal AI assistant', 'AI security review', 'web development', 'mobile app development', 'software modernization', 'cloud engineering', 'Endrare'],
  },
  {
    id: 'home',
    path: '/',
    title: SITE.defaultTitle,
    seoTitle: SITE.defaultTitle,
    description: SITE.defaultDescription,
    type: 'website',
    changefreq: 'weekly',
    priority: '1.0',
    keywords: [
      'Endrare',
      'software studio Sweden',
      'AI automation',
      'web development',
      'app development',
      'software development Sweden',
      'AI consultant',
      'Deependra',
    ],
  },
  {
    id: 'archive',
    path: '/archive',
    title: 'Journal',
    seoTitle: 'Journal — Case Studies, Essays and Field Notes | Endrare',
    description:
      'Case studies, essays, and field notes from Endrare on building software, applied AI, product clarity, and reliable systems.',
    type: 'website',
    changefreq: 'weekly',
    priority: '0.8',
    keywords: ['Endrare journal', 'case studies', 'essays', 'field notes', 'software systems'],
  },
  {
    id: 'thinking',
    path: '/archive/thinking',
    title: 'Thinking',
    seoTitle: 'Thinking — Case Studies, Essays and Field Notes by Deependra',
    description:
      'A collection of case studies, essays, product decisions, and field notes about software, AI, clarity, operations, culture, and systems thinking.',
    type: 'website',
    changefreq: 'weekly',
    priority: '0.8',
    keywords: ['product thinking', 'UX clarity', 'systems thinking', 'case studies', 'field notes'],
    redirectTo: '/archive',
  },
  {
    id: 'products',
    path: '/products',
    title: 'Work',
    seoTitle: 'Work — Client Projects, Products and AI Systems | Endrare',
    description:
      'Client work and products from Endrare: websites, AI systems, mobile apps, and cloud engineering, including Dina Hantverkare, Skift, Outlier, and Expense Hive.',
    type: 'website',
    changefreq: 'weekly',
    priority: '0.85',
    keywords: ['client work', 'software products', 'AI systems', 'Dina Hantverkare', 'Expense Hive', 'Pose Estimation', 'Food Tracker', 'Outlier', 'Skift'],
  },
  {
    id: 'start',
    path: '/start',
    title: 'Start Here',
    seoTitle: 'Start Here — Endrare',
    description:
      'A guided path through Deependra\'s work, products, case studies, field notes, and product thinking.',
    type: 'website',
    changefreq: 'monthly',
    priority: '0.75',
    keywords: ['Endrare start here', 'Deependra portfolio', 'software products', 'case studies'],
  },
  {
    id: 'about',
    path: '/about',
    title: 'About Endrare',
    seoTitle: 'About Endrare — Software, AI & the People Behind the Work',
    description:
      'Meet Endrare, a software and AI studio in Sweden led by Deependra Sai Kumar Reddy. Thoughtful software, applied AI, product thinking, and reliable systems.',
    type: 'website',
    changefreq: 'monthly',
    priority: '0.7',
    keywords: ['Endrare', 'Deependra Sai Kumar Reddy', 'software studio Sweden', 'AI', 'product thinking', 'systems'],
  },
  {
    id: 'contact',
    path: '/contact',
    title: 'Contact',
    seoTitle: 'Contact Endrare — Start a Software or AI Project',
    description:
      'Contact Endrare about a website, app, AI automation, or software project. Email hello@endrare.com and hear back from founder Deependra.',
    type: 'website',
    changefreq: 'monthly',
    priority: '0.6',
    keywords: ['contact Endrare', 'hire software developer', 'AI projects', 'website project'],
  },
]

// Future content rule:
// Add one object here for every new public case study, essay, field note, note,
// build log, or product page. The build script uses this data for page links,
// canonical URLs, JSON-LD, sitemap.xml, Open Graph, and legacy copies.
export const CONTENT_ITEMS = [
  {
    id: 'building-skift-from-real-operations',
    sourceFile: 'casestudy/skiftcasestudy.html',
    path: '/case-studies/building-skift-from-real-operations',
    legacyPaths: ['/casestudy/skiftcasestudy.html', '/skiftcasestudy.html', '/skift-case-study'],
    type: 'Case Study',
    articleType: 'Article',
    archiveLabel: '2025 / Essay',
    title: 'Building Skift from real operations',
    seoTitle: 'Building Skift from Real Operations — Endrare Case Study',
    description:
      'How Skift was built from real restaurant operations: scheduling, team communication, sales-aware planning, and AI-assisted decisions.',
    category: 'Product / Operations / AI',
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    readTime: '12-14 min',
    image: SITE.defaultImage,
    imageAlt: 'Endrare case study cover for Building Skift from Real Operations',
    keywords: [
      'Skift',
      'workforce operations',
      'product operations',
      'AI-assisted decisions',
      'restaurant scheduling',
      'software engineering',
      'product thinking',
      'Endrare',
      'Deependra',
    ],
    relatedPages: ['/products/skift', '/archive/thinking', '/notes/what-working-in-sweden-taught-me-about-software'],
    archiveDescription: 'How working real shifts changed every decision in the product.',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    id: 'what-working-in-sweden-taught-me-about-software',
    sourceFile: 'notes/taughtinsweden.html',
    path: '/notes/what-working-in-sweden-taught-me-about-software',
    legacyPaths: ['/notes/taughtinsweden.html', '/taughtinsweden.html', '/taught-in-sweden'],
    type: 'Field Note',
    articleType: 'Article',
    archiveLabel: '2025 / Note',
    title: 'What working in Sweden taught me about software',
    seoTitle: 'What Working in Sweden Taught Me About Software — Endrare',
    description:
      'A field note on what working in Sweden taught Deependra about software: trust, timing, documentation, and systems that reduce effort.',
    category: 'Work / Culture / Systems / Product Thinking',
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    readTime: '8-10 min',
    image: SITE.defaultImage,
    imageAlt: 'Endrare field note cover for What Working in Sweden Taught Me About Software',
    keywords: [
      'field notes',
      'working in Sweden',
      'software culture',
      'systems thinking',
      'documentation',
      'trust',
      'product thinking',
      'Deependra',
    ],
    relatedPages: ['/case-studies/building-skift-from-real-operations', '/archive/thinking', '/products/skift'],
    archiveDescription: 'Speed, trust, and the cost of unclear systems.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    id: 'why-clarity-is-a-product-decision',
    sourceFile: 'casestudy/productclarity.html',
    path: '/case-studies/why-clarity-is-a-product-decision',
    legacyPaths: ['/casestudy/productclarity.html', '/productclarity.html', '/product-clarity'],
    type: 'Essay',
    articleType: 'Article',
    archiveLabel: '2025 / Essay',
    title: 'Why clarity is a product decision',
    seoTitle: 'Why Clarity Is a Product Decision — Endrare',
    description:
      'Why reducing cognitive load is an engineering problem as much as a design one, with lessons from Expense Hive, Food Tracker, Skift, and Endrare.',
    category: 'Product Thinking / UX / Engineering',
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    readTime: '12-14 min',
    image: SITE.defaultImage,
    imageAlt: 'Endrare essay cover for Why Clarity Is a Product Decision',
    keywords: [
      'product thinking',
      'UX clarity',
      'cognitive load',
      'software engineering',
      'systems design',
      'Expense Hive',
      'Food Tracker',
      'Pose Estimation',
      'Endrare',
      'Deependra',
    ],
    relatedPages: ['/products/expense-hive', '/products/pose-estimation', '/products/food-tracker', '/products/endrare'],
    archiveDescription: 'Reducing cognitive load is not a design problem. It is an engineering problem.',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    id: 'backend-systems-should-feel-invisible',
    sourceFile: 'notes/backendinvisible.html',
    path: '/notes/backend-systems-should-feel-invisible',
    legacyPaths: ['/notes/backendinvisible.html', '/backendinvisible.html', '/backend-invisible'],
    type: 'Note',
    articleType: 'Article',
    archiveLabel: '2025 / Note',
    title: 'Backend systems should feel invisible',
    seoTitle: 'Backend Systems Should Feel Invisible — Endrare',
    description:
      'A note on backend systems that feel invisible: infrastructure, APIs, reliability, naming, and error handling that work without adding burden.',
    category: 'Backend / Infrastructure / Engineering',
    datePublished: '2026-05-22',
    dateModified: '2026-05-22',
    readTime: '4-5 min',
    image: SITE.defaultImage,
    imageAlt: 'Endrare note cover for Backend Systems Should Feel Invisible',
    keywords: [
      'backend systems',
      'infrastructure',
      'software engineering',
      'reliable systems',
      'API design',
      'product experience',
      'Endrare',
      'Deependra',
    ],
    relatedPages: ['/archive/thinking', '/products/endrare', '/case-studies/why-clarity-is-a-product-decision'],
    archiveDescription: 'The best infrastructure is the kind nobody notices is there.',
    changefreq: 'monthly',
    priority: '0.75',
  },
]

export const PRESENTATION_PAGES = [
  {
    id: 'skift-presentation',
    sourceFile: 'presentations/skiftpresentation.html',
    path: '/presentations/skiftpresentation.html',
    legacyPaths: ['/skiftpresentation.html', '/skift'],
    type: 'Presentation',
    title: 'Skift Presentation',
    seoTitle: 'Skift Presentation — Endrare',
    description:
      'A product presentation for Skift, an operations and workforce system shaped by scheduling, communication, performance insight, and AI-assisted planning.',
    category: 'Product / Operations / AI',
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    image: SITE.defaultImage,
    imageAlt: 'Endrare preview for the Skift product presentation',
    keywords: ['Skift', 'workforce scheduling', 'product presentation', 'AI operations', 'Endrare'],
    relatedPages: ['/products/skift', '/case-studies/building-skift-from-real-operations'],
    changefreq: 'monthly',
    priority: '0.65',
  },
]

export const STANDALONE_PAGES = [
  {
    id: 'conversation',
    redirectTo: '/contact',
    sourceFile: 'conversation.html',
    path: '/conversation.html',
    type: 'website',
    title: 'Conversation',
    seoTitle: 'Conversation — Endrare',
    description:
      'Start a conversation with Endrare about a software, website, or AI project.',
    category: 'Contact / Collaboration',
    datePublished: '2026-05-13',
    dateModified: '2026-05-13',
    image: SITE.defaultImage,
    imageAlt: 'Endrare conversation page preview',
    keywords: ['contact Deependra', 'Endrare', 'software collaboration', 'AI projects', 'product thinking'],
    relatedPages: ['/', '/archive', '/products'],
    changefreq: 'monthly',
    priority: '0.55',
  },
]

export const PRODUCT_ITEMS = [
  {
    id: 'expense-hive',
    path: '/products/expense-hive',
    title: 'Expense Hive',
    seoTitle: 'Expense Hive — Group Expense Splitting App by Deependra',
    description:
      'Expense Hive is a mobile app for shared expenses: log costs, split bills in groups, send reminders, chat, and track weekly or monthly spending.',
    longDescription:
      'A mobile app built during the bachelor\'s to solve the real friction of shared group expenses. Instead of informal IOUs or shared spreadsheets, Expense Hive gives groups a single place to log costs, split bills automatically, chase reminders, and keep the conversation attached to the money.',
    highlights: [
      'Instant expense logging with group attribution',
      'Automatic bill splitting with configurable ratios',
      'Payment reminders and in-app notifications',
      'Built-in group chat tied to shared expenses',
      'Weekly and monthly spending summaries per member',
    ],
    category: 'Mobile / Finance / Social Utility',
    status: 'Bachelor project',
    schemaType: 'SoftwareApplication',
    applicationCategory: 'FinanceApplication',
    keywords: ['group expense splitting app', 'shared expense tracker', 'bill splitting', 'payment reminders', 'group chat for expenses'],
    relatedPages: ['/case-studies/why-clarity-is-a-product-decision', '/products'],
    dateModified: '2026-05-13',
  },
  {
    id: 'pose-estimation',
    path: '/products/pose-estimation',
    title: 'Pose Estimation',
    seoTitle: 'Pose Estimation for Sports Movement Analysis — Endrare',
    description:
      'Thesis research using pose-estimation machine learning to analyse athlete movement from video and give coaches readable data on injury risk.',
    longDescription:
      'A thesis project applying computer vision and machine learning to analyse athlete movement from standard video input. The system extracts joint positions frame-by-frame using pose estimation, producing interpretable movement data for coaches and analysts — surfacing patterns the human eye misses under pressure or speed.',
    highlights: [
      'Real-time joint tracking using MediaPipe pose estimation',
      'Movement pattern analysis from standard video input',
      'Body, leg, ankle, and movement attribute extraction per frame',
      'Injury-risk signal identification and flagging for coaches',
      'Readable output designed for non-ML sports professionals',
    ],
    category: 'AI / Computer Vision / Sports Technology',
    status: 'Thesis / Research',
    schemaType: 'CreativeWork',
    keywords: ['pose estimation', 'sports movement analysis', 'athlete movement tracking', 'computer vision', 'injury-risk awareness'],
    relatedPages: ['/case-studies/why-clarity-is-a-product-decision', '/products'],
    dateModified: '2026-05-13',
  },
  {
    id: 'food-tracker',
    path: '/products/food-tracker',
    title: 'Food Tracker',
    seoTitle: 'Automated Food, Gym and Daily Activity Tracker — Endrare',
    description:
      'A personal automation tool that logs food, gym, and daily activity from plain language and breaks meals into nutritional values automatically.',
    longDescription:
      'A personal automation tool designed to remove the interface friction that kills most tracking habits. Users log food, gym sessions, and daily activity in plain language — the system parses the input, breaks it into structured nutritional and activity data, and maintains the running record automatically.',
    highlights: [
      'Natural language food and activity logging — no forms, no dropdowns',
      'Automatic nutritional breakdown from free-text input',
      'Gym and workout session tracking with activity categorisation',
      'Daily and weekly summaries without any manual entry',
      'Low enough friction to sustain as a real daily habit',
    ],
    category: 'Health / Automation / Tracking',
    status: 'Personal automation',
    schemaType: 'SoftwareApplication',
    applicationCategory: 'HealthApplication',
    keywords: ['automated food tracker', 'gym activity tracker', 'nutrition logging', 'natural language food logging', 'daily activity tracker'],
    relatedPages: ['/case-studies/why-clarity-is-a-product-decision', '/products'],
    dateModified: '2026-05-13',
  },
  {
    id: 'outliner',
    path: '/products/outlier',
    legacyPaths: ['/products/outliner'],
    title: 'Outlier',
    seoTitle: 'Outlier — AI Response Generation System by Deependra',
    description:
      'Outlier is a context-aware AI writing system. It learns prompt patterns and interaction history to draft responses that fit, cutting repetitive writing.',
    longDescription:
      'An AI system built on the observation that generic outputs fail because they ignore context. Outlier builds a structured understanding of prompt patterns, interaction history, and communication style — then uses that context to generate responses that fit the situation, reducing the manual effort of drafting from nothing each time.',
    highlights: [
      'Context-aware response generation from interaction history',
      'Prompt pattern library built and refined from real usage',
      'Adaptive output that matches established communication style',
      'Significant reduction in repetitive drafting work',
      'Configurable response depth and tone settings',
    ],
    category: 'AI / NLP / Response Generation',
    status: 'AI system',
    schemaType: 'SoftwareApplication',
    applicationCategory: 'ProductivityApplication',
    keywords: ['AI response generation', 'context-aware AI', 'NLP response system', 'prompt-based response generation', 'Outlier AI'],
    relatedPages: ['/products', '/archive/thinking'],
    dateModified: '2026-05-13',
  },
  {
    id: 'flask-docker-aws',
    path: '/products/flask-docker-aws',
    title: 'Flask App — Docker on AWS',
    seoTitle: 'Flask Web App Deployed with Docker on AWS — Endrare',
    description:
      'A containerised Flask web application with full end-to-end ownership — from backend development to cloud deployment on AWS.',
    longDescription:
      'A containerised web application built with complete end-to-end ownership — from writing the Flask backend to running it reliably on AWS. The project covers backend API development, Docker containerisation for environment consistency, and cloud deployment with production-style configuration on Linux. Built to close the gap between knowing how deployment works in theory and actually owning it in practice.',
    highlights: [
      'Flask backend with clean, modular API structure',
      'Docker containerisation for reproducible environments',
      'AWS deployment with production-ready configuration',
      'Linux server setup and process management',
      'Full ownership from local development to live cloud environment',
    ],
    category: 'Backend / Cloud / DevOps',
    status: 'Deployed system',
    schemaType: 'SoftwareApplication',
    applicationCategory: 'DeveloperApplication',
    keywords: ['Flask web app', 'Docker deployment', 'AWS cloud', 'containerised application', 'backend development', 'DevOps'],
    relatedPages: ['/products/cloud-infrastructure', '/products'],
    dateModified: '2026-05-22',
  },
  {
    id: 'cloud-infrastructure',
    path: '/products/cloud-infrastructure',
    title: 'Cloud Infrastructure & Monitoring',
    seoTitle: 'AWS Cloud Infrastructure and Monitoring — Endrare',
    description:
      'AWS infrastructure with VPC network isolation, EC2 compute, and CloudWatch observability, load tested under realistic production conditions.',
    longDescription:
      'AWS infrastructure designed from the ground up with reliability and observability as primary constraints. The system uses a VPC with public and private subnet separation, EC2 compute instances, and CloudWatch for monitoring and alerting. Load testing was run under realistic traffic conditions — not just a deployed system, but infrastructure that holds up under pressure and surfaces the right signals when it doesn\'t.',
    highlights: [
      'VPC design with public/private subnet isolation',
      'EC2 instance provisioning, configuration, and management',
      'CloudWatch monitoring, logging, and alerting setup',
      'Load testing under production-style traffic conditions',
      'Observability-first thinking built into every infrastructure decision',
    ],
    category: 'Infrastructure / AWS / Observability',
    status: 'Systems design',
    schemaType: 'CreativeWork',
    keywords: ['AWS infrastructure', 'VPC design', 'EC2', 'CloudWatch monitoring', 'cloud observability', 'load testing', 'AWS'],
    relatedPages: ['/products/flask-docker-aws', '/products'],
    dateModified: '2026-05-22',
  },
  {
    id: 'skift',
    path: '/products/skift',
    title: 'Skift',
    seoTitle: 'Skift — Workforce Operations System by Deependra',
    description:
      'Skift is a workforce and operations system shaped by real restaurant work, scheduling, communication, sales-aware planning, and AI-assisted decisions.',
    category: 'Product / Operations / AI',
    status: 'Active build',
    schemaType: 'SoftwareApplication',
    applicationCategory: 'BusinessApplication',
    keywords: ['Skift', 'workforce scheduling', 'operations system', 'AI-assisted planning', 'restaurant operations'],
    relatedPages: ['/presentations/skiftpresentation.html', '/case-studies/building-skift-from-real-operations'],
    dateModified: '2026-05-13',
  },
  {
    id: 'endrare',
    path: '/products/endrare',
    title: 'Endrare',
    seoTitle: 'Endrare — The Studio Website and Identity',
    description:
      'How the Endrare website and identity were designed and built: typography, color, motion, and a fast, readable site for the studio.',
    category: 'Identity / Portfolio / Product Thinking',
    status: 'Live archive',
    schemaType: 'WebSite',
    keywords: ['personal archive', 'software portfolio', 'product case studies', 'AI project archive'],
    relatedPages: ['/', '/archive', '/products'],
    dateModified: '2026-05-13',
  },
]

export function normalizePath(path) {
  if (!path || path === '/') return '/'
  return `/${path}`.replace(/\/+/g, '/').replace(/\/$/, '')
}

export function canonicalUrl(path) {
  return `${SITE.url}${publicPath(path)}`
}

export function absoluteUrl(path) {
  if (!path) return canonicalUrl('/')
  if (/^https?:\/\//i.test(path)) return path
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function publicPath(path) {
  const normalized = normalizePath(path)
  if (normalized === '/' || normalized.endsWith('.html')) return normalized
  return `${normalized}/`
}

export function getPageById(id) {
  return PAGE_SEO.find((page) => page.id === id)
}

export function getArchiveEntries() {
  return CONTENT_ITEMS.map((item) => ({
    date: item.archiveLabel,
    title: item.title,
    href: publicPath(item.legacyPaths?.[0] || item.path),
    sub: item.archiveDescription || item.description,
  }))
}

export function getAllSitemapPages() {
  return [
    ...PAGE_SEO.filter(page => !page.redirectTo),
    ...CONTENT_ITEMS,
    ...PRESENTATION_PAGES,
    ...STANDALONE_PAGES.filter(page => !page.redirectTo),
    ...PRODUCT_ITEMS.map((product) => ({
      ...product,
      type: 'website',
      changefreq: 'monthly',
      priority: product.id === 'skift' ? '0.75' : '0.7',
    })),
  ]
}
