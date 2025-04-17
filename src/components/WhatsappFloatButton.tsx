import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappFloatButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/9779826459523"
      className="whatsapp-btn fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110 animate-floating"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsappFloatButton;
