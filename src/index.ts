import express, { json, Request, Response } from 'express';

const app = express();

app.use(json());

app.listen(3333);

app.get('/', (request: Request, response: Response) => {
  response.json({
    message: 'Hello World!',
  });
});
