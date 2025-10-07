import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // TODO: hook up to email provider (Resend/SendGrid) or store in DB
  console.log("Contact form submission:", body);
  return NextResponse.json({ ok: true });
}
