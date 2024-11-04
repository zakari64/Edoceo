import React, { useState } from 'react';
import '../styles/chatbot.css';
import bot from '../assets/icons/chatbot.png'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: "bot", text: "Hi! How can I help you today?" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setMessages([...messages, newMessage]);

    setTimeout(() => {
      const botReply = { sender: "bot", text: generateBotReply(input) };
      setMessages((prevMessages) => [...prevMessages, botReply]);
    }, 800);

    setInput("");
  };

  const generateBotReply = (userMessage) => {
    return "I'm here to help!";
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="chatbot-toggle-button" onClick={toggleChat}>
        <img src={bot} alt="chatbot" />
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-box">
            <div className="chatbot-header">LightBlue Chatbot</div>
            <div className="chatbot-messages-container">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`chatbot-message ${message.sender === "bot" ? "bot-message" : "user-message"}`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="chatbot-input-container">
              <input
                className="chatbot-input"
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
              />
              <button className="chatbot-send-button" onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;