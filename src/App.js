import React from 'react';
import Hero from './components/Hero';
import Deals from './components/Deals';
import BeatStarsEmbed from './components/BeatStarsEmbed';
import Footer from './components/Footer';
import AOS from 'aos';

const App = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-dark text-white min-vh-100">
      <Hero />
      <Deals />
      <BeatStarsEmbed />
      <Footer />
    </div>
  );
};

export default App;
