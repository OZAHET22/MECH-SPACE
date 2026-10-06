import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 p-4 bg-[#25D366] text-pure-white rounded-full hover:bg-[#128C7E] transition-colors z-40 shadow-lg flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute right-full mr-4 bg-pure-white text-dark-text px-4 py-2 rounded-md shadow-md text-sm font-barlow font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
};
