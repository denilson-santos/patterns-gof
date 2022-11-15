import { MailerInterface } from '../interfaces/mailer-strategy-interface';

export class MailchimpMailerStrategy implements MailerInterface {
  send(email: string): void {
    console.log(
      `Enviando email para: "${email}", seguindo a implementação da estratégia "Mailchimp"`
    );
  }
}
