// /api/contact.ts
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { contactFormSchema } from '../client/src/lib/shared/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (text: string) => {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests are allowed' });
  }
  try {
    const validationResult = contactFormSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({ message: "Validation failed", errors: validationResult.error.errors });
    }
    const { name, email, message } = validationResult.data;
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'chegesam68@gmail.com',
      replyTo: email, // Typo is fixed here
      subject: `Portfolio Contact: Message from ${escapeHtml(name)}`,
      html: `<h2>New Contact Form Submission</h2><p><strong>From:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    });
    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ message: "Failed to send email" });
    }
    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
}