import { Request, Response, Router } from 'express';

import { AdvancedRemote } from 'patterns/structural/bridge/classes/advanced-remote';
import { BuilderMealFacade } from 'patterns/structural/facade/builder-facade';
import { EmailValidatorAdapter } from 'patterns/structural/adapter/classes/email-validator-adapter';
import { ProductComposite } from 'patterns/structural/composite/classes/product-composite';
import { ProductLeaf } from 'patterns/structural/composite/classes/product-leaf';
import { Radio } from 'patterns/structural/bridge/classes/radio';
import { Remote } from 'patterns/structural/bridge/classes/remote';
import { StampDecorator } from 'patterns/structural/decorator/classes/stamp-decorator';
import { TextDecorator } from 'patterns/structural/decorator/classes/text-decorator';
import { TShirt } from 'patterns/structural/decorator/classes/t-shirt';
import { Tv } from 'patterns/structural/bridge/classes/tv';
import { UserRepository } from 'patterns/structural/proxy/repositories/user/user-repository';
import { UserRepositoryProxy } from 'patterns/structural/proxy/repositories/user/user-repository-proxy';
import { ParticleContext } from 'patterns/structural/flyweight/classes/particle-context';

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

structuralRouter.get('/decorator', (request: Request, response: Response) => {
  const tshirt = new TShirt('Camiseta #1', 'M', 50);
  const tshirtStamped = new StampDecorator(tshirt, 'M', 25);
  const tshirtNamed = new TextDecorator(tshirt, 'Denilson S. Santos');
  const tshirtStampedNamed = new TextDecorator(
    tshirtStamped,
    'Denilson S. Santos'
  );

  response.json({
    type: 'classic',
    tshirtPrice: tshirt.getPrice(),
    tshirtStampedPrice: tshirtStamped.getPrice(),
    tshirtNamedPrice: tshirtNamed.getPrice(),
    tshirtStampedNamedPrice: tshirtStampedNamed.getPrice(),
  });
});

structuralRouter.get('/facade', (request: Request, response: Response) => {
  const builderMealFacade = new BuilderMealFacade();

  const meal = builderMealFacade.makeMeal();
  const mealWithoutDessert = builderMealFacade.makeMealWithoutDessert();

  response.json({
    type: 'classic',
    meal,
    mealPrice: meal.getPrice(),
    mealWithoutDessert,
    mealWithoutDessertPrice: mealWithoutDessert.getPrice(),
  });
});

structuralRouter.get('/proxy', async (request: Request, response: Response) => {
  const userRepository = new UserRepository();
  const userRepositoryProxy = new UserRepositoryProxy(userRepository);

  const users = await userRepositoryProxy.list();
  const cachedUsers = await userRepositoryProxy.list();

  response.json({
    type: 'classic',
    users,
    cachedUsers,
  });
});

structuralRouter.get(
  '/flyweight',
  async (request: Request, response: Response) => {
    // 'bullet' | 'missile' | 'shrapnel';

    const particleBullet1 = new ParticleContext(
      {
        color: 'red',
        type: 'bullet',
      },
      {
        speed: 60,
        coordinates: { x: 50, y: 70 },
      }
    );

    particleBullet1.draw();

    response.json({
      type: 'classic',
    });
  }
);
