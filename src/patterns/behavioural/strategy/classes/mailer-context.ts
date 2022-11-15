import { MailerInterface } from '../interfaces/mailer-strategy-interface';

export class MailerContext {
  public constructor(private mailerStrategy: MailerInterface) {}

  public sendMail(email: string): void {
    this.mailerStrategy.send(email);
  }

  public setMailerStrategy(mailerStrategy: MailerInterface): void {
    console.log('Alterando estratégia...');
    this.mailerStrategy = mailerStrategy;
  }
}
