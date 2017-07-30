import * as express from 'express';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.routes();
    }

    private routes(): void {
        var router: express.Router = express.Router();

        this.app.use(router);
    }    
}

export default new Server().app;