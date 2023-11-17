export enum SocketMessageType {
    LOGIN = "LOGIN",
    LOGIN_RESPONSE = "LOGIN_RESPONSE",
    INCOMING_PUSH_NOTIFICATION = "INCOMING_PUSH_NOTIFICATION",
}

export interface PayloadLogin {
    userName: string;
    password: string;
}

export interface PayloadLoginResponse {
    success: boolean;
    token: string | null;
}

export interface PayloadIncomingPushNotification {
    title: string;
    body: string;
}

export interface SocketMessage {
    type: SocketMessageType;
    payload: null | PayloadLogin | PayloadLoginResponse | PayloadIncomingPushNotification;
}

type SocketConnectionCloseListener = () => void;
type SocketMessageListener = (message: SocketMessage) => void;

class SocketAPI {
    private socket: WebSocket;
    private connectionCloseListeners: SocketConnectionCloseListener[];
    private incomingMessageListeners: SocketMessageListener[];
    private outcomingMessageListeners: SocketMessageListener[];

    constructor() {
        this.socket = this.createSocket();
        this.connectionCloseListeners = [];
        this.incomingMessageListeners = [];
        this.outcomingMessageListeners = [];
    }

    private createSocket(): WebSocket {
        const socket = new WebSocket("ws://192.168.220.142:5665");

        socket.onclose = () => {
            this.connectionCloseListeners.forEach((listener) => listener());
        };

        socket.onmessage = (e) => {
            try {
                console.log("new message");
                console.log(e.data);
                const message = JSON.parse(e.data) as SocketMessage;
                this.incomingMessageListeners.forEach((listener) => listener(message));
            } catch {}
        };

        return socket;
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
    }
}

const socketAPI = new SocketAPI();

export { socketAPI };
