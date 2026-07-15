import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

export const FAQ = () => {
  const { faqs } = hospitalConfig;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block">
            RESOURCES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Get quick answers regarding consultations, health insurances, outpatient duty schedules, and portal diagnostics reports.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none gap-4"
                >
                  <div className="flex gap-3 items-center">
                    <FaQuestionCircle className="text-primary text-base shrink-0" />
                    <span className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary bg-sky-50" : ""
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                {/* Animated Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-500 text-sm sm:text-base leading-relaxed border-t border-slate-50 font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
