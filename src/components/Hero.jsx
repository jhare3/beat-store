import React from 'react';
import CountdownTimer from './CountdownTimer.jsx';

const Hero = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1); // 7 days from now

  return (
    <section style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '1rem',
      backgroundColor: 'white', // Changed to white
      color: 'black', // Changed to black
      width: '100%',
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)', // Lighter shadow
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      borderBottom: '1px solid #f0f0f0' // Subtle bottom border
    }} data-aos="fade-up">
      
      {/* Left-aligned title - now in black */}
      <h1 style={{
        fontSize: 'calc(1.425rem + 1.5vw)',
        margin: 0,
        fontWeight: 600, // Slightly bolder for better contrast
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
        color: 'black' // Explicit black
      }}>
        Chill Ass Hip-Hop Beats
      </h1>
      
      {/* Right-aligned countdown - dark elements for contrast */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <p style={{ 
          margin: 0,
          fontSize: '0.9rem',
          opacity: 0.8,
          color: '#333' // Dark gray for subtlety
        }}>
          Buy 2 Get 10 Free! Limited Time Offer:
        </p>
        <div style={{
          backgroundColor: '#f8f8f8', // Light gray background
          padding: '0.3rem 0.8rem',
          borderRadius: '4px'
        }}>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
};

export default Hero;