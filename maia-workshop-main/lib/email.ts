// Email service integration with Gmail SMTP
import { Registration } from '@/types/registration';
import nodemailer from 'nodemailer';

function getGmailTransporter() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;

  if (!user || !pass) return null;

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass, // App-specific password
    },
  });
}

/**
 * Send confirmation email to workshop registrant
 */
export async function sendConfirmationEmail(registration: Registration): Promise<void> {
  try {
    // Only send if credentials are configured
    const transporter = getGmailTransporter();
    if (!transporter) {
      console.log('⚠️ Gmail credentials not configured. Email would be sent to:', registration.email);
      return;
    }

    await transporter.sendMail({
      from: `"AGENTIC AI Workshop" <${process.env.EMAIL_USER}>`,
      to: registration.email,
      subject: 'Workshop Registration Confirmed - AGENTIC AI',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .details h3 { color: #4f46e5; margin-top: 0; }
            .detail-item { margin: 10px 0; padding: 10px; border-left: 3px solid #4f46e5; padding-left: 15px; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
            .button { display: inline-block; background: #f97316; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Registration Confirmed!</h1>
              <p>AGENTIC AI Workshop</p>
            </div>
            
            <div class="content">
              <p>Dear <strong>${registration.fullName}</strong>,</p>
              
              <p>Thank you for registering for the AGENTIC AI workshop. We're excited to have you join us.</p>
              
              <div class="details">
                <h3>📅 Workshop Details</h3>
                
                <div class="detail-item">
                  <strong>📍 Location:</strong><br/>
                  FACULTY OF SCIENCE TETOUAN<br/>
                  Tetouan, Morocco
                </div>
                
                <div class="detail-item">
                  <strong>🗓️ Date:</strong><br/>
                  16 MAY 2026 - 8:00 AM
                </div>
                
                <div class="detail-item">
                  <strong>🎯 Theme:</strong><br/>
                  AGENTIC AI - LLM Selection, Inference and GPU-Aware Systems
                </div>

                <div class="detail-item">
                  <strong>🎙️ Speaker:</strong><br/>
                  TAOUFIK HICHAM, Artificial Intelligence Specialist
                </div>

                <div class="detail-item">
                  <strong>📜 Certificate:</strong><br/>
                  A certificate of participation will be delivered after you complete the activity.
                </div>
                
                ${registration.organization ? `
                <div class="detail-item">
                  <strong>🏢 Organization:</strong><br/>
                  ${registration.organization}
                </div>
                ` : ''}
                
                ${registration.jobTitleDegree ? `
                <div class="detail-item">
                  <strong>💼 Position:</strong><br/>
                  ${registration.jobTitleDegree}
                </div>
                ` : ''}
              </div>
              
              <div style="text-align: center;">
                <span class="button">Workshop Registration Confirmed</span>
              </div>
              
              <div class="footer">
                <p>If you have any questions, contact us at:</p>
                <p><strong>📧 t.hicham@aphelionxinnovations.com</strong></p>
                <p><strong>📱 +212 697 068 234</strong></p>
                <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
                <p style="font-size: 12px;">
                  © ${new Date().getFullYear()} AGENTIC AI Workshop. All rights reserved.<br/>
                  Orchestrating the Agentic Shift
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('✅ Confirmation email sent to:', registration.email);
  } catch (error) {
    console.error('❌ Error sending confirmation email:', error);
    throw error;
  }
}

/**
 * Send contact form message to admin
 */
export async function sendContactFormEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
  try {
    // Only send if credentials are configured
    const transporter = getGmailTransporter();
    if (!transporter) {
      console.log('⚠️ Gmail credentials not configured. Contact form message from:', data.email);
      return;
    }

    const adminEmail = process.env.ADMIN_EMAIL || process.env.EMAIL_USER;

    await transporter.sendMail({
      from: `"AGENTIC AI Workshop Contact" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      replyTo: data.email,
      subject: `[AGENTIC AI Contact] ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9fafb; }
            .header { background: linear-gradient(135deg, #4f46e5 0%, #3730a3 100%); color: white; padding: 20px; border-radius: 8px; }
            .content { background: white; padding: 30px; margin-top: 20px; border-radius: 8px; border: 1px solid #e5e7eb; }
            .field { margin: 15px 0; padding: 15px; background: #f9fafb; border-radius: 6px; }
            .label { font-weight: bold; color: #4f46e5; display: block; margin-bottom: 5px; }
            .message-box { background: white; border: 2px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📬 New Contact Form Message</h2>
              <p style="margin: 0;">AGENTIC AI Workshop Website</p>
            </div>
            
            <div class="content">
              <div class="field">
                <span class="label">👤 Name:</span>
                ${data.name}
              </div>
              
              <div class="field">
                <span class="label">📧 Email:</span>
                <a href="mailto:${data.email}">${data.email}</a>
              </div>
              
              <div class="field">
                <span class="label">📝 Subject:</span>
                ${data.subject}
              </div>
              
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="message-box">
                  ${data.message.replace(/\n/g, '<br/>')}
                </div>
              </div>
              
              <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
                <strong>Reply to:</strong> <a href="mailto:${data.email}">${data.email}</a>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log('✅ Contact form email sent to admin');
  } catch (error) {
    console.error('❌ Error sending contact form email:', error);
    throw error;
  }
}

