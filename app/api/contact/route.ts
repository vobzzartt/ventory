import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // 1. Send email to the Lab team
    await resend.emails.send({
      from: 'Big7 Technologies <onboarding@resend.dev>',
      to: 'victorbodude@gmail.com',
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    // 2. Send confirmation email to the user
    await resend.emails.send({
      from: 'Big7 Technologies <onboarding@resend.dev>',
      to: email,
      subject: 'Inquiry Received - Big7 Technologies',
      text: `Hello ${name},\n\nThank you for reaching out to Big7 Technologies. We have received your inquiry regarding "${subject}".\n\nOur engineering team will review your message and get back to you within 24 hours.\n\nBest regards,\David`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Resend Error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
