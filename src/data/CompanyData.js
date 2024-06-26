const companyData = {
  name: "Thomas Mitchell Clothiers",
  slogan: "bespoke tailoring for timeless elegance.",
  // slogan: "expert tailoring for personalized elegance",
  address: "24 Gerard St, Huntington, NY 11743",
  email: "contact@TMClothiers.com",
  phone: "+12 9 8765 4321",
  hours: [
    // { day: "sunday - monday", abrievDay: "sun - mon", hours: "appt. only" },
    { day: "sunday - monday", abrievDay: "sun - mon", hours: "*appt. only" },
    { day: "tuesday", abrievDay: "tues", hours: "closed" },
    { day: "wednesday - saturday", abrievDay: "wed - sat", hours: "9am - 6pm" },
  ],
  navLinks: [
    { link: "Home", to: "/" },
    { link: "About", to: "/about" },
    { link: "Services", to: "/our-services" },
    { link: "Lookbook", to: "/lookbook" },
    { link: "Contact", to: "/contact" },
  ],
};

export default companyData;
