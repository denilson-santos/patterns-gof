import { Request, Response, Router } from 'express';

import { CEOBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/ceo-budget-handler';
import { CustomerBudget } from 'patterns/behavioural/chain-of-responsibility/classes/customer-budget';
import { DirectorBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/director-budget-handler';
import { MailchimpMailerStrategy } from 'patterns/behavioural/strategy/classes/mailchimp-mailer-strategy';
import { MailerContext } from 'patterns/behavioural/strategy/classes/mailer-context';
import { MailgunMailerStrategy } from 'patterns/behavioural/strategy/classes/mailgun-mailer-strategy';
import { ManagerBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/manager-budget-handler';
import { SellerBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/seller-budget-handler';
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

behaviouralRouter.get(
  '/chain-of-responsibility',
  (request: Request, response: Response) => {
    const budget1 = new CustomerBudget('classic', 3500);
    const budget2 = new CustomerBudget('classic', 55000);
    const budget3 = new CustomerBudget('premium', 820000);
    const budget4 = new CustomerBudget('vip', 1350000);

    const sellerHandler = new SellerBudgetHandler();
    const managerHandler = new ManagerBudgetHandler();
    const directorHandler = new DirectorBudgetHandler();
    const ceoHandler = new CEOBudgetHandler();

    sellerHandler
      .setNextHandler(managerHandler)
      .setNextHandler(directorHandler)
      .setNextHandler(ceoHandler);

    sellerHandler.handle(budget1);
    sellerHandler.handle(budget2);
    sellerHandler.handle(budget3);
    sellerHandler.handle(budget4);

    response.json({
      type: 'classic',
      budget1,
      budget2,
      budget3,
      budget4,
    });
  }
);
