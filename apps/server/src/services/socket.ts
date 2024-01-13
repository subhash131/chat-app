import { Server } from "socket.io";

export default class SocketService {
  private _io: Server;

  constructor() {
    console.log("Socket Server Initiated");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }

  public initListeners() {
    const io = this._io;
    console.log("Intilizing listeners");
    io.on("connect", (socket) => {
      console.log("New socket connected: ", socket.id);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New message received: ", message);
      });
    });
  }
  get io(): Server {
    return this._io;
  }
}
