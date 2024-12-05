import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "zoho",
  auth: {
    user: process.env.NEXT_PUBLIC_USER_SENDER,
    pass: process.env.NEXT_PUBLIC_PASS,
  },
});
