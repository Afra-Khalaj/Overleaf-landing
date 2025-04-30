// middleware.ts or middleware.js

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of supported locales
const supportedLocales = ['en', 'fa'];

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const pathname = url.pathname;

  // If the URL is "/" (root), don't redirect to default locale
  if (pathname === '/') {
    // You can return early to avoid redirect
    return NextResponse.next();
  }

  // Check if the URL already contains a locale segment (e.g., /en or /fa)
  const firstPathSegment = pathname.split('/')[1];
  
  if (!supportedLocales.includes(firstPathSegment)) {
    // If no valid locale, rewrite to "/en" (or any other default locale)
    url.pathname = `/en${pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/:path*'], // Apply to all paths
};
