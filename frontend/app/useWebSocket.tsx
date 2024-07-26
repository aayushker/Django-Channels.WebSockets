import { useEffect, useState } from "react";

const useWebSocket = (url: string) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const socketIo = new WebSocket(url);

        setSocket(socketIo);

        function cleanup() {
            socketIo.close();
        }

        return cleanup;
    }, [url]);


    return socket;

};

export default useWebSocket;