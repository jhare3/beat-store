import React, { useState } from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BeatStarsEmbed from "./components/BeatStarsEmbed";
import Notification from "./components/Notification";
import ChatBot from "./components/ChatBot";
import { BiMessageRounded } from "react-icons/bi"; // Chat bubble icon

const App = () => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="font-sans text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen relative">
      {/* Main Content */}
      <Hero />
      <Notification />
      <div className="space-y-12 pb-24"> {/* Added padding-bottom for footer space */}
        <BeatStarsEmbed />
      </div>
      <Footer />

      {/* Floating Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Toggle Button */}
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <BiMessageRounded className="w-6 h-6" />
        </button>

        {/* Chat Window */}
        {showChat && (
          <div className="absolute bottom-20 right-0 w-80 h-96 bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700">
            <ChatBot />
            <button
              onClick={() => setShowChat(false)}
              className="absolute top-2 right-2 text-gray-300 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;