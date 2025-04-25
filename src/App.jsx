import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BeatStarsEmbed from "./components/BeatStarsEmbed";
import Notification from "./components/Notification";
import ChatBot from "./components/ChatBot"

const App = () => {
  return (
    <div className="font-sans text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen">
      
      <Hero />
      <Notification />
      <ChatBot/>
      <div className="space-y-12"> {/* Adds consistent spacing between sections */}
        <BeatStarsEmbed />
      </div>
      
      <Footer />
    </div>
  );
};

export default App;
