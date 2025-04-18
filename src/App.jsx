import React from "react";
import Hero from "./components/Hero";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import BeatStarsEmbed from "./components/BeatStarsEmbed";

const App = () => {
  return (
    <div className="font-sans text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen">
      <Hero />
      <Deals />
      <BeatStarsEmbed />
      <Footer />
    </div>
  );
};

export default App;
