import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

export const WhatsAppFloat = () => {
  const { whatsapp } = hospitalConfig;
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const encodedMsg = encodeURIComponent(whatsapp.defaultMessage);
    const url = `https://wa.me/${whatsapp.number}?text=${encodedMsg}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Tooltip Alert */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="p-3 bg-white text-secondary rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3 max-w-[240px] text-left pointer-events-auto"
          >
            <div className="text-xs leading-normal">
              <span className="font-bold text-slate-800 block">Need Quick Help?</span>
              Chat with our care coordinator on WhatsApp!
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-slate-400 hover:text-slate-600 text-xs shrink-0 self-start mt-0.5"
            >
              <FaTimes />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center text-3xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all pointer-events-auto focus:outline-none relative"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500 border-2 border-white"></span>
        </span>
        <FaWhatsapp />
      </motion.button>

    </div>
  );
};

export default WhatsAppFloat;
