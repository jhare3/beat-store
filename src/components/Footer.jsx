import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-dark" data-aos="fade-up">
      <p>&copy; {new Date().getFullYear()} Beat Store. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
