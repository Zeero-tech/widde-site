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
