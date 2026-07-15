import React, { useState } from "react";
import { motion } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaSearch, FaUserMd, FaAmbulance, FaClock } from "react-icons/fa";

export const Hero = () => {
  const { hero, departments } = hospitalConfig;
  const [selectedDept, setSelectedDept] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (selectedDept) {
      window.location.hash = `#doctors`;
      // Dispatch a custom event to filter doctors
      const event = new CustomEvent("filterDoctors", { detail: selectedDept });
      window.dispatchEvent(event);
    } else {
      window.location.hash = `#doctors`;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 lg:pt-36 flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-white"
    >
      {/* Background Graphic Blobs */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Search Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-100/60 border border-sky-200 text-primary text-xs sm:text-sm font-semibold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              Empowering Healthier Lives Daily
            </div>
            
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-secondary leading-tight tracking-tight">
              {hero.title}{" "}
              <span className="block text-primary drop-shadow-sm mt-1 bg-gradient-to-r from-primary to-sky-600 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="text-slate-500 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              {hero.description}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#appointment"
                className="px-8 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
              >
                {hero.ctaBook}
              </a>
              <a
                href="#emergency"
                className="px-8 py-3.5 rounded-xl border-2 border-slate-200 hover:border-rose-500 text-secondary hover:text-rose-600 font-bold flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FaAmbulance className="text-lg" />
                {hero.ctaEmergency}
              </a>
            </div>

            {/* Search/Quick Booking Interface */}
            <div className="pt-4 max-w-xl">
              <form
                onSubmit={handleSearch}
                className="p-3 sm:p-4 bg-white shadow-xl shadow-slate-200/80 border border-slate-100 rounded-2xl sm:rounded-3xl flex flex-col sm:flex-row gap-3 items-stretch sm:items-center"
              >
                <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-100">
                  <FaUserMd className="text-primary text-lg shrink-0" />
                  <select
                    value={selectedDept}
                    onChange={(e) => setSelectedDept(e.target.value)}
                    className="w-full bg-transparent border-none text-slate-700 text-sm font-semibold focus:outline-none cursor-pointer"
                  >
                    <option value="">Find a Specialist...</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="sm:px-6 py-3.5 rounded-xl sm:rounded-2xl bg-secondary hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md active:scale-95 shrink-0"
                >
                  <FaSearch className="text-xs" />
                  Find Doctor
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Graphics & Quick Action Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Main Visual Image container with mock design element */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent z-10" />
              <img
                src={hero.bannerImage}
                alt="Modern Hospital Center"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay Stat Float */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark-card text-white z-20 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xl shrink-0">
                  <FaClock className="animate-spin-slow" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-sm">24 Hours Emergency</h4>
                  <p className="text-xs text-slate-300">Staffed with Board-Certified Specialists</p>
                </div>
              </div>
            </div>

            {/* Float badges for rich visual aesthetics */}
            <div className="absolute -top-4 -left-4 p-3 bg-white shadow-xl rounded-2xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-sm font-extrabold">
                ✓
              </div>
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block font-semibold">ACCREDITATION</span>
                <span className="text-xs font-bold text-secondary">Joint Commission Certified</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Hero Bottom Stats Panel */}
        <div className="mt-16 lg:mt-24 border-t border-slate-100 pt-8 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {hero.stats.map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                key={stat.label}
                className="space-y-1"
              >
                <div className="font-display font-black text-3xl sm:text-4xl text-secondary">
                  {stat.count}
                  <span className="text-primary">{stat.suffix}</span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm font-semibold tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
