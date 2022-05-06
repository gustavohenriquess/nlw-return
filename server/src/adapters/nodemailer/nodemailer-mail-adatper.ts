import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e4582dfd2e2994",
    pass: "04bca30442a7f5",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Gustavo Henrique <gustavo._henrique@hotmail.com>",
      subject: subject,
      html: body,
    });
  }
}
