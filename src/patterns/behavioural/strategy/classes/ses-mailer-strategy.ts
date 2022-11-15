import { MailerInterface } from '../interfaces/mailer-strategy-interface';

export class SesMailerStrategy implements MailerInterface {
  public send(email: string): void {
    console.log(
      `Enviando email para: "${email}", seguindo a implementação da estratégia "Ses"`
    );
  }
}
