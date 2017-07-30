import * as express from 'express';
import * as http from 'http';

import * as Server from './Server';

const port = 4141;

const ex: express.Application = express();
var server = Server.create(ex, port);

const app = http.createServer(ex);
app.listen(port);

app.on('listening', () => console.log('listening on port ' + port));