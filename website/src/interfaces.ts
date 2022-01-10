export interface Author {
  name: string
  avatar: any // TODO: Create Media typing
}

export interface Article {
  title: string
  slug: string
  content: any // TODO: Get Content Object typing from somewhere /shruggie
  author: Author
}

export interface FeaturedNewsItem {
  title: string
  youTubeVideoId: string
  description: string
  shareUrl: string
}

export interface Partner {
  name: string
  href: string
  logo: any // TODO: Create Media typing
  backgroundColor: string
}
