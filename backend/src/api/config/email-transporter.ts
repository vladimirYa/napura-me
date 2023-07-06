import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "stillfreedoby@gmail.com",
      pass: "efoaqsrheborxejk"
    }
});