import { Request, Response, Router } from 'express';

import { behaviouralRouter } from './behavioural.routes';
import { creationalRouter } from './creational.routes';
import { structuralRouter } from './structural.routes';

export const routes = Router();

routes.use('/creational', creationalRouter);
routes.use('/structural', structuralRouter);
routes.use('/behavioural', behaviouralRouter);

routes.get('/', (request: Request, response: Response) => {
  const allRoutes: string[] = [];

  creationalRouter.stack.forEach((route) => {
    allRoutes.push(`/creational${route.route.path}`);
  });

  structuralRouter.stack.forEach((route) => {
    allRoutes.push(`/structural${route.route.path}`);
  });

  behaviouralRouter.stack.forEach((route) => {
    allRoutes.push(`/behavioural${route.route.path}`);
  });

  response.json({
    routes: allRoutes,
  });
});
