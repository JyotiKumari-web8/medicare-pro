import React, { useState } from "react";
import { hospitalConfig } from "../hospitalConfig";
import { MedicalIcon } from "./MedicalIcon";
import { FaHeart, FaChevronRight, FaPaperPlane, FaShieldAlt } from "react-icons/fa";

export const Footer = () => {
  const { brand, contact } = hospitalConfig;
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-secondary text-slate-400 font-normal relative pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Footer Top: Brand, Directories, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 text-left space-y-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white">
                <MedicalIcon name={brand.logoIcon} className="text-lg" />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                {brand.logoText}
              </span>
            </a>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
              {brand.tagline}. Leading the community in comprehensive diagnostics, trauma management, and specialty surgical procedures.
            </p>
            <div className="flex gap-2 items-center text-xs text-slate-500 font-bold bg-slate-900/50 p-3 rounded-xl border border-slate-800 max-w-xs">
              <FaShieldAlt className="text-primary text-base shrink-0" />
              <span>HIPAA Encrypted Patient Portal Secure</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Site Directory</h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <a href="#home" className="hover:text-primary transition-colors flex items-center gap-1.5 py-1">
                <FaChevronRight className="text-[8px] text-slate-600" /> Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors flex items-center gap-1.5 py-1">
                <FaChevronRight className="text-[8px] text-slate-600" /> About
              </a>
              <a href="#departments" className="hover:text-primary transition-colors flex items-center gap-1.5 py-1 col-span-2">
                <FaChevronRight className="text-[8px] text-slate-600" /> Departments
              </a>
              <a href="#doctors" className="hover:text-primary transition-colors flex items-center gap-1.5 py-1">
                <FaChevronRight className="text-[8px] text-slate-600" /> Doctors
              </a>
              <a href="#gallery" className="hover:text-primary transition-colors flex items-center gap-1.5 py-1">
                <FaChevronRight className="text-[8px] text-slate-600" /> Gallery
              </a>
              <a href="#faq" className="hover:text-primary transition-colors flex items-center gap-1.5 py-1 col-span-2">
                <FaChevronRight className="text-[8px] text-slate-600" /> FAQs
              </a>
            </div>
          </div>

          {/* Column 3: Contact Summary (2 cols) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Support Line</h4>
            <div className="space-y-2 text-xs">
              <a href={`tel:${contact.phone}`} className="block hover:text-white transition-colors">
                {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="block hover:text-white transition-colors break-all">
                {contact.email}
              </a>
              <p className="text-slate-500 leading-normal mt-2">
                Outpatients: <br />
                Mon - Sat: 8am - 8pm
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter Box (3 cols) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest">Health Newsletter</h4>
            <p className="text-slate-500 text-xs leading-normal">
              Subscribe to receive healthcare alerts, expert updates, and wellness advisories.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/40 border border-emerald-900 text-emerald-400 rounded-xl text-xs font-semibold">
                ✓ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-800 text-xs text-white rounded-xl focus:border-primary focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-primary-hover transition-colors shrink-0"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer Bottom: copyright & credits */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-semibold">
            Made with <FaHeart className="text-rose-500" /> for Healthcare Excellence.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
