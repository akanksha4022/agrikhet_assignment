import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value || ""
  const protectedPaths = ["/profile"]

  if (protectedPaths.includes(request.nextUrl.pathname) && !token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/profile"],
}
