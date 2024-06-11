import {createServer} from 'http';
import { SocketService } from './services/socket';

const httpServer = createServer();
const port = process.env.PORT || 4000;


const newServer = new SocketService();
newServer.io.attach (httpServer);
newServer.sendMessage();


httpServer.listen (port, ()=>{
    console.log (`Server is listening on port:${port}`);
});
