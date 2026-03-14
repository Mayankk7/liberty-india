// import { NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: NextRequest) {
//   const { name, email, message } = await req.json();

//   // Configure SMTP (use environment variables for production)
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: "india@liberty-int.com",
//       subject: `Contact Us Form Submission from ${name}`,
//       text: message,
//       html: `<p><strong>Name:</strong> ${name}<br/><strong>Email:</strong> ${email}<br/><strong>Message:</strong><br/>${message}</p>`,
//     });
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }
