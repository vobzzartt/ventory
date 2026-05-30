import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')

export async function POST(req: Request) {
  try {
    const formData = await req.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const profile = formData.get('profile') as string
    const experience = formData.get('experience') as string
    const motivation = formData.get('motivation') as string
    const contribution = formData.get('contribution') as string
    const role = formData.get('role') as string
    const cvFile = formData.get('cv_file') as File

    if (!process.env.RESEND_API_KEY) {
      console.error('CRITICAL: RESEND_API_KEY is missing from environment variables.')
      return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 })
    }

    // File size check (5MB limit)
    if (cvFile && cvFile.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'File size too large (max 5MB)' }, { status: 400 })
    }

    console.log(`Processing application for: ${name} <${email}>`)

    // Convert file to buffer for Resend
    let attachments: any[] = []
    if (cvFile && cvFile.size > 0) {
      const buffer = Buffer.from(await cvFile.arrayBuffer())
      attachments = [{
        filename: cvFile.name,
        content: buffer,
      }]
    }

    // 1. Notify the Big7 Lab Team with CV Attachment
    await resend.emails.send({
      from: 'Big7 Technologies <onboarding@resend.dev>',
      to: 'victorbodude@gmail.com',
      replyTo: email,
      subject: `New Job Application: ${role} - ${name}`,
      attachments: attachments,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="color: #111827; margin-bottom: 24px;">New Application Received</h2>
          
          <div style="margin-bottom: 16px;">
            <p style="font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; margin: 0 0 4px 0;">Candidate</p>
            <p style="font-size: 16px; color: #111827; margin: 0;"><strong>${name}</strong> (${email})</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; margin: 0 0 4px 0;">Role Applied For</p>
            <p style="font-size: 16px; color: #111827; font-weight: bold; margin: 0;">${role}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; margin: 0 0 4px 0;">Profile Link</p>
            <p style="font-size: 14px; margin: 0;"><strong>GitHub/LinkedIn:</strong> ${profile}</p>
          </div>

          <div style="margin-bottom: 16px;">
            <p style="font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; margin: 0 0 4px 0;">Experience</p>
            <p style="font-size: 16px; color: #111827; margin: 0;">${experience} Years</p>
          </div>

          <div style="margin-bottom: 24px; padding: 16px; background: #f9fafb; border-radius: 8px;">
            <p style="font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; margin: 0 0 8px 0;">Why Big7?</p>
            <p style="font-size: 14px; color: #374151; line-height: 1.5;">${motivation}</p>
          </div>

          <div style="margin-bottom: 24px; padding: 16px; background: #f9fafb; border-radius: 8px;">
            <p style="font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; margin: 0 0 8px 0;">Proposed Contribution</p>
            <p style="font-size: 14px; color: #374151; line-height: 1.5;">${contribution}</p>
          </div>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 16px;">
            <p style="font-size: 12px; color: #9ca3af;">CV attached to this email. Sent via Big7 Careers Portal.</p>
          </div>
        </div>
      `,
    })

    // 2. Send Confirmation to Candidate
    await resend.emails.send({
      from: 'Big7 Technologies <onboarding@resend.dev>',
      to: email,
      subject: `Application Received: ${role} @ Big7 Technologies`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 32px; border: 1px solid #e5e7eb; border-radius: 16px; color: #111827;">
          <h1 style="font-size: 24px; font-weight: bold; margin-bottom: 24px; letter-spacing: -0.025em;">Engineering the Future.</h1>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Hello ${name.split(' ')[0]},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Thank you for your interest in joining the Big7 Technologies Lab. We've received your application and CV for the <strong>${role}</strong> position.
          </p>

          <div style="padding: 24px; background: #f9fafb; border-radius: 12px; border: 1px solid #f3f4f6; margin-bottom: 24px;">
            <h3 style="font-size: 14px; font-weight: bold; margin-bottom: 12px; text-transform: uppercase; color: #6b7280;">Next Steps</h3>
            <p style="font-size: 14px; line-height: 1.6; color: #374151; margin: 0;">
              Our engineering team is currently reviewing your background and contribution proposal. We pride ourselves on moving fast—you can expect to hear from us within <strong>48 hours</strong> regarding the next phase of the process.
            </p>
          </div>

          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
            In the meantime, feel free to explore our latest research at <a href="https://research.big7technologies.com" style="color: #111827; text-decoration: underline;">research.big7technologies.com</a>.
          </p>

          <div style="border-top: 1px solid #e5e7eb; padding-top: 24px;">
            <p style="font-size: 14px; font-weight: bold; margin: 0;">Big7 Technologies</p>
            <p style="font-size: 14px; color: #6b7280; margin: 4px 0 0 0;">Systems Research Lab</p>
          </div>
        </div>
      `,
    })
    
    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('CRITICAL EMAIL FAILURE:', error.message || error)
    return NextResponse.json({ 
      error: 'Failed to send application', 
      details: error.message 
    }, { status: 500 })
  }
}
