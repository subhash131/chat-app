import { useContext } from "react";
import { SocketContext } from "../../context/socketContext/SocketContext";

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error("Socket is undefined");
  return state;
};
