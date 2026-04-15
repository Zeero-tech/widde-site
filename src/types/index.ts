export interface CasePost {
  bg: string
  image?: string
  category: string
  title: string
  desc: string
  link: string
}

export interface BlogPost {
  bg: string
  image?: string
  category: string
  title: string
  desc: string
  link: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  category: string
  description: string
  image?: string
}

export interface BlogPostFull extends BlogPostMeta {
  content: string
}

export interface CasePostMeta {
  slug: string
  title: string
  brand: string
  date: string
  category: string
  description: string
  image?: string
  quote?: string
  quoteAuthor?: string
  metrics?: { label: string; value: string }[]
}

export interface CasePostFull extends CasePostMeta {
  content: string
}

export interface IntegrationLogo {
  src: string
  alt: string
  featured?: boolean
  height?: number
}

export interface TickerLogo {
  name: string
  url: string
  img?: string
  width?: number
  platform?: string
  segment?: string
  demoUrl?: string
}
