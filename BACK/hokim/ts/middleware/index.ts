import * as express from 'express';

function middleware(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log("you visited middle");
  next();
}

export default middleware;
