import IconMail from "../../Assets/icons/IconMail";
import IconPhone from "../../Assets/icons/IconPhone";
import IconLocation from "../../Assets/icons/IconLocation";

export const navigation = [
  { label: "Home", path: "home" },
  { label: "About Us", path: "about" },
  { label: "Services", path: "services" },
  { label: "Gallery", path: "gallery" },
  { label: "Team", path: "team" },
  { label: "Contact us", path: "contact" },
];

export const legal = [
  { label: "General Info", path: "general-info" },
  { label: "Privacy Policy", path: "privacy-policy" },
  { label: "Terms of  Services", path: "Terms-of-services" },
  { label: "Legal Policy", path: "legal-policy" },
];

export const contacts = [
  {
    icon: <IconMail width="24" height="24" />,
    text: "Info@example.com",
    path: "home",
  },
  {
    icon: <IconPhone width="24" height="24" />,
    text: "+1 (307) 555-0133",
    path: "home",
  },
  {
    icon: <IconLocation width="24" height="24" />,
    text: "3891 Ranchview Dr. Richardson, California",
    path: "home",
  },
];
