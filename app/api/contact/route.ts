import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/contact
 *
 * Mock endpoint for the public contact form. Validates the payload and
 * returns success without actually sending an email.
 *
 * TODO: Replace the mock logic below with a real email send, e.g. using
 * Resend, SendGrid, or Nodemailer + SMTP:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.EMAIL_SERVER_API_KEY);
 *   await resend.emails.send({
 *     from: "SAKFLY Studio <noreply@sakflystudio.com>",
 *     to: process.env.CONTACT_EMAIL_TO!,
 *     subject: `New contact form message: ${subject}`,
 *     text: `From: ${name} <${email}>\n\n${message}`,
 *   });
 *
 * You may also want to persist the message to Firestore's
 * `contactMessages` collection (see lib/schema.ts -> ContactMessage).
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { name, email, subject, message } = body as Record<string, string>;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  await new Promise((resolve) => setTimeout(resolve, 400));

  return NextResponse.json({
    success: true,
    id: `msg_${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date().toISOString(),
  });
}
