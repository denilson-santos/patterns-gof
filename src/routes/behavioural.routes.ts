import { Request, Response, Router } from 'express';

import { BrightnessLightCommand } from 'patterns/behavioural/command/classes/britghtness-light-command';
import { CEOBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/ceo-budget-handler';
import { ChatMediator } from 'patterns/behavioural/mediator/classes/chat-mediator';
import { CompositeClassicCollection } from 'patterns/behavioural/iterator/classes/composite-classic-collection';
import { CsvDataMiner } from 'patterns/behavioural/template-method/classes/csv-data-miner';
import { CustomerBudget } from 'patterns/behavioural/chain-of-responsibility/classes/customer-budget';
import { DirectorBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/director-budget-handler';
import { EventManager } from 'patterns/behavioural/observer/classes/event-manager';
import { ImageEditor } from 'patterns/behavioural/memento/classes/image-editor';
import { ImageEditorHistory } from 'patterns/behavioural/memento/classes/image-editor-history';
import { JsonDataMiner } from 'patterns/behavioural/template-method/classes/json-data-miner';
import { Light } from 'patterns/behavioural/command/classes/light';
import { LogEventListener } from 'patterns/behavioural/observer/classes/log-event-listener';
import { MailchimpMailerStrategy } from 'patterns/behavioural/strategy/classes/mailchimp-mailer-strategy';
import { MailerContext } from 'patterns/behavioural/strategy/classes/mailer-context';
import { MailgunMailerStrategy } from 'patterns/behavioural/strategy/classes/mailgun-mailer-strategy';
import { ManagerBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/manager-budget-handler';
import { PowerLightCommand } from 'patterns/behavioural/command/classes/power-light-command';
import { ProductComposite } from 'patterns/structural/composite/classes/product-composite';
import { ProductLeaf } from 'patterns/structural/composite/classes/product-leaf';
import { PurchaseOrder } from 'patterns/behavioural/state/classes/purchase-order';
import { PurchaseOrderPending } from 'patterns/behavioural/state/classes/purchase-order-pending';
import { SellerBudgetHandler } from 'patterns/behavioural/chain-of-responsibility/classes/seller-budget-handler';
import { SesMailerStrategy } from 'patterns/behavioural/strategy/classes/ses-mailer-strategy';
import { SpreadsheetDocument } from 'patterns/behavioural/visitor/classes/spreadsheet-document';
import { TestVisitor } from 'patterns/behavioural/visitor/classes/test-visitor';
import { TextDataMiner } from 'patterns/behavioural/template-method/classes/text-data-miner';
import { TextDocument } from 'patterns/behavioural/visitor/classes/text-document';
import { TextEditor } from 'patterns/behavioural/observer/classes/text-editor';
import { UniversalLightControl } from 'patterns/behavioural/command/classes/universal-light-control';
import { User } from 'patterns/behavioural/mediator/classes/user';

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

behaviouralRouter.get('/iterator', (request: Request, response: Response) => {
  const productsBox = new ProductComposite();

  const mermaidBox = new ProductComposite();
  const mermaidProduct1 = new ProductLeaf('Feijão', 10);
  const mermaidProduct2 = new ProductLeaf('Macarrão', 7);
  const mermaidProduct3 = new ProductLeaf('Arroz', 5);

  mermaidBox.add(mermaidProduct1, mermaidProduct2, mermaidProduct3);

  const coldBox = new ProductComposite();

  const liquidColdBox = new ProductComposite();
  const liquidColdProduct1 = new ProductLeaf('Yogurte', 8);
  const liquidColdProduct2 = new ProductLeaf('Queijo', 15);
  const liquidColdProduct3 = new ProductLeaf('Manteiga', 4);

  liquidColdBox.add(liquidColdProduct1, liquidColdProduct2, liquidColdProduct3);

  const nonLiquidColdBox = new ProductComposite();
  const nonLiquidColdProduct1 = new ProductLeaf('Carne', 50);
  const nonLiquidColdProduct2 = new ProductLeaf('Frango', 20);

  nonLiquidColdBox.add(nonLiquidColdProduct1, nonLiquidColdProduct2);

  coldBox.add(liquidColdBox, nonLiquidColdBox);

  const singleProduct1 = new ProductLeaf('Vassoura', 25);
  const singleProduct2 = new ProductLeaf('Rodo', 23);

  productsBox.add(mermaidBox, coldBox, singleProduct1, singleProduct2);

  const compositeCollection = new CompositeClassicCollection(productsBox);
  const compositeIterator = compositeCollection.createCompositeIterator();

  while (compositeIterator.hasNext()) {
    const product = compositeIterator.next();

    console.log('product', product);
  }

  response.json({
    type: 'classic',
    productsBoxPrice: productsBox.getPrice(),
  });
});

behaviouralRouter.get('/mediator', (request: Request, response: Response) => {
  const chatMediator = new ChatMediator();

  const user1 = new User('Denilson', chatMediator);
  const user2 = new User('João', chatMediator);
  const user3 = new User('Maria', chatMediator);

  chatMediator.addUser(user1).addUser(user2).addUser(user3);

  user1.sendMessage('Olá, tudo bem ?');
  user2.sendMessage('Tudo bem, e você ?');
  user3.sendMessage('Tudo ótimo!');

  response.json({
    type: 'classic',
    result: 'check the console',
  });
});

behaviouralRouter.get('/memento', (request: Request, response: Response) => {
  const imageEditor = new ImageEditor('~/imagens/paisagem.jpg', 'jpg');
  const imageEditorHistory = new ImageEditorHistory();

  imageEditorHistory.undo(); // no state

  console.log('Salvando estado atual.');
  imageEditorHistory.saveStateInHistory(imageEditor.saveState());
  imageEditor.convertTo('png');

  console.log('Salvando estado atual.');
  imageEditorHistory.saveStateInHistory(imageEditor.saveState());
  imageEditor.convertTo('webp');

  imageEditorHistory.undo(); // undo to png state

  response.json({
    type: 'classic',
    result: 'check the console',
  });
});

behaviouralRouter.get('/observer', (request: Request, response: Response) => {
  const eventManager = new EventManager();
  const textEditor = new TextEditor(eventManager);
  const listener1 = new LogEventListener();
  const listener2 = new LogEventListener();

  eventManager.subscribe('CREATING_FILE', listener1);
  eventManager.subscribe('UPDATING_FILE', listener1);
  eventManager.subscribe('DELETING_FILE', listener1);
  eventManager.subscribe('UPDATING_FILE', listener2);
  eventManager.subscribe('DELETING_FILE', listener2);
  eventManager.unsubscribe('DELETING_FILE', listener2);

  const file1 = textEditor.createFile('index.html', '<div>Hello World!</div>');
  const file1Edited = textEditor.editFile('index.html', '<div>Opa Fion!</div>');

  const file2 = textEditor.createFile(
    'index2.html',
    '<div>Hello World2!</div>'
  );
  const file2Edited = textEditor.editFile(
    'index2.html',
    '<div>Opa Fion2!</div>'
  );

  textEditor.deleteFile('index2.html');

  response.json({
    type: 'classic',
    file1,
    file1Edited,
    file2,
    file2Edited,
    result: 'check the console',
  });
});

behaviouralRouter.get('/state', (request: Request, response: Response) => {
  const purchase1 = new PurchaseOrder();
  const purchase2 = new PurchaseOrder();

  purchase1.approvePayment();
  purchase1.pendingPayment(); // It's already approved
  purchase1.rejectPayment(); // It's already approved

  purchase2.rejectPayment();
  purchase2.setState(new PurchaseOrderPending(purchase2));
  purchase2.approvePayment();

  response.json({
    type: 'classic',
    result: 'check the console',
  });
});

behaviouralRouter.get(
  '/template-method',
  async (request: Request, response: Response) => {
    const jsonDataMiner = new JsonDataMiner();
    const textDataMiner = new TextDataMiner();
    const csvDataMiner = new CsvDataMiner();

    const jsonFile = await jsonDataMiner.mine('json-file.json');
    const textFile = await textDataMiner.mine('text-file.txt');
    const csvFile = await csvDataMiner.mine('csv-file.csv');

    response.json({
      type: 'classic',
      jsonFile,
      textFile,
      csvFile,
      result: 'check the console',
    });
  }
);

behaviouralRouter.get(
  '/visitor',
  async (request: Request, response: Response) => {
    const textDoc1 = new TextDocument(
      'Text Document #1',
      'Content in text document #1...'
    );
    const textDoc2 = new TextDocument(
      'Text Document #2',
      'Content in text document #2...'
    );

    const spreadsheetDoc1 = new SpreadsheetDocument(
      'Spreadsheet Document #1',
      'Content in spreadsheet document #1...'
    );
    const spreadsheetDoc2 = new SpreadsheetDocument(
      'Spreadsheet Document #2',
      'Content in spreadsheet document #2...'
    );
    const spreadsheetDoc3 = new SpreadsheetDocument(
      'Document #3',
      'Content in spreadsheet document #3...'
    );

    const allTextDocs = [textDoc1, textDoc2];
    const allSpreadsheetDocs = [
      spreadsheetDoc1,
      spreadsheetDoc2,
      spreadsheetDoc3,
    ];

    const testVisitor = new TestVisitor();

    allTextDocs.forEach((doc) => {
      testVisitor.visitTextDocument(doc);
    });

    allSpreadsheetDocs.forEach((doc) => {
      testVisitor.visitSpreadsheetDocument(doc);
    });

    response.json({
      type: 'classic',
      result: 'check the console',
    });
  }
);
