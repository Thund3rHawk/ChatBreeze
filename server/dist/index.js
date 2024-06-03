"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 4000 || process.env.PORT;
const httpserver = app.listen(port);
const wss = new ws_1.WebSocketServer({ server: httpserver });
wss.on('connection', function connection(ws) {
    ws.send("Client Conenected");
    ws.on('message', function incoming(message) {
        console.log('Received: %s', message);
        ws.send(`${message}`);
    });
    ws.on('close', function () {
        console.log('Closed');
    });
});
