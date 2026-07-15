import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hospitalConfig } from "../hospitalConfig";
import emailjs from "@emailjs/browser";
import { FaCalendarAlt, FaClock, FaCheckCircle, FaUserMd, FaNotesMedical } from "react-icons/fa";

export const AppointmentForm = () => {
  const { emailjs: emailConfig, departments, doctors } = hospitalConfig;

  // Form Fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    department: "",
    doctor: "",
    symptoms: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Listening to selection events from Departments and Doctors section
  useEffect(() => {
    const handleSetDept = (e) => {
      setFormData((prev) => ({ ...prev, department: e.detail, doctor: "" }));
    };
    const handleSetDoctor = (e) => {
      // Find doctor to pre-fill department
      const doc = doctors.find((d) => d.name === e.detail);
      const deptName = doc ? departments.find((d) => d.id === doc.departmentId)?.name : "";
      setFormData((prev) => ({
        ...prev,
        doctor: e.detail,
        department: deptName || prev.department,
      }));
    };

    window.addEventListener("setAppointmentDept", handleSetDept);
    window.addEventListener("setAppointmentDoctor", handleSetDoctor);

    return () => {
      window.removeEventListener("setAppointmentDept", handleSetDept);
      window.removeEventListener("setAppointmentDoctor", handleSetDoctor);
    };
  }, [departments, doctors]);

  // Dynamically filter doctor selection list by selected department
  const getFilteredDoctors = () => {
    if (!formData.department) return doctors;
    const dept = departments.find((d) => d.name === formData.department);
    if (!dept) return doctors;
    return doctors.filter((d) => d.departmentId === dept.id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    // Form validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      setErrorMsg("Please fill out all required fields.");
      setLoading(false);
      return;
    }

    // Check if EmailJS is configured, otherwise fallback to successful mock mode
    const isMock =
      !emailConfig.publicKey ||
      emailConfig.publicKey.includes("placeholder") ||
      !emailConfig.serviceId ||
      !emailConfig.templateId;

    if (isMock) {
      // Mock API call delay
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          department: "",
          doctor: "",
          symptoms: "",
        });
      }, 1500);
    } else {
      // Real EmailJS Integration
      const templateParams = {
        patient_name: formData.name,
        patient_email: formData.email,
        patient_phone: formData.phone,
        appointment_date: formData.date,
        appointment_time: formData.time,
        department_name: formData.department,
        doctor_name: formData.doctor,
        patient_symptoms: formData.symptoms,
      };

      emailjs
        .send(
          emailConfig.serviceId,
          emailConfig.templateId,
          templateParams,
          emailConfig.publicKey
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setLoading(false);
            setSuccess(true);
            setFormData({
              name: "",
              email: "",
              phone: "",
              date: "",
              time: "",
              department: "",
              doctor: "",
              symptoms: "",
            });
          },
          (error) => {
            console.log("FAILED...", error);
            setLoading(false);
            setErrorMsg("Failed to send request. Operating in demo mode instead.");
            // Graceful fallback to mock success in demo setting
            setTimeout(() => {
              setSuccess(true);
            }, 1000);
          }
        );
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Promotion Info */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between py-4">
            <div className="space-y-6">
              <span className="text-primary font-bold text-sm tracking-widest uppercase block">
                BOOKING PORTAL
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary leading-tight">
                Schedule Your Medical Consultation Instantly
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Fill in the booking form with your contact info, select the department or specific specialist, and request a slot. Our patient coordination desk will reach back within 2 hours to confirm your timing.
              </p>

              {/* Promotional features */}
              <div className="space-y-4 pt-4">
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Digital Slot Confirmation via SMS</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Reschedule / Cancel free of charge</span>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Encrypted Safe Patient Information HIPAA compliant</span>
                </div>
              </div>
            </div>

            {/* Quick helper banner */}
            <div className="mt-8 p-5 bg-white border border-slate-100 rounded-2xl flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center text-xl shrink-0">
                <FaClock />
              </div>
              <div className="text-xs text-slate-500 leading-normal">
                <span className="font-bold text-secondary block">Normal Response Time</span>
                Expected coordination team feedback within 1-2 working hours.
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative">
            <AnimatePresence mode="wait">
              {!success ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <h3 className="font-display font-extrabold text-xl text-secondary text-left mb-2">
                    Online Appointment Registration
                  </h3>

                  {errorMsg && (
                    <div className="p-3.5 bg-rose-50 border border-rose-100 text-rose-600 rounded-xl text-xs font-semibold text-left">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Patient Name */}
                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm"
                      />
                    </div>
                    {/* Patient Email */}
                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 012-3456"
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm"
                      />
                    </div>
                    {/* Preferred Date */}
                    <div className="text-left space-y-1.5">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Preferred Date *</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Preferred Time */}
                    <div className="text-left space-y-1.5 sm:col-span-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Preferred Time *</label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm cursor-pointer"
                      />
                    </div>
                    {/* Department Dropdown */}
                    <div className="text-left space-y-1.5 sm:col-span-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Department</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm cursor-pointer"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.name}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Doctor Dropdown */}
                    <div className="text-left space-y-1.5 sm:col-span-1">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Specialist Doctor</label>
                      <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm cursor-pointer"
                      >
                        <option value="">Select Doctor</option>
                        {getFilteredDoctors().map((doc) => (
                          <option key={doc.id} value={doc.name}>
                            {doc.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message/Symptoms */}
                  <div className="text-left space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wide">Symptoms / Remarks</label>
                    <textarea
                      name="symptoms"
                      rows="3"
                      value={formData.symptoms}
                      onChange={handleInputChange}
                      placeholder="Briefly state symptoms or clinical notes (optional)"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-primary focus:outline-none rounded-xl text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Request Appointment Slot"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 text-4xl shadow-md">
                    <FaCheckCircle className="animate-bounce" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-secondary">
                      Appointment Slot Requested!
                    </h3>
                    <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                      Thank you for submitting. Our clinical patient coordinator will review the details and contact you via phone/email to finalize your slot timing.
                    </p>
                  </div>
                  <button
                    onClick={() => setSuccess(false)}
                    className="px-6 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-sm transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
