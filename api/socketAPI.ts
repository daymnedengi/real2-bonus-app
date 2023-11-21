import { SocketMessage } from "../types/socketAPITypes";

type SocketConnectionOpenListener = () => void;
type SocketConnectionCloseListener = () => void;
type SocketMessageListener = (message: SocketMessage) => void;

class SocketAPI {
    private socket: WebSocket | null;
    private connectionOpenListeners: SocketConnectionOpenListener[];
    private connectionCloseListeners: SocketConnectionCloseListener[];
    private incomingMessageListeners: SocketMessageListener[];
    private outcomingMessageListeners: SocketMessageListener[];

    constructor() {
        this.connectionOpenListeners = [];
        this.connectionCloseListeners = [];
        this.incomingMessageListeners = [];
        this.outcomingMessageListeners = [];
    }

    private createSocket(): WebSocket {
        const socket = new WebSocket("ws://192.168.220.142:5665");

        socket.onopen = () => {
            this.connectionOpenListeners.forEach((listener) => listener());
        };

        socket.onclose = () => {
            this.connectionCloseListeners.forEach((listener) => listener());
        };

        socket.onmessage = (e) => {
            try {
                console.log(e.data);
                const message = JSON.parse(e.data) as SocketMessage;
                this.incomingMessageListeners.forEach((listener) => listener(message));
            } catch {}
        };

        return socket;
    }

    public connectToServer() {
        if (this.socket == null) {
            this.socket = this.createSocket();
        }
    }

    public addConnectionOpenListener(listener: SocketConnectionOpenListener): void {
        this.connectionOpenListeners.push(listener);
    }

    public removeConnectionOpenListener(listener: SocketConnectionOpenListener): void {
        this.connectionOpenListeners = this.connectionOpenListeners.filter((_listener) => _listener != listener);
    }

    public addConnectionCloseListener(listener: SocketConnectionCloseListener): void {
        this.connectionCloseListeners.push(listener);
    }

    public removeConnectionCloseListener(listener: SocketConnectionCloseListener): void {
        this.connectionCloseListeners = this.connectionCloseListeners.filter((_listener) => _listener != listener);
    }

    public addIncomingMessageListener(listener: SocketMessageListener): void {
        this.incomingMessageListeners.push(listener);
    }

    public removeIncomingMessageListener(listener: SocketMessageListener): void {
        this.incomingMessageListeners = this.incomingMessageListeners.filter((_listener) => _listener != listener);
    }

    public addOutcomingMessageListener(listener: SocketMessageListener) {
        this.outcomingMessageListeners.push(listener);
    }

    public removeOutcomingMessageListener(listener: SocketMessageListener): void {
        this.outcomingMessageListeners = this.outcomingMessageListeners.filter((_listener) => _listener != listener);
    }

    public sendMessage(message: SocketMessage): void {
        this.outcomingMessageListeners.forEach((listener) => listener(message));
        this.socket.send(JSON.stringify(message));
    }
}

const socketAPI = new SocketAPI();

export default socketAPI;
