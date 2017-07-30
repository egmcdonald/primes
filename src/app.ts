import * as express from 'express';
import * as http from 'http';

import Server from './server';

const port = 4141;
Server.set('port', port);

const app = http.createServer(Server);
app.listen(port);

app.on('listening', () => console.log('listening on port ' + port));