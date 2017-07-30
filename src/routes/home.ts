import * as express from 'express';

export class Home {
    public route(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send('hello world');
    }
}