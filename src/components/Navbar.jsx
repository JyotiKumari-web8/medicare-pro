import React, { useState, useEffect } from "react";
import { hospitalConfig } from "../hospitalConfig";
import { MedicalIcon } from "./MedicalIcon";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";

export const Navbar = () => {
  const { brand, contact, emergency } = hospitalConfig;
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll class to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Doctors", href: "#doctors" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav shadow-lg border-b border-slate-200/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              <MedicalIcon name={brand.logoIcon} className="text-xl" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-secondary group-hover:text-primary transition-colors duration-300">
                {brand.logoText}
              </span>
              <span className="block text-[10px] text-slate-500 font-medium tracking-wide uppercase -mt-0.5">
                Medical Center
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-600 hover:text-primary text-sm tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button & Hotline */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href={`tel:${emergency.hotline}`}
              className="flex items-center gap-2 text-rose-600 font-bold hover:text-rose-700 transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 animate-pulse">
                <FaPhoneAlt className="text-xs" />
              </div>
              <div className="text-left leading-none">
                <span className="text-[10px] text-slate-400 font-semibold block uppercase">24/7 Hotline</span>
                <span className="text-sm">{emergency.hotline}</span>
              </div>
            </a>
            <a
              href="#appointment"
              className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-hover shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 active:scale-95"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-4">
            <a
              href={`tel:${emergency.hotline}`}
              className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600"
            >
              <FaPhoneAlt />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-slate-200 focus:outline-none transition-colors"
            >
              {isOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white shadow-2xl border-l border-slate-100 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col justify-between p-6 pt-24">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2.5 px-4 font-semibold text-slate-700 hover:text-primary hover:bg-slate-50 rounded-xl transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="space-y-4">
            <a
              href={`tel:${emergency.hotline}`}
              className="flex items-center gap-3 py-3 px-4 rounded-xl bg-rose-50 text-rose-600 font-bold border border-rose-100"
            >
              <FaPhoneAlt className="animate-pulse" />
              <span>Hotline: {emergency.hotline}</span>
            </a>
            <a
              href="#appointment"
              onClick={() => setIsOpen(false)}
              className="block w-full py-3 text-center rounded-xl bg-primary text-white font-semibold shadow-md shadow-primary/20"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
