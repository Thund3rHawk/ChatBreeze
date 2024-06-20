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
        // const users: UserConnections = {};
        io.on("connection", (socket) => {
            // here i have to save the message into the db for that particular user.
            // socket.on("chat", async (payload)=>{
            //     // const user = await prisma.messages.create({
            //     //     data: {

            //     //     }
            //     // })
            //     socket.join (payload.userId)
            //     console.log ("connection established", payload.userId, payload.message);
            //     io.to(payload.userId).emit ("chat", payload.message);
            // })


            socket.on('join', (userId: string) => {
                // Validate the userId and fetch the user from MongoDB
                // users[userId] = socket.id;
                socket.join(userId);
                console.log(`User ${userId} joined with socket id ${socket.id}`);
            });


            socket.on('newChat', (reciever) => {
                const {receiverId,senderId,message} = reciever;
                // Validate the userId and fetch the user from MongoDB
                // const recieverSocketId = users[id]
                // users[userId] = socket.id;
                io.to(receiverId).emit('newChat',{senderId,message})
                console.log(`User senderId ${senderId} and recieverId ${receiverId} joined with socket id ${socket.id} message is ${message}`);
            });
            
            
            // socket.on("chat", (payload) => {
            //     const recieverSocketId = users[payload]
            //     console.log(`Reciever uid ${recieverSocketId} joined with socket id ${socket.id}`);
            //     io.to(recieverSocketId).emit("chat",{
            //         message: "hello world"
            //     })
            // })

        })
    }

    get io() {
        return this._io;
    }
}