import React from "react";

const Notification = () => {
  return (
    <>
      <style>
        {`
          @keyframes glow-circle {
            0% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
            25% { box-shadow: 5px 0 5px rgba(0, 255, 255, 0.3); }
            50% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
            75% { box-shadow: -5px 0 5px rgba(0, 255, 255, 0.3); }
            100% { box-shadow: 0 0 5px rgba(0, 255, 255, 0.3); }
          }

          .glowing-notification {
            position: relative;
            padding: 1rem;
            border-radius: 8px;
            animation: glow-circle 4s ease-in-out infinite;
          }
        `}
      </style>

      <section className="py-4 bg-black text-center text-white" data-aos="fade-up">
        <div className="glowing-notification">
          <p className="mb-3">⬇️ Type the title of the beat you're looking for into the search bar below ⬇️</p>
        </div>
      </section>
    </>
  );
};

export default Notification;