import React from 'react';

const BeatStarsEmbed = () => {
  return (
    <section className="p-4" data-aos="fade-up">
      <iframe
        src="https://player.beatstars.com/?storeId=120083"
        width="100%"
        height="1000"
        allow="autoplay"
        className="w-100 rounded-lg shadow-lg"
        title="BeatStars Player"
      ></iframe>
    </section>
  );
};

export default BeatStarsEmbed;
