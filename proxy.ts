import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');

  const canonicalDomain = 'aljameelonlinequranacademy.com';
  const canonicalUrl = `https://${canonicalDomain}`;

  // Allow localhost and vercel preview domains to work as normal
  if (
    hostname.includes('localhost') || 
    hostname.includes('.vercel.app') ||
    hostname.includes('.local') ||
    hostname.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/) // Allow IP addresses (like local dev)
  ) {
    return NextResponse.next();
  }

  // Redirect if not the canonical domain OR if not HTTPS
  // This will catch www.aljameelonlinequranacademy.com and other domains
  if (hostname !== canonicalDomain || protocol !== 'https') {
    return NextResponse.redirect(`${canonicalUrl}${url.pathname}${url.search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths except static files, api routes, Next.js internals, and images
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};
