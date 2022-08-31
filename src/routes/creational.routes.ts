import { Request, Response, Router } from 'express';

import { MyDatabaseClassic } from '@creational/singleton/db/my-database-classic';

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
    users,
    users2,
    result: users === users2,
  });
});
