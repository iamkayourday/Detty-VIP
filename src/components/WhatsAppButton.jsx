import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleClick = () => {
    // Replace with your WhatsApp link
    const phoneNumber = "1234567890"; // Add your WhatsApp number (with country code)
    const message = "Hello! I'd like to connect with you.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
};

export default WhatsAppButton;
