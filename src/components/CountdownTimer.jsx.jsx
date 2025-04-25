import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [shouldFlash, setShouldFlash] = useState(false);

  useEffect(() => {
    let lastFlashedSecond = -1; // Track the last second we flashed to avoid duplicates

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: seconds
      });

      // Flash every 10 seconds (0, 10, 20, 30, etc.)
      if (seconds % 15 === 0 && seconds !== lastFlashedSecond) {
        lastFlashedSecond = seconds; // Prevent re-triggering
        setShouldFlash(true);
        setTimeout(() => setShouldFlash(false), 500);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <>
      <style>
        {`
          .flash-effect {
            animation: subtleFlash 2.0s ease;
            animation: subtleFlash 2.0s ease-out;
            border-radius: 8px;
            display: inline-block; /* Ensures animation applies properly */
            padding: 0 4px; /* Adds some space around the text */
            transform-origin: center; /* For smooth scaling */

          }
          @keyframes subtleFlash {
            0% { background-color: transparent; 
                 box-shadow: none }
            50% { background-color: rgba(243, 127, 127, 0.9); 
                  box-shadow: 0 0 10px rgba(243, 127, 127, 0.5); /* Added glow effect */}
            100% { background-color: transparent; 
                   box-shadow: none}
          }
        `}
      </style>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          margin: '1rem 0',
          fontSize: '1.2rem'
        }}
        className={shouldFlash ? 'flash-effect' : ''}
      >
        {/* Rest of your timer JSX */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>{timeLeft.days}</div>
          <div style={{ fontSize: '0.8rem' }}>DAYS</div>
        </div>
        <div>:</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>{timeLeft.hours}</div>
          <div style={{ fontSize: '0.8rem' }}>HRS</div>
        </div>
        <div>:</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>{timeLeft.minutes}</div>
          <div style={{ fontSize: '0.8rem' }}>MINS</div>
        </div>
        <div>:</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>{timeLeft.seconds}</div>
          <div style={{ fontSize: '0.8rem' }}>SECS</div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;