import { Request, Response, Router } from 'express';

<<<<<<< HEAD
import { AdvancedRemote } from 'patterns/structural/bridge/classes/advanced-remote';
=======
>>>>>>> 978186b60cfb0b9b0ae6bddab4bef4c03e8212dd
import { EmailValidatorAdapter } from 'patterns/structural/adapter/classes/email-validator-adapter';
import { ProductComposite } from 'patterns/structural/composite/classes/product-composite';
import { ProductLeaf } from 'patterns/structural/composite/classes/product-leaf';
import { Radio } from 'patterns/structural/bridge/classes/radio';
import { Remote } from 'patterns/structural/bridge/classes/remote';
import { Tv } from 'patterns/structural/bridge/classes/tv';

export const structuralRouter = Router();

structuralRouter.get('/composite', (request: Request, response: Response) => {
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

  console.log('productsBox', productsBox);
  console.log('productsBoxChilden', productsBox.getChildren());

  productsBox.remove(mermaidBox);

  console.log('mermaidBoxRemoved', productsBox);

  response.json({
    type: 'classic',
    productsBoxPrice: productsBox.getPrice(),
  });
});

structuralRouter.get('/adapter', (request: Request, response: Response) => {
  const emailValitadorAdapter = new EmailValidatorAdapter();

  response.json({
    type: 'classic',
    email1IsValid: emailValitadorAdapter.validate('denilson@gmail.com'),
    email2IsValid: emailValitadorAdapter.validate('denilson.com'),
  });
});

structuralRouter.get('/bridge', (request: Request, response: Response) => {
  const device1 = new Radio();
  const device2 = new Tv();

  const remoteControl1 = new Remote(device1);
  const remoteControl2 = new AdvancedRemote(device2);

  remoteControl1.togglePower();
  remoteControl1.channelUp();
  remoteControl1.channelUp();
  remoteControl1.channelDown();
  remoteControl1.volumeUp();
  remoteControl1.volumeUp();
  remoteControl1.volumeUp();
  remoteControl1.volumeDown();
  remoteControl1.togglePower();

  remoteControl2.togglePower();
  remoteControl2.volumeUp();
  remoteControl2.volumeUp();
  remoteControl2.volumeUp();
  remoteControl2.volumeUp();
  remoteControl2.volumeUp();
  remoteControl2.volumeUp();
  remoteControl2.volumeDown();
  remoteControl2.mute();
  remoteControl2.unmute();
  remoteControl2.togglePower();

  response.json({
    type: 'classic',
    result: 'Check console',
  });
});
