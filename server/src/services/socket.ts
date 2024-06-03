import { Server } from "socket.io"


export class SocketService {
    private _io: Server; 
    
    constructor(){
        console.log ("Socket is connected");        
        this._io = new Server({
            cors:{
                origin: '*'
            }
        });
    }

    public sendMessage(){
        const io = this.io;
        io.on ("connection", (socket)=>{
            socket.on("chat", (payload)=>{
                // console.log ("connection established", payload);
                io.emit ("chat", payload);
            })
        })
    }

    get io(){
        return this._io;
    }    
}