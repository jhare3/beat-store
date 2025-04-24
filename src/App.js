import React from 'react';
import Hero from './components/Hero';
import BeatStarsEmbed from './components/BeatStarsEmbed';
import Footer from './components/Footer';
import AOS from 'aos';
import Notification from './components/Notification'

const App = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-dark text-white min-vh-100">
      <Hero />
      <Notification />
      <BeatStarsEmbed />
      <Footer />
    </div>
  );
};

export default App;
