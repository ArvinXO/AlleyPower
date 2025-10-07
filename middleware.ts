import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function cspHeader(nonce: string) {
  const isDev = process.env.NODE_ENV !== "production";
  const policies = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}'${isDev ? " 'unsafe-eval'" : ""}`,
    `style-src 'self' 'unsafe-inline'`,
    `img-src 'self' data: blob: https:`,
    `font-src 'self' data:`,
    `connect-src 'self' https:`,
    `frame-ancestors 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `object-src 'none'`,
    `upgrade-insecure-requests`,
  ];
  return policies.join("; ");
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  res.headers.set("x-nonce", nonce);
  res.headers.set("Content-Security-Policy", cspHeader(nonce));

  return res;
}

export const config = {
  matcher: "/:path*",
};
