import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

export const Testimonials = () => {
  const { testimonials } = hospitalConfig;
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Graphic blobs */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-sky-50 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block">
            PATIENT FEEDBACK
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Verified Patient Success Stories
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative p-6 sm:p-12 rounded-[2rem] bg-slate-50/70 border border-slate-100/80 shadow-xl shadow-slate-100 flex flex-col items-center">
          
          {/* Quote Icon overlay */}
          <div className="absolute -top-6 left-12 w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-lg shadow-primary/20">
            <FaQuoteLeft />
          </div>

          <div className="min-h-[220px] w-full flex flex-col justify-between items-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 w-full"
              >
                {/* Review Stars */}
                <div className="flex justify-center gap-1 text-amber-400">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <FaStar key={i} className="text-lg" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-600 font-sans text-base sm:text-lg lg:text-xl leading-relaxed italic max-w-3xl mx-auto font-normal">
                  "{testimonials[index].review}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="font-display font-extrabold text-slate-800 text-lg">
                    {testimonials[index].name}
                  </h4>
                  <div className="flex justify-center items-center gap-2 mt-1">
                    <span className="text-xs font-bold text-primary bg-sky-50 px-2.5 py-0.5 rounded-md uppercase">
                      Treated: {testimonials[index].treatedFor}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">
                      {testimonials[index].date}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-xl bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/80 flex items-center justify-center transition-colors shadow-sm focus:outline-none"
            >
              <FaChevronRight />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
