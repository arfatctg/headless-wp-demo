import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message, budget } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email and message are required." },
                { status: 400 },
            );
        }

        await resend.emails.send({
            from: "Contact Form <noreply@dbftbd.com>",
            to: process.env.CONTACT_EMAIL!,
            replyTo: email,
            subject: `New enquiry from ${name}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 120px;">Name</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${email}">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Budget</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${budget || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 12px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #94a3b8; font-size: 12px; margin-top: 24px;">
            Sent from headless-wp-demo-seven.vercel.app
          </p>
        </div>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 },
        );
    }
}
