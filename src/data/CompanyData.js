import { Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
// import PlaceIcon from "@mui/icons-material/Place";
import BusinessIcon from "@mui/icons-material/Business";

const companyEmail = "contact@tmclothiers.com";
const companyPhone = "+12 9 8765 4321";
const companyAddress = "24 Gerard St, Huntington, NY 11743";

const companyData = {
  name: "Thomas Mitchell Clothiers",
  abrievName: "T. Mitchell Clths",
  founder: "Thomas Mitchell",
  slogan: "Bespoke tailoring for timeless elegance.",

  contact: [
    {
      label: <PhoneIphoneIcon />,
      // label: { full: "phone:", abriev: <PhoneIphoneIcon /> },
      info: companyPhone,
      linkProps: {
        component: Link,
        href: `tel:${companyPhone.replace(/\D/g, "")}`,
        underline: "hover",
      },
    },
    {
      // label: { full: "email:", abriev: <EmailIcon /> },
      label: <EmailIcon />,
      info: companyEmail,
      linkProps: {
        component: Link,
        href: `mailto:${companyEmail}`,
        underline: "hover",
      },
    },
    {
      label: <BusinessIcon />,
      // label: { full: "address:", abriev: <BusinessIcon /> },
      info: companyAddress,
      linkProps: {
        component: Link,
        href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          companyAddress
        )}`,
        target: "_blank",
        rel: "noopener noreferrer",
        underline: "hover",
      },
    },
  ],
  hours: [
    {
      label: { full: "sunday - monday:", abriev: "sun - mon:" },
      info: "*appt. only",
    },
    { label: { full: "tuesday:", abriev: "tues:" }, info: "closed" },
    {
      label: { full: "wednesday - saturday:", abriev: "wed - sat:" },
      info: "9am - 6pm",
    },
  ],
};

export default companyData;
