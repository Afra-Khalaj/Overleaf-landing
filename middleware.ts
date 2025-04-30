// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If already has locale, do nothing
  if (pathname.startsWith('/fa') || pathname.startsWith('/en')) {
    return NextResponse.next();
  }

  // Redirect root "/" to default locale
  return NextResponse.redirect(new URL('/fa', request.url));
}

// Only run middleware on root and not static assets
export const config = {
  matcher: ['/((?!_next|favicon.ico|icons|gifs|fonts|.*\\..*).*)'],
};
