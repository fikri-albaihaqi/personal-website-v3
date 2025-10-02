import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://fikrialbaihaqi.netlify.app'

  // Static routes (add any pages you have)
  const staticPages: { path: string; lastModified: string }[] = [
    { path: '', lastModified: new Date().toISOString() }, // homepage
    { path: '/allprojects', lastModified: new Date().toISOString() },
    { path: '/Resume_Fikri.pdf', lastModified: new Date().toISOString() },
  ]

  // Combine all routes
  const allRoutes: { url: string; lastModified: string }[] = [
    // static
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: page.lastModified,
    })),
  ]

  // Build XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((route) => {
    return `
  <url>
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
