import * as express from 'express';

export const get = (req: express.Request, res: express.Response): void => {
    res.send('modify url to /primes/{int} and calculate prime multiplication table');
}