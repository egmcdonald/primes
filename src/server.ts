import * as express from 'express';

export const create = (ex: express.Application, port: number) => {
    ex.set('port', port);

    var router: express.Router = express.Router();

    ex.use(router);

    return ex;
};