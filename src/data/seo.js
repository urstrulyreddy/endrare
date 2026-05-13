export const SITE = {
  name: 'Endrare',
  url: 'https://endrare.com',
  language: 'en',
  author: 'Deependra Sai Kumar Reddy',
  authorShort: 'Deependra',
  authorUrl: 'https://endrare.com',
  themeColor: '#fafaf8',
  defaultImage: '/og/endrare-og.svg',
  defaultImageAlt: 'Endrare wordmark on a warm off-white background',
  defaultTitle: 'Endrare — Deependra’s Product, Software and AI Archive',
  defaultDescription:
    'Endrare is Deependra’s archive of software products, AI projects, product thinking, case studies, field notes, and systems built from real-world problems.',
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
      'Deependra',
      'software builder',
      'product thinking',
      'AI projects',
      'software engineering',
      'systems design',
      'field notes',
    ],
  },
  {
    id: 'archive',
    path: '/archive',
    title: 'Archive',
    seoTitle: 'Archive — Endrare',
    description:
      'Explore Endrare’s archive of case studies, essays, field notes, product ideas, AI projects, software systems, and build reflections.',
    type: 'website',
    changefreq: 'weekly',
    priority: '0.8',
    keywords: ['Endrare archive', 'case studies', 'essays', 'field notes', 'software systems'],
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
  },
  {
    id: 'products',
    path: '/products',
    title: 'Products',
    seoTitle: 'Products — Software, AI and Systems Built by Deependra',
    description:
      'Explore software products, AI systems, personal tools, and research projects built by Deependra, including Expense Hive, Pose Estimation, Food Tracker, Outliner, Skift, and Endrare.',
    type: 'website',
    changefreq: 'weekly',
    priority: '0.85',
    keywords: ['software products', 'AI systems', 'Expense Hive', 'Pose Estimation', 'Food Tracker', 'Outliner', 'Skift'],
  },
  {
    id: 'start',
    path: '/start',
    title: 'Start Here',
    seoTitle: 'Start Here — Endrare',
    description:
      'A guided path through Deependra’s work, products, case studies, field notes, and product thinking.',
    type: 'website',
    changefreq: 'monthly',
    priority: '0.75',
    keywords: ['Endrare start here', 'Deependra portfolio', 'software products', 'case studies'],
  },
  {
    id: 'about',
    path: '/about',
    title: 'About Deependra',
    seoTitle: 'About Deependra — Endrare',
    description:
      'Learn about Deependra Sai Kumar Reddy, a software builder focused on AI, product thinking, systems, UX clarity, and real-world problem solving.',
    type: 'website',
    changefreq: 'monthly',
    priority: '0.7',
    keywords: ['Deependra Sai Kumar Reddy', 'software builder', 'AI', 'product thinking', 'systems'],
  },
  {
    id: 'contact',
    path: '/contact',
    title: 'Contact',
    seoTitle: 'Contact — Endrare',
    description:
      'Contact Deependra for software roles, product collaboration, AI projects, case studies, or professional opportunities.',
    type: 'website',
    changefreq: 'monthly',
    priority: '0.6',
    keywords: ['contact Deependra', 'software roles', 'AI projects', 'product collaboration'],
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
      'A case study on building Skift from real operations: scheduling, communication, sales-aware planning, AI-assisted decisions, and workforce systems shaped by restaurant work.',
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
      'A field note on how working in Sweden shaped Deependra’s thinking about software, trust, timing, documentation, boundaries, social friction, and systems that reduce human effort.',
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
      'An essay on why reducing cognitive load is not only a design problem but an engineering problem, connecting Expense Hive, Food Tracker, Pose Estimation, Skift, and Endrare.',
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
    sourceFile: 'conversation.html',
    path: '/conversation.html',
    type: 'website',
    title: 'Conversation',
    seoTitle: 'Conversation — Endrare',
    description:
      'Start a thoughtful conversation with Deependra about software, AI projects, product collaboration, case studies, or serious professional opportunities.',
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
      'Expense Hive is a mobile app built during bachelor’s to instantly log expenses, split bills between groups, add reminders, use group chat, and track weekly or monthly spending.',
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
      'A thesis project using pose-estimation machine learning to analyze athlete movement and provide coaches with real-time body, leg, ankle, and movement attributes for injury-risk awareness.',
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
      'A personal automation tool for logging food, gym, and daily activity using natural language input, then breaking food entries into nutritional values automatically.',
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
    path: '/products/outliner',
    title: 'Outliner',
    seoTitle: 'Outliner — AI Response Generation System by Deependra',
    description:
      'Outliner is an AI-powered response-generation system built around context, prompt patterns, interaction history, and adaptive responses.',
    category: 'AI / NLP / Response Generation',
    status: 'AI system',
    schemaType: 'SoftwareApplication',
    applicationCategory: 'ProductivityApplication',
    keywords: ['AI response generation', 'context-aware AI', 'NLP response system', 'prompt-based response generation'],
    relatedPages: ['/products', '/archive/thinking'],
    dateModified: '2026-05-13',
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
    seoTitle: 'Endrare — Personal Archive for Software and Product Thinking',
    description:
      'Endrare is a personal archive for software products, AI projects, case studies, field notes, and product thinking.',
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
    ...PAGE_SEO,
    ...CONTENT_ITEMS,
    ...PRESENTATION_PAGES,
    ...STANDALONE_PAGES,
    ...PRODUCT_ITEMS.map((product) => ({
      ...product,
      type: 'website',
      changefreq: 'monthly',
      priority: product.id === 'skift' ? '0.75' : '0.7',
    })),
  ]
}
