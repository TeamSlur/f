import React, { createContext, useContext, useEffect, useMemo } from "react";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

const YjsContext = createContext();

export const YjsProvider = ({ children }) => {
  const ydoc = useMemo(() => new Y.Doc(), []); // Yjs 문서 생성
  const provider = useMemo(
    () => new WebsocketProvider("ws://localhost:1234", "notion-clone", ydoc),
    [ydoc]
  );

  //   useEffect(() => {
  //     provider.on("status", (event) => {
  //       console.log(`Yjs WebSocket connection: ${event.status}`);
  //     });
  //     return () => provider.destroy();
  //   }, [provider]);

  return <YjsContext.Provider value={ydoc}>{children}</YjsContext.Provider>;
};

export const useYjsDoc = () => useContext(YjsContext);
