import React from 'react';
import CountdownTimer from './CountdownTimer.jsx';

const Hero = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1); // 1 day from now

  return (
    <section style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      padding: '1rem',
      backgroundColor: 'white',
      color: 'black',
      width: '100%',
      boxShadow: '0 2px 15px rgba(0,0,0,0.1)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '1rem',
      borderBottom: '1px solid #f0f0f0',
      flexWrap: 'wrap', // Ensures content wraps on smaller screens
    }} data-aos="fade-up">
      
      {/* Left-aligned title */}
      <h1 style={{
        fontSize: 'calc(1.425rem + 1.5vw)',
        margin: 0,
        fontWeight: 600,
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
        color: 'black',
        flex: '1 1 100%', // Allow title to take full width on small screens
        textAlign: 'left', // Left-align title by default
        flexBasis: 'auto',
      }}>
        Chill Hip-Hop Beats
      </h1>
      
      {/* Right-aligned countdown */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flex: '1 1 100%', // Allow countdown to take full width on small screens
        justifyContent: 'flex-end', // Keep countdown timer to the right on larger screens
        marginTop: '1rem', // Add spacing on top for mobile
        flexBasis: 'auto',
      }}>
        <p style={{ 
          margin: 0,
          fontSize: '0.9rem',
          opacity: 0.8,
          color: '#333',
          textAlign: 'left', // Align text to the left for readability
        }}>
          Buy 2 Get 10 Free! Limited Time Offer:
        </p>
        <div style={{
          backgroundColor: '#f8f8f8',
          padding: '0.3rem 0.8rem',
          borderRadius: '4px',
        }}>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
