import { Request, Response } from "express";
import nodemailer from "nodemailer";
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service: "gmail",
  port: 587,
  auth: {
    user: "mail.codehimalaya@gmail.com",
    pass: "ujlemttdpqfitsnc",
  },
});

interface mailRequestBody {
  email: string;
  subject: string;
  text: string;
}

export const sendMailController = async (
  req: Request<never, never, mailRequestBody>,
  res: Response
) => {
  const { email, subject, text } = req.body;
  const mailOptions = {
    from: `LegalAid@gmail.com`,
    to: email,
    subject: subject,
    text: text,
    //html: ''          //use this when using html body
  };

  try {
    const mailsent = await transporter.sendMail(mailOptions);
    if (mailsent) {
      console.log(mailsent);
      return res.status(200).json("Email sent Successfully");
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
