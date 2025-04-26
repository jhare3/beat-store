import React, { useState } from "react";

const Notification = () => {
  const [showMessage, setShowMessage] = useState(false);
  
  return (
    <>
      <style>
        {`
          @keyframes glow-circle {
            0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
            25% { box-shadow: 5px 0 5px rgba(0, 255, 255, 0.3); }
            50% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
            75% { box-shadow: -5px 0 5px rgba(0, 255, 255, 0.3); }
            100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
          }

          .glowing-notification {
            position: relative;
            padding: 0.5rem;
            border-radius: 8px;
            animation: glow-circle 4s ease-in-out infinite;
          }
          
          .instruction-message {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease, opacity 0.3s ease, margin 0.3s ease;
            opacity: 0;
            margin: 0;
          }
          
          .instruction-message.show {
            max-height: 50px;
            opacity: 1;
            margin-top: 0.5rem;
          }
          
          .notification-button {
            background-color: transparent;
            color: white;
            border: 1px solid rgba(0, 255, 255, 0.5);
            border-radius: 4px;
            padding: 0.3rem 1rem;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .notification-button:hover {
            background-color: rgba(0, 255, 255, 0.1);
            transform: translateY(-1px);
          }
        `}
      </style>

      <section className="py-1 bg-black text-center text-white" data-aos="fade-up">
        <div className="glowing-notification">
          <button 
            className="notification-button"
            onMouseEnter={() => setShowMessage(true)}
            onMouseLeave={() => setShowMessage(false)}
            onClick={() => setShowMessage(!showMessage)}
          >
            Looking for a specific beat?
          </button>
          
          <div className={`instruction-message ${showMessage ? 'show' : ''}`}>
            <p className="mb-0 text-sm">⬇️ <i>Type the title of the beat you're looking for into the search bar below</i> ⬇️</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notification;