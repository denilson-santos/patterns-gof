import { Request, Response, Router } from 'express';

import { BrightnessLightCommand } from 'patterns/behavioural/command/classes/britghtness-light-command';
import { CEOBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/ceo-budget-handler';
import { CustomerBudget } from 'patterns/behavioural/chain-of-responsibility/classes/customer-budget';
import { DirectorBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/director-budget-handler';
import { Light } from 'patterns/behavioural/command/classes/light';
import { MailchimpMailerStrategy } from 'patterns/behavioural/strategy/classes/mailchimp-mailer-strategy';
import { MailerContext } from 'patterns/behavioural/strategy/classes/mailer-context';
import { MailgunMailerStrategy } from 'patterns/behavioural/strategy/classes/mailgun-mailer-strategy';
import { ManagerBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/manager-budget-handler';
import { PowerLightCommand } from 'patterns/behavioural/command/classes/power-light-command';
import { SellerBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/seller-budget-handler';
import { SesMailerStrategy } from 'patterns/behavioural/strategy/classes/ses-mailer-strategy';
import { UniversalLightControl } from 'patterns/behavioural/command/classes/universal-light-control';

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

behaviouralRouter.get('/command', (request: Request, response: Response) => {
  const invoker = new UniversalLightControl();
  const invoker2 = new UniversalLightControl();
  const receiver1 = new Light();
  const receiver2 = new Light();

  invoker.addCommand('on', new PowerLightCommand(receiver1));
  invoker.addCommand('brightUp', new BrightnessLightCommand(receiver1));

  invoker.executeCommands('on', 'brightUp');
  invoker.undoCommands('brightUp', 'on');

  invoker2.addCommand('on', new PowerLightCommand(receiver2));
  invoker2.addCommand('brightUp', new BrightnessLightCommand(receiver2));

  invoker2.executeCommands('on');
  invoker2.undoCommands(
    'brightUp',
    'brightUp',
    'brightUp',
    'brightUp',
    'brightUp',
    'on'
  );

  response.json({
    type: 'classic',
    result: 'check the console',
  });
});
