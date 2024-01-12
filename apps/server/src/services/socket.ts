import { Server } from "socket.io";

export default class SocketService {
  private _io: Server;

  constructor() {
    console.log("Socket Server Initiated");
    this._io = new Server();
  }

  public initListeners() {
    const io = this._io;
    console.log("Intilizing listeners");
    io.on("connect", (socket) => {
      console.log("New socket: ", socket.id);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New message received: ", message);
      });
    });
  }
  get io(): Server {
    return this._io;
  }
}
