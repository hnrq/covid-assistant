import React, { useState, useRef, useEffect } from "react";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import sessionId from "atoms/sessionId";
import { FiSend } from "react-icons/fi";
import "./ChatContainer.scss";
import axios from "axios";
import Message from "components/Message/Message";

const messagesState = atom({
  key: "messages",
  default: [],
});

export default () => {
  const id = useRecoilValue(sessionId);
  const messageRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useRecoilState(messagesState);

  const addMessage = (message) =>
    setMessages((oldMessages) => [...oldMessages, message]);

  useEffect(() => {
    const { scrollHeight } = messageRef.current;
    messageRef.current.scrollTop = scrollHeight;
  }, [messages]);

  const sendMessage = async () => {
    const message = inputValue;
    addMessage({
      text: message,
      timestamp: new Date(),
      sentBy: id,
    });
    setInputValue("");
    try {
      const { data } = await axios.post("/api/message", {
        input: { text: message },
        session_id: id,
      });
      const botMessages = data.result.output.generic;
      addMessage({
        text: botMessages.map((message) => message.text).join("\n"),
        timestamp: new Date(),
        sentBy: "bot",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chat-container">
      <div className="messages" ref={messageRef}>
        {messages.map((message) => (
          <Message
            message={message}
            key={message.timestamp.getTime()}
            align={message.sentBy === id ? "right" : "left"}
          />
        ))}
      </div>
      <form
        className="message-form"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">
          <FiSend />
        </button>
      </form>
    </div>
  );
};
