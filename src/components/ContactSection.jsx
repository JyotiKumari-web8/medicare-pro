import React from "react";
import { hospitalConfig } from "../hospitalConfig";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export const ContactSection = () => {
  const { contact, brand } = hospitalConfig;

  // Social icon mapper
  const renderSocialIcon = (key) => {
    switch (key) {
      case "facebook":
        return <FaFacebook />;
      case "twitter":
        return <FaTwitter />;
      case "linkedin":
        return <FaLinkedin />;
      case "instagram":
        return <FaInstagram />;
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase block">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-secondary">
            We Are Always Here to Listen
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Reach out through our direct emergency lines, drop us an email, or connect via our verified social channels for updates.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Telephone */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-left space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center text-lg">
                <FaPhoneAlt />
              </div>
              <h4 className="font-display font-extrabold text-slate-800 text-base">Telephone Support</h4>
              <p className="text-slate-400 text-xs leading-normal font-normal">
                Call our receptionist lines for billing, scheduling, and general inquires.
              </p>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="text-primary text-sm font-bold block pt-2 border-t border-slate-200/50 hover:underline"
            >
              {contact.phone}
            </a>
          </div>

          {/* Card 2: Email */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-left space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center text-lg">
                <FaEnvelope />
              </div>
              <h4 className="font-display font-extrabold text-slate-800 text-base">Electronic Mail</h4>
              <p className="text-slate-400 text-xs leading-normal font-normal">
                Drop us a detailed email regarding medical partnerships or career opportunities.
              </p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-primary text-sm font-bold block pt-2 border-t border-slate-200/50 hover:underline break-all"
            >
              {contact.email}
            </a>
          </div>

          {/* Card 3: Address */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-left space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center text-lg">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-display font-extrabold text-slate-800 text-base">Hospital Campus</h4>
              <p className="text-slate-400 text-xs leading-normal font-normal">
                Visit our central branch building. Dedicated parking tags are available.
              </p>
            </div>
            <span className="text-slate-700 text-xs font-semibold block pt-2 border-t border-slate-200/50 line-clamp-2">
              {contact.address}
            </span>
          </div>

          {/* Card 4: Hours */}
          <div className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-left space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center text-lg">
                <FaClock />
              </div>
              <h4 className="font-display font-extrabold text-slate-800 text-base">Operating Hours</h4>
              <p className="text-slate-400 text-xs leading-normal font-normal">
                OPD timings and emergency ambulance dispatch availability.
              </p>
            </div>
            <span className="text-slate-700 text-xs font-bold block pt-2 border-t border-slate-200/50">
              {contact.hours}
            </span>
          </div>

        </div>

        {/* Social channels card */}
        <div className="mt-12 p-6 rounded-3xl bg-secondary text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-display font-extrabold text-lg">Follow {brand.shortName} Channels</h4>
            <p className="text-slate-400 text-xs leading-normal">
              Stay updated on health alerts, medical seminars, and seasonal vaccination schedules.
            </p>
          </div>

          <div className="flex gap-4">
            {Object.entries(contact.socials).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-primary text-white hover:text-white flex items-center justify-center text-base transition-all duration-300"
              >
                {renderSocialIcon(key)}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
