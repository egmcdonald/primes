import * as express from 'express';
import * as http from 'http';

import * as Server from './Server';

var server = Server.create(express());

const port: number = 4141;
server.set('port', port);

const app = http.createServer(server);
app.listen(port);

app.on('listening', () => console.log('listening on port ' + port));