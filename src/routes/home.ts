import * as express from 'express';

export class Home {
    public route(req: express.Request, res: express.Response, next: express.NextFunction) {
        res.send('modify url to /{int} and calculate prime multiplication table');
    }
}