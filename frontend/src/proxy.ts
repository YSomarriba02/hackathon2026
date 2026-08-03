import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  console.log("se hix el proxy");
  const cookie = request.cookies.get("access_token");
  if (!cookie) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/profile',
}