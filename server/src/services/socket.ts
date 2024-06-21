import { Server } from "socket.io"
import prisma from "../db";

interface UserConnections {
    [userId: string]: string;
}

export class SocketService {
    private _io: Server;

    constructor() {
        console.log("Socket is connected");
        this._io = new Server({
            cors: {
                origin: '*'
            }
        });
    }


    // we can send message to the particular user using this userID
    public sendMessage() {
        const io = this.io;
        const users: UserConnections = {};
        io.on("connection", (socket) => {
            // here i have to save the message into the db for that particular user.
           
            socket.on('join', (userId: string) => {
                // Validate the userId and fetch the user from MongoDB
                users[userId] = socket.id;
                socket.join(userId);
                console.log(`User ${userId} joined with socket id ${socket.id}`);
            });


            socket.on('send-message', (reciever) => {
                const {receipentId,message} = reciever;
                // Validate the userId and fetch the user from MongoDB
                // here we have to update the mongodb server along with the user contact and messages. 
                const recieverSocketId = users[receipentId]
                // users[userId] = socket.id;
                if (recieverSocketId){
                    io.to(recieverSocketId).emit('receive-message',{
                        senderId:socket.id,
                        message:message,
                        status: 'recieved',
                    })
                    console.log(`Reciepent ${receipentId} is online and the message is ${message}`);
                }
                else{
                    console.log(`Reciepent ${receipentId} is offline`);
                }
            });
        })
    }

    get io() {
        return this._io;
    }
}