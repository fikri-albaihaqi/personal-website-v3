import { NextResponse } from 'next/server'

const formatDateForSitemap = (dateString: string | Date): string => {
  const date = new Date(dateString)
  return date.toISOString().split('.')[0] + 'Z'
}

export async function GET() {
  const baseUrl = 'https://fikrialbaihaqi.netlify.app'

  const now = formatDateForSitemap(new Date())

  const staticPages: { path: string }[] = [
    { path: '' },
    { path: '/allprojects' },
    { path: '/Resume_Fikri.pdf' },
  ]

  // Combine all routes
  const allRoutes = staticPages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: now,
  }))

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `<url>
  <loc>${route.url}</loc>
  <lastmod>${route.lastModified}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1</priority>
</url>`
  })
  .join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
