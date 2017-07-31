import * as express from 'express';

//controllers
import * as HomeController from './controllers/homeController';
import * as PrimesController from './controllers/primesController';

const server: express.Application = express();

const port: number = 4141;
server.set('port', port);
server.listen(port, () => console.log('listening on port ' + port));

server.get('/', HomeController.get);
server.get('/primes/:n', PrimesController.get);