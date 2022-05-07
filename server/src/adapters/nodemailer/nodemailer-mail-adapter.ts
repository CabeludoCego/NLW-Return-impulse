import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f5a9f74ebed589",
      pass: "52586d4d0c67c2"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject,body }: SendMailData) { 
        await transport.sendMail({
            from: 'Equipe FeedGet <oi@Feedget.com>',
            to: 'Lucas Lemos <archerfh@ufpi.edu.br>',
            subject,
            html: body,
        })

    };
}