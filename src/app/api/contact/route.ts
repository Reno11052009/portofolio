import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (!smtpHost || !smtpUser || !smtpPass) {
      console.error('SMTP configuration missing from environment variables.');
      return NextResponse.json(
        { error: 'Email service configuration is incomplete on the server.' },
        { status: 500 }
      );
    }

    const contactReceiver = process.env.CONTACT_RECEIVER_EMAIL || smtpUser;

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Prepare email options
    const mailOptions = {
      from: `"${name}" <${smtpUser}>`, // Send using verified SMTP user
      to: contactReceiver,
      replyTo: email, // Set replyTo as sender's email so the user can easily reply
      subject: `New Message from Portfolio: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h2 style="color: #7c5cff; margin-top: 0; font-size: 20px;">New Contact Form Submission</h2>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 15px 0;" />
          <p style="margin: 8px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0; font-size: 14px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #7c5cff; text-decoration: none;">${email}</a></p>
          <p style="margin: 15px 0 5px 0; font-size: 14px;"><strong>Message:</strong></p>
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #f3f4f6; white-space: pre-wrap; color: #374151; font-size: 14px; line-height: 1.5;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="font-size: 11px; color: #9ca3af; text-align: center; margin-bottom: 0;">This email was sent automatically from the contact form on your portfolio website.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send email. Please check your SMTP settings.' },
      { status: 500 }
    );
  }
}
