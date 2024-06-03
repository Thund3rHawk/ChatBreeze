import {createServer} from 'http';
import { SocketService } from './services/socket';

const httpServer = createServer();
const port = 4000 || process.env.PORT;

const newServer = new SocketService();
newServer.io.attach (httpServer);
newServer.sendMessage();

httpServer.listen (port, ()=>{
    console.log (`Server is listening on port:${port}`);
});
