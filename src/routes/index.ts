import { Request, Response, Router } from 'express';

import { creationalRouter } from './creational.routes';

export const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Hello World!',
  });
});

routes.use('/creational', creationalRouter);
