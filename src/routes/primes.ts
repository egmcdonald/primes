import * as express from 'express';

export const route = (req: express.Request, res: express.Response): void => { 
    res.send('hello world' + req.params.n);                
}