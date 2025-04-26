import React from "react";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import BeatStarsEmbed from "./components/BeatStarsEmbed";
import Notification from "./components/Notification";
import ChatBot from "./components/ChatBot";

const App = () => {
  return (
    <div className="font-sans text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen relative">
      {/* Wrap the content inside a Bootstrap container */}
      <div className="container-fluid p-0 m-0"> {/* Remove padding and margin */}
        {/* Main Content */}
        <Hero />
        <Notification />
        <BeatStarsEmbed /> 
        <Footer />
      </div>
      <ChatBot />
    </div>
  );
};

export default App;

