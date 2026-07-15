import React from "react";
import { hospitalConfig } from "../hospitalConfig";
import { FaMapMarkerAlt, FaClock, FaPhoneAlt, FaEnvelope, FaDirections } from "react-icons/fa";

export const GoogleMapSection = () => {
  const { googleMaps, contact, brand } = hospitalConfig;

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct Info Card */}
          <div className="lg:col-span-5 text-left p-6 sm:p-10 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-primary font-bold text-sm tracking-widest uppercase block">
                LOCATE US
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-secondary">
                Our General Campus Location
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We are centrally located in the healthcare district. Ample parking spaces are available for patients and emergency vehicles.
              </p>

              {/* Direct Details */}
              <div className="space-y-5 pt-4">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Campus Address</span>
                    <p className="text-sm font-semibold text-slate-700 leading-snug mt-0.5">{contact.address}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Working Hours</span>
                    <p className="text-sm font-semibold text-slate-700 leading-snug mt-0.5">{contact.hours}</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block uppercase">Phone Enquiries</span>
                    <p className="text-sm font-semibold text-slate-700 leading-snug mt-0.5">{contact.phone}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct directions button */}
            <a
              href={googleMaps.directionLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 py-3.5 rounded-xl bg-secondary hover:bg-slate-800 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md active:scale-95"
            >
              <FaDirections className="text-base" />
              <span>Get GPS Directions</span>
            </a>
          </div>

          {/* Right Column: Embedded Map Iframe */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-slate-100 min-h-[350px] lg:min-h-[450px]">
            <iframe
              title={`${brand.name} Campus Map`}
              src={googleMaps.iframeUrl}
              className="w-full h-full border-none min-h-[350px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default GoogleMapSection;
