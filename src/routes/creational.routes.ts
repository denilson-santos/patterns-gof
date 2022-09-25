import { Request, Response, Router } from 'express';

import { Address } from '@creational/prototype/classic/classes/address';
import { CarFactory } from '@creational/factory-method/classes/car-factory';
import { MealDirector } from '@creational/builder/classes/meal-director';
import { MealWithoutDessertDirector } from '@creational/builder/classes/meal-without-dessert-director';
import { MyDatabaseClassic } from '@creational/singleton/db/my-database-classic';
import { MyDatabaseFunction } from '@creational/singleton/db/my-database-function';
import { MyDatabaseModule } from '@creational/singleton/db/my-database-module';
import { Person } from '@creational/prototype/js/constructor-function';
import { personPrototype } from '@creational/prototype/js/object';
import { PersonPrototypeDeep } from '@creational/prototype/classic/classes/prototype-deep';
import { PersonPrototypeShallow } from '@creational/prototype/classic/classes/prototype-shallow';
import { IndividualCustomerVehicleFactory } from '@creational/abstract-factory/modules/factories/individual-customer-vehicle-factory';
import { EnterpriseCustomerVehicleFactory } from '@creational/abstract-factory/modules/factories/enterprise-customer-vehicle-factory';

export const creationalRouter = Router();

creationalRouter.get('/singleton', (request: Request, response: Response) => {
  const obj1 = MyDatabaseClassic.getInstance();
  const obj2 = MyDatabaseClassic.getInstance();

  obj1.setUsers([
    {
      name: 'Denilson',
      email: 'denilson@gmail.com',
      age: 23,
    },
    {
      name: 'João',
      email: 'joao@gmail.com',
      age: 33,
    },
  ]);

  const users = obj1.getUsers();

  obj2.setUser({
    name: 'Márcia',
    email: 'marcia@gmail.com',
    age: 22,
  });

  const users2 = obj2.getUsers();

  response.json({
    type: 'classic',
    users,
    users2,
    result: users === users2,
  });
});

creationalRouter.get(
  '/singleton-module',
  (request: Request, response: Response) => {
    const obj1 = MyDatabaseModule;
    const obj2 = MyDatabaseModule;

    obj1.setUsers([
      {
        name: 'Denilson',
        email: 'denilson@gmail.com',
        age: 23,
      },
      {
        name: 'João',
        email: 'joao@gmail.com',
        age: 33,
      },
    ]);

    const users = obj1.getUsers();

    obj2.setUser({
      name: 'Márcia',
      email: 'marcia@gmail.com',
      age: 22,
    });

    const users2 = obj2.getUsers();

    response.json({
      type: 'module',
      users,
      users2,
      result: users === users2,
    });
  }
);

creationalRouter.get(
  '/singleton-function',
  (request: Request, response: Response) => {
    const obj1 = MyDatabaseFunction;
    const obj2 = MyDatabaseFunction;

    obj1.setUsers([
      {
        name: 'Denilson',
        email: 'denilson@gmail.com',
        age: 23,
      },
      {
        name: 'João',
        email: 'joao@gmail.com',
        age: 33,
      },
    ]);

    const users = obj1.getUsers();

    obj2.setUser({
      name: 'Márcia',
      email: 'marcia@gmail.com',
      age: 22,
    });

    const users2 = obj2.getUsers();

    response.json({
      type: 'function',
      users,
      users2,
      result: users === users2,
    });
  }
);

creationalRouter.get('/builder', (request: Request, response: Response) => {
  const meal1 = MealDirector.build();
  const meal1TotalPrice = meal1.getPrice();

  const meal2 = MealWithoutDessertDirector.build();
  const meal2TotalPrice = meal2.getPrice();

  response.json({
    type: 'classic',
    meal1,
    meal1TotalPrice,
    meal2,
    meal2TotalPrice,
  });
});

creationalRouter.get(
  '/prototype/js-object',
  (request: Request, response: Response) => {
    const person1 = Object.create(personPrototype);

    response.json({
      type: 'js',
      person1,
      person1PrototypeFirstName: person1.firstName,
      person1PrototypeFullName: person1.fullName(),
    });
  }
);

creationalRouter.get(
  '/prototype/js-constructor-function',
  (request: Request, response: Response) => {
    const person1: any = new Person('Márcia', 'Santana', 22);

    response.json({
      type: 'js',
      person1,
      person1PrototypeFullName: person1.fullName(),
    });
  }
);

creationalRouter.get(
  '/prototype/shallow-copy',
  (request: Request, response: Response) => {
    const address1 = new Address('Rua A', 95);

    const person1 = new PersonPrototypeShallow('João Carlos', 48);
    const person2 = person1.clone();

    person1.addAddress(address1);
    person2.name = 'Bruna Silva';

    // Ao usar o prototype com shallow copy, os estados dos objetos prototypes linkados, são perdidos. Para manter a modificação apenas no objeto desejado, será necessário utilizar a clonagem de todas as propriedades do objeto (deep copy).
    person1.addresses[0].street = 'Rua B';

    response.json({
      type: 'shallow-copy',
      person1,
      person1Name: person1.name,
      person1Addresses: person1.addresses,
      person2,
      person2Name: person2.name,
      person2Addresses: person2.addresses,
    });
  }
);

creationalRouter.get(
  '/prototype/deep-copy',
  (request: Request, response: Response) => {
    const address1 = new Address('Rua A', 95);
    const person1 = new PersonPrototypeDeep('João Carlos', 48);

    person1.addAddress(address1);

    const person2 = person1.clone();

    person2.name = 'Bruna Silva';

    // Ao usar o prototype com shallow copy, os estados dos objetos prototypes linkados, são perdidos. Para manter a modificação apenas no objeto desejado, será necessário utilizar a clonagem de todas as propriedades do objeto (deep copy).
    person1.addresses[0].street = 'Rua B';

    response.json({
      type: 'deep-copy',
      person1,
      person1Name: person1.name,
      person1Addresses: person1.addresses,
      person2,
      person2Name: person2.name,
      person2Addresses: person2.addresses,
    });
  }
);

creationalRouter.get(
  '/factory-method',
  (request: Request, response: Response) => {
    const carFactory = new CarFactory();

    const car1 = carFactory.create('Car 1');

    const car2 = carFactory.create('Car 2');

    response.json({
      type: 'classic',
      car1,
      car1Pickup: car1.pickup('Denilson'),
      car1Stop: car1.stop(),
      car2Pickup: car2.pickup('Caroline'),
      car2Stop: car2.stop(),
    });
  }
);

creationalRouter.get(
  '/abstract-factory',
  (request: Request, response: Response) => {
    const individualFactory = new IndividualCustomerVehicleFactory();
    const individualCar = individualFactory.createVehicle('Car 1', 'Denilson');

    const enterpriseFactory = new EnterpriseCustomerVehicleFactory();
    const enterpriseCar = enterpriseFactory.createVehicle('Car 2', 'Denilson');

    response.json({
      type: 'classic',
      individualCar,
      individualCarPickup: individualCar.pickUp(),
      enterpriseCar,
      enterpriseCarPickup: enterpriseCar.pickUp(),
    });
  }
);
