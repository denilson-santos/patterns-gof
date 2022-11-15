import { MailerInterface } from '../interfaces/mailer-strategy-interface';

export class MailgunMailerStrategy implements MailerInterface {
  send(email: string): void {
    console.log(
      `Enviando email para: "${email}", seguindo a implementação da estratégia "Mailgun"`
    );
  }
}
