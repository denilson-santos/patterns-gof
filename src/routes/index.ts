import { Request, Response, Router } from 'express';

import { behaviouralRouter } from './behavioural.routes';
import { creationalRouter } from './creational.routes';
import { structuralRouter } from './structural.routes';

export const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Hello World!',
  });
});

routes.use('/creational', creationalRouter);
routes.use('/structural', structuralRouter);
routes.use('/behavioural', behaviouralRouter);
