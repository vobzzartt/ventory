import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: [
      'https://ventory.com/sitemap.xml',
      'https://ventory.com/feed.xml',
    ],
  }
}
