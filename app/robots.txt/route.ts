import { NextResponse } from 'next/server'

export async function GET() {
  return new NextResponse(
    `User-agent: *
Allow: /
Disallow: /_next/

Sitemap: https://fikrialbaihaqi.netlify.app/sitemap.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  )
}
