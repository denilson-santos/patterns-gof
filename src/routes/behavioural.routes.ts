import { Request, Response, Router } from 'express';

import { MailchimpMailerStrategy } from 'patterns/behavioural/strategy/classes/mailchimp-mailer-strategy';
import { MailerContext } from 'patterns/behavioural/strategy/classes/mailer-context';
import { MailgunMailerStrategy } from 'patterns/behavioural/strategy/classes/mailgun-mailer-strategy';
import { SesMailerStrategy } from 'patterns/behavioural/strategy/classes/ses-mailer-strategy';

export const behaviouralRouter = Router();

behaviouralRouter.get('/strategy', (request: Request, response: Response) => {
  const email = 'denilson@gmail.com';

  const mailchimpStrategy = new MailchimpMailerStrategy();
  const mailgunStrategy = new MailgunMailerStrategy();
  const sesStrategy = new SesMailerStrategy();

  const mailerContext = new MailerContext(mailgunStrategy);

  mailerContext.sendMail(email);
  mailerContext.setMailerStrategy(sesStrategy);
  mailerContext.sendMail(email);
  mailerContext.setMailerStrategy(mailchimpStrategy);
  mailerContext.sendMail(email);

  response.json({
    type: 'classic',
  });
});
