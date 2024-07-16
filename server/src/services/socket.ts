import { Server } from "socket.io"
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

    // we can send message to the particular user using this userID
    public async sendMessage() {
        const io = this.io;
        await mongoClient.connect();

        try {
            await mongoClient.db(DB).createCollection(COLLECTION, {
                capped: true,
                size: 1e6
            });
        } catch (e) {
            console.log("mongo adapter error", e);            
        }

        const mongoCollection = mongoClient.db(DB).collection(COLLECTION);
        io.adapter(createAdapter(mongoCollection));


        io.on("connection", (socket) => {
            // here i have to save the message into the db for that particular user.

            socket.on('join', (userId: string) => {
                // Validate the userId and fetch the user from MongoDB
                socket.join(userId);
                console.log(`User ${userId} joined with socket id ${socket.id}`);
            });


            socket.on('send-message', (reciever) => {
                const { receipentId, message } = reciever;
                // Validate the userId and fetch the user from MongoDB                
                if (receipentId) {
                    io.to(receipentId).emit('receive-message',message);
                    console.log(`Reciepent ${receipentId} is online and the message is ${message}`);
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