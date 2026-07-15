import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaEye, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Gallery = () => {
  const { gallery } = hospitalConfig;
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Extract unique categories (lowercased)
  const categories = ["all", ...new Set(gallery.map((img) => img.category.toLowerCase()))];

  // Filter images
  const filteredGallery = gallery.filter(
    (img) => activeFilter === "all" || img.category.toLowerCase() === activeFilter
  );

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block">
            FACILITIES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Explore Our World-Class Clinic Facilities
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Take a visual tour through our advanced diagnostic labs, operating theaters, and comfortable patient accommodation wings.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 shrink-0 uppercase ${
                activeFilter === cat
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((img, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.url}
                onClick={() => setLightboxIndex(idx)}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200/50 cursor-pointer"
              >
                {/* Thumbnail */}
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Overlap overlay banner */}
                <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-left">
                  <span className="text-[10px] bg-primary text-white font-bold px-2.5 py-1 rounded-md tracking-wider uppercase w-max">
                    {img.category}
                  </span>
                  
                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white text-lg">
                      <FaEye />
                    </div>
                    <h4 className="text-white font-semibold text-sm sm:text-base leading-snug pt-2">
                      {img.caption}
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Backdrop Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm"
            />

            {/* Lightbox content container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-[16/10] bg-black rounded-3xl overflow-hidden z-10 flex flex-col justify-between shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors z-20"
              >
                <FaTimes />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors z-20 focus:outline-none"
              >
                <FaChevronLeft />
              </button>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center text-white transition-colors z-20 focus:outline-none"
              >
                <FaChevronRight />
              </button>

              {/* Lightbox Image */}
              <div className="flex-1 w-full h-full flex items-center justify-center bg-zinc-950 p-2">
                <img
                  src={filteredGallery[lightboxIndex].url}
                  alt={filteredGallery[lightboxIndex].caption}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Footer Banner Info */}
              <div className="p-4 bg-zinc-900 text-white text-left flex justify-between items-center px-6 border-t border-zinc-800 shrink-0">
                <div>
                  <span className="text-[10px] text-primary uppercase font-extrabold tracking-widest block mb-0.5">
                    Category: {filteredGallery[lightboxIndex].category}
                  </span>
                  <h4 className="font-semibold text-sm leading-normal">
                    {filteredGallery[lightboxIndex].caption}
                  </h4>
                </div>
                <span className="text-xs text-zinc-500 font-mono">
                  {lightboxIndex + 1} / {filteredGallery.length}
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
