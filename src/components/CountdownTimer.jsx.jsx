import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
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

      // Flash every 15 seconds (0, 15, 30, 45, etc.)
      if (seconds % 15 === 0 && seconds !== lastFlashedSecond) {
        lastFlashedSecond = seconds; // Prevent re-triggering
        setShouldFlash(true);
        setTimeout(() => setShouldFlash(false), 500); // Reset flash after 500ms
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.3rem',
      fontFamily: 'Poppins, sans-serif',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: shouldFlash ? 'red' : 'black', // Flash red when shouldFlash is true
    }}>
      <span>{timeLeft.days} DAYS</span>
      <span>:</span>
      <span>{timeLeft.hours} HRS</span>
      <span>:</span>
      <span>{timeLeft.minutes} MINS</span>
      <span>:</span>
      <span>{timeLeft.seconds} SECS</span>
    </div>
  );
};

export default CountdownTimer;

