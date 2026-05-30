import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { jobApplicantEmailTemplate, jobAdminEmailTemplate } from '@/lib/emails/job-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const role = formData.get('role') as string
    const interest = formData.get('interest') as string
    const resumeFile = formData.get('resume') as File | null

    if (!name || !email || !role || !interest || !resumeFile || !(resumeFile instanceof File)) {
      return NextResponse.json({ error: 'All fields including resume are required.' }, { status: 400 })
    }

    // Convert file to Buffer for Resend attachment
    let buffer: Buffer
    try {
      buffer = Buffer.from(await resumeFile.arrayBuffer())
    } catch (err) {
      console.error('[Jobs API] Buffer conversion failed:', err)
      return NextResponse.json({ error: 'Invalid file format.' }, { status: 400 })
    }
    
    const filename = resumeFile.name

    // Use guaranteed working 'from' address from waitlist route
    const fromAddress = 'Ventory <hello@ventory.com>'

    // 1. Send confirmation to applicant
    const applicantEmail = await resend.emails.send({
      from: fromAddress,
      to: [email],
      subject: `Application Received: ${role} at Ventory`,
      html: jobApplicantEmailTemplate(name, role)
    })

    if (applicantEmail.error) {
      console.error('[Jobs API] Applicant email failed:', applicantEmail.error)
    }

    // 2. Send notification to admin with attachment
    const adminEmail = await resend.emails.send({
      from: 'Recruitment <hello@ventory.com>',
      to: ['hello@ventory.com'],
      replyTo: email,
      subject: `New Job Application: ${name} - ${role}`,
      html: jobAdminEmailTemplate(name, email, role, interest),
      attachments: [
        {
          filename: filename,
          content: buffer,
        },
      ],
    })

    if (adminEmail.error) {
       console.error('[Jobs API] Admin notification failed:', adminEmail.error)
       // If admin notification fails but applicant got theirs, we still return success 
       // but we've logged it for manual recovery.
    }

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' })
  } catch (error: any) {
    console.error('[Jobs API Error]:', error)
    return NextResponse.json({ error: 'Something went wrong on our end. Please try again.' }, { status: 500 })
  }
}
