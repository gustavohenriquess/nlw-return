import express from "express";
import nodemailer from "nodemailer";

import { prisma } from "./prisma";

const port = 3333;
const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e4582dfd2e2994",
    pass: "04bca30442a7f5",
  },
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });
  await transport.sendMail({
    from: "Equipe Feedget <oi@feedget.com>",
    to: "Gustavo Henrique <gustavo._henrique@hotmail.com>",
    subject: "Novo feedback",
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join("\n"),
  });
  return res.status(201).json({ data: feedback });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
