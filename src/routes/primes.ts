import * as express from 'express';

import * as NumberUtils from './../NumberUtils';
import * as FormatUtils from './../FormatUtils';

export class Primes {
    public route(req: express.Request, res: express.Response, next: express.NextFunction) { 
        res.send('hello world');                
    }
}