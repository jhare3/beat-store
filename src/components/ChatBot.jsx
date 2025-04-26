import React, { useState, useRef, useEffect } from 'react';
import { FaTimes, FaPaperPlane, FaCommentDots } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Yo! It's wingsford AI. What's Good?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = async () => {
    const prompt = "I need you to respond and behave as if you are a music producer named Wingsford. You, aka Wingsford, are a chill-ass stoner and a great beat salesman. You post beats on YouTube with the link to your beat store in the description. The user is an artist. The user has clicked your link and is on your beatstore. The user is looking at the beatstore while you speak to them, they are in the process of considering purchasing a beat. It’s like he’s a customer looking for a new car; he is already in the door of the car dealership, but he hasn’t decided to make a purchase yet. You are a shark—a god tier salesman. You are cool, calm, and collected. You know every sales trick in the book, but you know it’s important not to talk too much and not to repeat yourself too much. Today, you will be selling instrumental hip-hop beats to the user, who is a rapper. This rapper found your beatstore and is browsing your catalog of beats. Your beatstore is through BeatStars and uses the BeatStars player interface. The user can add beats to their cart by clicking the add button next to each beat, or they can download tagged MP3 beats (free-for-non-profit-use) by clicking the down arrow button next to each beat.  First, offer the rapper a discount code to use at checkout for 10% off (CODE: KING10). This rapper doesn’t know you’re a sales shark, they simply want to ask a few questions about how the beat licensing process works or other related questions about buying beats from you. Or they might be looking for a specific beat.. If they are looking for a specific beat (they might have found on YouTube), guide them to the search bar where they can type in the title of the beat they are looking for. You can also let them know they can search an artist's name or any tag in the search bar to narrow their search. You have 4 tiers of beat licenses: MP3 (tagged), WAV (untagged), stems lease, and exclusive lease. Most of your beats are boom-bap style in the vibe of artists like Mac Miller, Earl Sweatshirt, The Alchemist, or Griselda. You are running a sale TODAY ONLY, buy 2 beats and get 10 beats free. Make sure to be clear that the buy 2 beats, get 10 free is only happening today and make sure they BUY, but be chill about it. The buy 2 get 10 beats free includes MP3 lease, WAV lease, and stems lease (not exclusive lease), but you don’t have to mention that unless they ask. There is a deal buy 2 get 1 free for exclusive leases, but you don’t have to mention that unless they ask. You also have a discount code for 30% off (CODE: KING30)! Make sure to reveal the 30% discount code when the user says they can’t buy today, or they need to wait for their next paycheck, or they need a bigger discount. If at any point they say they can’t buy today, offer them the 30% off code: KING30. You must do whatever it takes to get the sale. Pull on the user's impulses. It will be hard for them to pass up on all these savings if they don’t buy today. Whenever you say anything about a sale, put the sale part of your response in BOLD! If they stop responding, you can mention more information about the sales you are offering today. NOW, what’s most important here is the fact that you know all this, but you are also having a conversation with the user. That means don’t overwhelm them with information. Only respond to the user's query with the appropriate information needed to keep the conversation going and push them in the direction of making a purchase. Whatever you do, make sure they buy something today!!!"
    const val = inputValue.trim();
    if (!val || isTyping) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: val, sender: 'user' }]);
    setInputValue('');
    setIsTyping(true);
    
    try {
      // Call Gemini API
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBPk4NYw_5enfX5-OJxYN14haaxFoQxiPM",
        {
          method: "POST",
          body: JSON.stringify({
            contents: [
              {
                parts: [{ 
                  text: `${prompt}Respond to the user query: ${val}\n\nDo NOT use markdown format! Do not greet the user, get stright to your respose. Respond from the point of view of a super chill stoner.` 
                }]
              }
            ]
          })
        }
      );
      
      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { 
        text: "Whoops, something went wrong... try again?", 
        sender: 'bot' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  // iPhone Messenger style constants
  const colors = {
    userBubble: '#007AFF', // iOS blue
    botBubble: '#E9E9EB', // iOS light gray
    userText: '#FFFFFF',
    botText: '#000000',
    headerBg: '#F6F6F6', // iOS light background
    headerText: '#000000',
    inputBg: '#FFFFFF',
    chatBg: '#FFFFFF',
    sendButton: '#007AFF',
    chatBubble: '#007AFF',
  };

  return (
    <div style={{
      position: 'fixed',
      right: '30px',
      bottom: '30px',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '15px'
    }}>
      {/* Chat Window */}
      {isOpen ? (
        <div style={{
          width: '350px',
          height: '500px',
          background: colors.chatBg,
          borderRadius: '15px',
          boxShadow: '0 5px 30px rgba(0,0,0,0.2)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'fadeIn 0.3s ease-in-out'
        }}>
          <div style={{
            background: colors.headerBg,
            color: colors.headerText,
            padding: '15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #E5E5E5' // iOS-style separator
          }}>
            <h5 style={{ margin: 0, fontWeight: '600' }}>wingsford ai</h5>
            <button 
              onClick={toggleChat}
              style={{
                background: 'none',
                border: 'none',
                color: colors.headerText,
                cursor: 'pointer',
                fontSize: '18px'
              }}
            >
              <FaTimes />
            </button>
          </div>
          
          {/* Messages container - iOS style */}
          <div style={{
            flex: 1,
            padding: '15px',
            overflowY: 'auto',
            background: colors.chatBg
          }}>
            {messages.map((msg, i) => (
              <div 
                key={i}
                style={{
                  padding: '10px 15px',
                  borderRadius: '20px', // more rounded for iOS style
                  marginBottom: '10px',
                  maxWidth: '80%',
                  wordWrap: 'break-word',
                  background: msg.sender === 'user' ? colors.userBubble : colors.botBubble,
                  color: msg.sender === 'user' ? colors.userText : colors.botText,
                  marginLeft: msg.sender === 'user' ? 'auto' : '0',
                  marginRight: msg.sender === 'bot' ? 'auto' : '0',
                  // iOS style message tails
                  borderBottomRightRadius: msg.sender === 'user' ? '5px' : '20px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '5px' : '20px'
                }}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div style={{
                padding: '10px 15px',
                borderRadius: '20px',
                marginBottom: '10px',
                maxWidth: '80%',
                background: colors.botBubble,
                width: '50px',
                color: colors.botText,
                marginRight: 'auto',
                borderBottomLeftRadius: '5px',
                textAlign: 'center'
              }}>
                ...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Input area - iOS style */}
          <div style={{
            padding: '10px 15px',
            background: colors.headerBg,
            borderTop: '1px solid #E5E5E5'
          }}>
            <div style={{ 
              display: 'flex', 
              gap: '8px', 
              alignItems: 'center',
              background: '#FFFFFF',
              borderRadius: '18px',
              border: '1px solid #E5E5E5',
              padding: '0 5px 0 12px'
            }}>
              <input
                type="text"
                style={{
                  width: '100%',
                  padding: '8px 0',
                  border: 'none',
                  outline: 'none',
                  fontSize: '16px'
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Message"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={isTyping || !inputValue.trim()}
                style={{
                  background: 'none',
                  color: colors.sendButton,
                  border: 'none',
                  padding: '8px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Chat bubble button when chat is minimized - iOS style
        <button 
          onClick={toggleChat}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: colors.chatBubble,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            transition: 'transform 0.3s ease',
            animation: 'bounceIn 0.5s ease'
          }}
        >
          <FaCommentDots />
        </button>
      )}
      
      {/* Add some CSS animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes bounceIn {
            0% { transform: scale(0); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Chatbot;