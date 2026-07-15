import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import { MedicalIcon } from "./MedicalIcon";
import { FaTimes, FaCalendarAlt, FaDollarSign, FaArrowRight } from "react-icons/fa";

export const Departments = () => {
  const { departments } = hospitalConfig;
  const [selectedDept, setSelectedDept] = useState(null);

  const handleBookDepartment = (deptName) => {
    setSelectedDept(null);
    window.location.hash = "#appointment";
    // Trigger custom event to set department in the appointment form
    const event = new CustomEvent("setAppointmentDept", { detail: deptName });
    window.dispatchEvent(event);
  };

  return (
    <section id="departments" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-200/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block">
            SPECIALTIES
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            10+ Specialized Medical Departments
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Providing comprehensive care across a wide range of medical fields with state-of-the-art diagnostic and clinical equipment.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={dept.id}
              onClick={() => setSelectedDept(dept)}
              className="group p-6 bg-white hover:bg-secondary rounded-2xl shadow-md hover:shadow-xl border border-slate-100 hover:border-secondary transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-sky-50 group-hover:bg-primary/20 flex items-center justify-center text-primary group-hover:text-primary transition-colors duration-300">
                  <MedicalIcon name={dept.icon} className="text-xl" />
                </div>
                
                <h3 className="font-display font-extrabold text-lg text-secondary group-hover:text-white transition-colors duration-200">
                  {dept.name}
                </h3>
                
                <p className="text-slate-500 group-hover:text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal">
                  {dept.shortDesc}
                </p>
              </div>

              {/* View More Trigger */}
              <div className="flex items-center gap-1.5 text-primary text-xs font-bold pt-4 mt-4 border-t border-slate-50 group-hover:border-slate-800">
                <span>Learn Services</span>
                <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal Backdrop */}
      <AnimatePresence>
        {selectedDept && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDept(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl w-full max-w-xl shadow-2xl relative overflow-hidden z-10 max-h-[90vh] flex flex-col"
            >
              {/* Header colored banner */}
              <div className="p-6 bg-gradient-to-r from-primary to-sky-600 text-white flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white text-2xl shrink-0">
                  <MedicalIcon name={selectedDept.icon} />
                </div>
                <div className="text-left flex-1">
                  <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-md font-semibold tracking-wider uppercase">
                    Department Specialty
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl mt-0.5">
                    {selectedDept.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedDept(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Modal Body (Scrollable) */}
              <div className="p-6 overflow-y-auto text-left space-y-6 flex-1">
                {/* Description */}
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">About Department</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-normal">{selectedDept.fullDesc}</p>
                </div>

                {/* Services List */}
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Offered Procedures</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedDept.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timings & Cost */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="flex gap-3 items-center">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 text-primary flex items-center justify-center shrink-0">
                      <FaCalendarAlt />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">OPD Timings</span>
                      <span className="text-xs font-semibold text-slate-700">{selectedDept.schedule}</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <FaDollarSign />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">Consultation Fee</span>
                      <span className="text-xs font-semibold text-slate-700">{selectedDept.pricing}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3 shrink-0">
                <button
                  onClick={() => setSelectedDept(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 font-semibold text-sm transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleBookDepartment(selectedDept.name)}
                  className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-md shadow-primary/20 transition-all duration-300"
                >
                  Book Department
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Departments;
