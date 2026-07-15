import React from "react";
import { motion } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaCheckCircle, FaAward, FaUserNurse, FaMicroscope } from "react-icons/fa";

export const About = () => {
  const { about } = hospitalConfig;

  const valueIcons = [
    <FaUserNurse className="text-xl text-primary" />,
    <FaCheckCircle className="text-xl text-primary" />,
    <FaAward className="text-xl text-primary" />,
    <FaMicroscope className="text-xl text-primary" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with layered badges */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Visual element shapes */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-sky-100 rounded-full -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-sky-50 rounded-2xl -z-10" />

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[480px] aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src={about.image}
                alt="Hospital Staff Collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Overlap Floaters */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 left-4 p-5 bg-white shadow-xl rounded-2xl border border-slate-100 flex items-center gap-4 max-w-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-primary text-2xl shrink-0">
                <FaAward />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-secondary text-sm">Top Rated Hospital</h4>
                <p className="text-xs text-slate-500">Ranked #1 for safety and operational quality in the state.</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Copy & Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 text-left space-y-6"
          >
            <div className="space-y-2">
              <span className="text-primary font-bold text-sm tracking-widest uppercase block">
                WHO WE ARE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary leading-tight">
                {about.title}
              </h2>
              <p className="text-slate-400 text-sm font-semibold tracking-wide uppercase italic">
                {about.subtitle}
              </p>
            </div>

            <p className="text-slate-500 text-base leading-relaxed font-normal">
              {about.description}
            </p>

            {/* Accreditation Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {about.accreditations.map((accred, idx) => (
                <div
                  key={idx}
                  className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200/60 text-secondary text-xs font-bold flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {accred}
                </div>
              ))}
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
              {about.values.map((value, idx) => (
                <div key={value.title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                    {valueIcons[idx] || <FaCheckCircle className="text-primary" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm mb-1">{value.title}</h4>
                    <p className="text-xs text-slate-500 leading-normal font-normal">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
