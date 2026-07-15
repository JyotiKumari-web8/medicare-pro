import React from "react";
import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";

// Helper component to render icons dynamically based on string names
export const MedicalIcon = ({ name, className = "" }) => {
  // Check standard FontAwesome icons
  let IconComponent = FaIcons[name] || Fa6Icons[name];

  // Common fallbacks in case of typos
  if (!IconComponent) {
    switch (name?.toLowerCase()) {
      case "heart":
      case "faheartbeat":
        IconComponent = FaIcons.FaHeartbeat;
        break;
      case "brain":
      case "fabrain":
        IconComponent = FaIcons.FaBrain;
        break;
      case "baby":
      case "fababy":
        IconComponent = FaIcons.FaBaby;
        break;
      case "bone":
      case "fabone":
        IconComponent = FaIcons.FaBone;
        break;
      case "ribbon":
      case "faribbon":
        IconComponent = FaIcons.FaRibbon;
        break;
      case "female":
      case "fafemale":
        IconComponent = FaIcons.FaFemale;
        break;
      case "sparkles":
      case "fasparkles":
        IconComponent = FaIcons.FaMagic; // fallback to Magic
        break;
      case "eye":
      case "faeye":
        IconComponent = FaIcons.FaEye;
        break;
      case "tooth":
      case "fatooth":
        IconComponent = FaIcons.FaTooth;
        break;
      case "ent":
      case "faassistivelisteningsystems":
        IconComponent = FaIcons.FaAssistiveListeningSystems;
        break;
      case "emergency":
      case "fabriefcasemedical":
        IconComponent = FaIcons.FaBriefcaseMedical;
        break;
      default:
        IconComponent = FaIcons.FaHospital; // Default fallback
    }
  }

  return <IconComponent className={className} />;
};

export default MedicalIcon;
