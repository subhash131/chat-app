export interface SocketProviderProps {
  children?: React.ReactNode;
}
export interface ISocketContext {
  sendMessage: (msg: string) => any;
}
