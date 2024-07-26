"use client";
import { useState, useEffect } from "react";
import useWebSocket from "../app/useWebSocket";
import styles from './page.module.css'; // Assuming you have a CSS module

export default function Home() {
  const socket = useWebSocket('ws://localhost:8000/ws/chat/');
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);
  const [name, setName] = useState<string>('');
  const [isNameSet, setIsNameSet] = useState<boolean>(false);

  useEffect(() => {
    if (socket) {
      const handleMessage = (event: MessageEvent) => {
        const data = JSON.parse(event.data);
        setMessages((prevMessages) => [...prevMessages, `${data.name}: ${data.message}`]);
      };

      socket.addEventListener('message', handleMessage);

      return () => {
        socket.removeEventListener('message', handleMessage);
        socket.close();
      };
    }
  }, [socket]);

  const sendMessage = () => {
    if (socket && message.trim() !== '') {
      socket.send(JSON.stringify({ name: name, message: message }));
      setMessage('');
    }
  };

  const handleNameSubmit = () => {
    if (name.trim() !== '') {
      setIsNameSet(true);
    }
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Chat Room</h1>

      {!isNameSet ? (
        <div className={styles.usernameContainer}>
          <p>Please enter your Username</p>
          <input 
            type="text"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
          <button onClick={handleNameSubmit} className={styles.button}>Enter Chat</button>
        </div>
      ) : (
        <div className={styles.chatContainer}>
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <p key={index} className={styles.message}>{msg}</p>
            ))}
          </div>

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.input}
            placeholder="Type your message..."
          />

          <button onClick={sendMessage} className={styles.button}>Send</button>
        </div>
      )}
    </main>
  );
}