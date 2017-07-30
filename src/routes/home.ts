import * as express from 'express';

export const route = (req: express.Request, res: express.Response): void => {
    res.send('modify url to /{int} and calculate prime multiplication table');
}