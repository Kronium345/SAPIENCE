// src/components/ContactContainer.jsx
import React from 'react';
import './ContactContainer.css';

const ContactContainer = () => {
  return (
    <div className="contact">
      <div className="container mx-auto flex justify-between items-center">
        <div className="contact-info">
          <span>+1.234.567.8901</span>
          <span>example@email.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
