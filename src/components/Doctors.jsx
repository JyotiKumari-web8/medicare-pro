import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { FaStar, FaUserMd, FaCalendarCheck, FaSearch, FaTimes, FaStethoscope } from "react-icons/fa";

export const Doctors = () => {
  const { doctors, departments } = hospitalConfig;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  // Hook into Hero search event
  useEffect(() => {
    const handleFilterEvent = (e) => {
      setSelectedDept(e.detail);
      setSearchTerm("");
    };
    window.addEventListener("filterDoctors", handleFilterEvent);
    return () => window.removeEventListener("filterDoctors", handleFilterEvent);
  }, []);

  // Filtered doctors
  const filteredDoctors = doctors.filter((doc) => {
    const matchSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchDept = selectedDept === "all" || doc.departmentId === selectedDept;
    return matchSearch && matchDept;
  });

  const handleQuickBook = (docName) => {
    setSelectedDoctor(null);
    window.location.hash = "#appointment";
    // Trigger custom event to set doctor in the appointment form
    const event = new CustomEvent("setAppointmentDoctor", { detail: docName });
    window.dispatchEvent(event);
  };

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block">
            MEDICAL TEAM
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            Meet Our Professional Medical Specialists
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Our qualified experts are committed to providing outstanding, dedicated clinical care across multiple medical specialties.
          </p>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-10 p-4 bg-slate-50 border border-slate-100 rounded-2xl">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-4 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search doctor by name or specialty..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-white border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm text-slate-700 shadow-sm"
            />
          </div>

          {/* Department Select tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedDept("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 shrink-0 ${
                selectedDept === "all"
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
              }`}
            >
              All Specialists
            </button>
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 shrink-0 ${
                  selectedDept === dept.id
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredDoctors.map((doc, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={doc.id}
                className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Avatar container */}
                <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
                  <img
                    src={doc.avatar}
                    alt={doc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-lg text-amber-500 font-bold text-xs flex items-center gap-1 shadow-sm border border-slate-100/50">
                    <FaStar className="text-[11px]" />
                    <span>{doc.rating.toFixed(1)}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 text-left space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wide block">
                      {doc.specialty}
                    </span>
                    <h3
                      onClick={() => setSelectedDoctor(doc)}
                      className="font-display font-extrabold text-slate-800 text-base sm:text-lg hover:text-primary transition-colors cursor-pointer"
                    >
                      {doc.name}
                    </h3>
                    <p className="text-slate-400 text-xs font-semibold leading-normal line-clamp-1">
                      {doc.qualification}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-50 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span className="bg-sky-50 text-primary px-2.5 py-1 rounded-md text-[10px] font-bold">
                      {doc.experience} Yrs Exp
                    </span>
                    <span className="text-[10px]">{doc.schedule.split(" (")[0]}</span>
                  </div>
                </div>

                {/* Direct Action trigger */}
                <div className="p-3 bg-slate-50/50 border-t border-slate-50 flex gap-2">
                  <button
                    onClick={() => setSelectedDoctor(doc)}
                    className="flex-1 py-2 text-center rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-colors"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleQuickBook(doc.name)}
                    className="flex-1 py-2 text-center rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Quick Book
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>

          {filteredDoctors.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-400 space-y-2">
              <FaUserMd className="text-4xl mx-auto text-slate-300" />
              <p className="font-semibold text-sm">No specialists found matching filters.</p>
            </div>
          )}
        </div>

      </div>

      {/* Doctor Detailed Info Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDoctor(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/50 hover:bg-slate-900/70 flex items-center justify-center text-white transition-colors z-20"
              >
                <FaTimes />
              </button>

              {/* Header profile background & avatar */}
              <div className="relative h-48 bg-gradient-to-r from-primary to-sky-600 shrink-0">
                <div className="absolute -bottom-10 left-6 flex items-end gap-4 z-10">
                  <div className="w-24 h-24 rounded-2xl border-4 border-white overflow-hidden bg-slate-50 shadow-md">
                    <img
                      src={selectedDoctor.avatar}
                      alt={selectedDoctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left mb-1.5">
                    <h3 className="font-display font-extrabold text-white text-lg sm:text-xl drop-shadow-sm">
                      {selectedDoctor.name}
                    </h3>
                    <span className="text-white/90 text-xs font-semibold uppercase tracking-wider block">
                      {selectedDoctor.specialty}
                    </span>
                  </div>
                </div>
              </div>

              {/* Scrollable details */}
              <div className="pt-14 p-6 overflow-y-auto text-left space-y-5 flex-1">
                
                {/* Biography */}
                <div className="space-y-1.5">
                  <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <FaStethoscope className="text-primary text-[10px]" /> Biography
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">
                    {selectedDoctor.bio}
                  </p>
                </div>

                {/* Qualification Details */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Accredited Education</span>
                    <span className="text-xs font-semibold text-slate-700 block mt-0.5 leading-snug">
                      {selectedDoctor.qualification}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Clinical Experience</span>
                    <span className="text-xs font-bold text-primary block mt-0.5">
                      {selectedDoctor.experience} Years Certified
                    </span>
                  </div>
                </div>

                {/* Working hours / Contact */}
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <FaCalendarCheck className="text-primary text-[10px]" /> OPD Availability
                  </h4>
                  <div className="p-3 bg-sky-50/40 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Duty Schedule</span>
                      <span className="font-semibold text-slate-700">{selectedDoctor.schedule}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Paging Extension</span>
                      <span className="font-mono font-bold text-slate-700">{selectedDoctor.contact}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleQuickBook(selectedDoctor.name)}
                  className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md shadow-primary/20 transition-all duration-300"
                >
                  Schedule Appointment
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Doctors;
