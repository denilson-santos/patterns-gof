import { Request, Response, Router } from 'express';

import { MealDirector } from '@creational/builder/classes/meal-director';
import { MealWithoutDessertDirector } from '@creational/builder/classes/meal-without-dessert-director';
import { MyDatabaseClassic } from '@creational/singleton/db/my-database-classic';
import { MyDatabaseFunction } from '@creational/singleton/db/my-database-function';
import { MyDatabaseModule } from '@creational/singleton/db/my-database-module';

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
