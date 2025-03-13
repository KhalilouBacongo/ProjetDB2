import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappContact = () => {
  const phoneNumber = "+2250707837350"; // Format international (ex: Suisse +41)
  const message =
    "Bonjour DECIDE&BUILD! Je vous écris au sujet des services que vous proposez."; // Message par défaut
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#28D146] flex items-center text-white rounded-md px-3 py-2 gap-2 cursor-pointer font-semibold text-lg md:text-xl lg:text-2xl hover:bg-[#28D146]/90 z-10 transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
      <span>Contact Us</span>
    </a>
  );
};

export default WhatsappContact;
