import React, { useState, useRef, useEffect } from 'react';
import { BiVinylFill, BiSendFill, BiFlower1, BiThreeDots } from 'react-icons/bi';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant. Ask me anything...", isUser: false }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async () => {
    const val = inputValue.trim();
    if (!val) return;

    // Add user message
    setMessages(prev => [...prev, { text: val, isUser: true }]);
    setInputValue('');

    // Add typing indicator
    setMessages(prev => [...prev, { text: '...', isUser: false, typing: true }]);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBPk4NYw_5enfX5-OJxYN14haaxFoQxiPM",
        {
          method: "POST",
          body: JSON.stringify({
            contents: [
              {
                parts: [{ 
                  text: `Respond to the user query: ${val}\n\nDo NOT use markdown format! Respond from the point of view of a super chill stoner. Only respond in plain text with NO formatting.` 
                }]
              }
            ]
          })
        }
      );

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;

      // Remove typing indicator and add response
      setMessages(prev => [
        ...prev.filter(msg => !msg.typing),
        { text: botResponse, isUser: false }
      ]);
      
    } catch (error) {
      setMessages(prev => [
        ...prev.filter(msg => !msg.typing),
        { text: "Sorry, something went wrong...", isUser: false }
      ]);
      console.error(error);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Lofi decorations */}
      <div className="lofi-plant">
        <BiFlower1 size={24} />
      </div>
      
      {/* Chat UI */}
      <div className="chat-container">
        <div className="chat-header">
          <BiVinylFill className="me-2" /> Gemini API Chat
        </div>
        
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}
            >
              {msg.typing ? <BiThreeDots size={24} /> : msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
            placeholder="Type your message..."
          />
          <button onClick={handleSubmit}>
            <BiSendFill size={18} />
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .chatbot-container {
          font-family: 'Courier New', monospace;
          min-height: 100vh;
          padding: 2rem;
          background: url('https://static.vecteezy.com/system/resources/previews/036/346/132/non_2x/boho-vinyl-player-flowerpots-lofi-wallpaper-phonograph-records-houseplants-2d-cartoon-flat-illustration-nostalgia-retro-style-dreamy-vibes-chill-art-lo-fi-aesthetic-colorful-background-vector.jpg') no-repeat center center fixed;
          background-size: cover;
          position: relative;
        }
        
        .chat-container {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.85);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        
        .chat-header {
          background: #5a2a82;
          color: white;
          padding: 1rem;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
        }
        
        .chat-messages {
          height: 400px;
          overflow-y: auto;
          padding: 1rem;
        }
        
        .message {
          margin-bottom: 1rem;
          padding: 0.8rem 1rem;
          border-radius: 18px;
          max-width: 80%;
          line-height: 1.4;
        }
        
        .bot-message {
          background: #f0f0f0;
          border-bottom-left-radius: 4px;
          margin-right: auto;
        }
        
        .user-message {
          background: #5a2a82;
          color: white;
          border-bottom-right-radius: 4px;
          margin-left: auto;
        }
        
        .chat-input {
          display: flex;
          padding: 1rem;
          border-top: 1px solid #eee;
          background: white;
        }
        
        .chat-input input {
          flex: 1;
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 20px;
          outline: none;
          font-family: inherit;
        }
        
        .chat-input button {
          background: #5a2a82;
          color: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-left: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        
        .lofi-plant {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #5a2a82;
        }
      `}</style>
    </div>
  );
};

export default ChatBot;