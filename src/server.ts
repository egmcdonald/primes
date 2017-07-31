import * as express from 'express';

//controllers
import * as HomeController from './controllers/homeController';
import * as PrimesController from './controllers/primesController';

export const create = (ex: express.Application) => {
    var router: express.Router = express.Router();

    router.get('/', HomeController.get);
    router.get('/primes/:n', PrimesController.get);

    ex.use(router);

    return ex;
};