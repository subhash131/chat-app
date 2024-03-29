"use client";
import React, { createContext, useCallback, useEffect } from "react";
import { io } from "socket.io-client";
import {
  ISocketContext,
  SocketProviderProps,
} from "../../app/types/socket.type";

export const SocketContext = createContext<ISocketContext | null>(null);

const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  useEffect(() => {
    const _socket = io("http://localhost:8000");
    return () => {
      _socket.disconnect();
    };
  }, []);
  const sendMessage: ISocketContext["sendMessage"] = useCallback((msg) => {
    console.log("msg: ", msg);
  }, []);
  return (
    <SocketContext.Provider value={{ sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
