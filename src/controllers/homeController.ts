import * as express from 'express';

/**
 * function to return a useful message as to how to use the application
 * @param req express request
 * @param res express response
 */
export const get = (req: express.Request, res: express.Response): void => {
    res.send('modify url to /primes/{int} and calculate prime multiplication table');
}