import React from "react";
import { motion } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaPhoneAlt, FaAmbulance, FaHeartbeat, FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa";

export const EmergencyNumbers = () => {
  const { emergency, googleMaps } = hospitalConfig;

  return (
    <section id="emergency" className="py-16 bg-gradient-to-br from-rose-600 to-rose-700 text-white relative overflow-hidden">
      {/* Background Graphic Effects */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Alert text */}
          <div className="lg:col-span-5 text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold uppercase tracking-wide">
              <FaExclamationTriangle className="animate-bounce" />
              Critical Emergency Center
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight">
              24 Hours Trauma & Ambulance Dispatch
            </h2>
            
            <p className="text-rose-100 text-sm leading-relaxed font-normal">
              {emergency.details} Our emergency rooms are fully functional 24 hours a day, 365 days a year with standby trauma surgeons.
            </p>

            {/* Quick First-Aid Info */}
            <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-xs space-y-2 max-w-md">
              <span className="font-bold uppercase tracking-wider block">First-Aid Protocol</span>
              <ul className="list-disc pl-4 space-y-1 text-rose-100">
                <li>Keep the patient warm and comfortable while waiting.</li>
                <li>Do not administer food, water, or oral medications.</li>
                <li>Gather the patient's ID and current prescription details.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Card 1: Main hotline */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white text-secondary rounded-2xl shadow-xl flex flex-col justify-between items-start text-left border border-white/20"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg shrink-0">
                <FaPhoneAlt />
              </div>
              <div className="mt-4">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Main Hotline</span>
                <span className="text-xl font-extrabold text-rose-600 font-display block mt-0.5">
                  {emergency.hotline}
                </span>
              </div>
              <a
                href={`tel:${emergency.hotline}`}
                className="w-full mt-4 py-2 text-center rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors block"
              >
                Call Hotline
              </a>
            </motion.div>

            {/* Card 2: Ambulance */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white text-secondary rounded-2xl shadow-xl flex flex-col justify-between items-start text-left border border-white/20"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg shrink-0">
                <FaAmbulance className="text-xl" />
              </div>
              <div className="mt-4">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Ambulance Line</span>
                <span className="text-sm font-extrabold text-secondary font-display block mt-0.5 line-clamp-1">
                  {emergency.ambulance}
                </span>
              </div>
              <a
                href={`tel:${emergency.ambulance}`}
                className="w-full mt-4 py-2 text-center rounded-xl bg-secondary hover:bg-slate-800 text-white font-bold text-xs transition-colors block"
              >
                Call Dispatch
              </a>
            </motion.div>

            {/* Card 3: Blood bank / Directions */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white text-secondary rounded-2xl shadow-xl flex flex-col justify-between items-start text-left border border-white/20"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-lg shrink-0">
                <FaHeartbeat />
              </div>
              <div className="mt-4">
                <span className="text-[10px] text-slate-400 font-bold block uppercase">Blood Bank</span>
                <span className="text-sm font-extrabold text-secondary font-display block mt-0.5 line-clamp-1">
                  {emergency.bloodBank}
                </span>
              </div>
              <a
                href={googleMaps.directionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-4 py-2 text-center rounded-xl bg-sky-50 hover:bg-sky-100 text-primary font-bold text-xs border border-sky-100 transition-colors flex items-center justify-center gap-1.5"
              >
                <FaMapMarkerAlt />
                <span>Get Location</span>
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EmergencyNumbers;
