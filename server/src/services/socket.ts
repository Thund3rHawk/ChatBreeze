import { Server } from "socket.io"
import prisma from "../db";
import { createAdapter } from "@socket.io/mongo-adapter";
import { MongoClient } from "mongodb";

const DB = "messages";
const COLLECTION = "socket.io-adapter-events";

const mongoClient = new MongoClient(process.env.DATABASE_URL as string);

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

    public async sendMessage() {
        const io = this.io;
        await mongoClient.connect();

        // try {
        //     await mongoClient.db(DB).createCollection(COLLECTION, {
        //         capped: true,
        //         size: 1e6
        //     });
        // } catch (e) {
        //     console.log("mongo adapter error", e);            
        // }

        const mongoCollection = mongoClient.db(DB).collection(COLLECTION);
        io.adapter(createAdapter(mongoCollection));


        io.on("connection", (socket) => {

            socket.on('join', (userId: string) => {
                socket.join(userId);
                console.log(`User ${userId} joined with socket id ${socket.id}`);
            });


            socket.on('send-message', async (reciever) => {
                const { receipentId, message, userId } = reciever;
           
                if (receipentId) {
                    io.to(receipentId).emit('receive-message',{message,userId, receipentId});
                    console.log(`Reciepent ${receipentId} is online and the message is ${message}`);

                    // Save the message to MongoDB
                    try {
                        if (message.trim() != ''){
                            await prisma.messages.create({
                                data:{
                                    senderId: userId,
                                    recieverId :receipentId,
                                    message: message,
                                    timeStamp: new Date()
                                }
                            });
                            console.log("Message saved to MongoDB");
                        }

                    } catch (e) {
                        console.log("Error saving message to MongoDB", e);
                    }
                }
                else {
                    console.log(`Reciepent ${receipentId} is offline`);
                }
            });
        })
    }

    get io() {
        return this._io;
    }
}