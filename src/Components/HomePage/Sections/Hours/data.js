import { companyData } from "../../../../data";

export const hoursBackgroundImage =
  "https://fashiongalleria.biz/wp-content/uploads/2017/05/2442325-1536x1024.jpg";

// export const hoursScheduale = [
//   { day: "Sun - Mon", hours: "*By appointment only", color: "secondary.main" },
//   { day: "Tues", hours: "Closed", color: "secondary.light" },
//   { day: "Wed - Sat", hours: "9am - 6pm", color: "secondary.main" },
// ];

export const scheduale = {
  days: [
    {
      day: "Sun - Mon",
      status: "appointment",
    },
    { day: "Tuesday", status: "closed" },
    { day: "Wednesday", status: "open", hours: "9am - 6pm" },
    { day: "Thursday", status: "open", hours: "9am - 6pm" },
    { day: "Friday", status: "open", hours: "9am - 6pm" },
    { day: "Saturday", status: "open", hours: "9am - 6pm" },
    // { day: "Sunday", hours: "*By appointment only", color: "secondary.main" },
  ],
  styles: {
    appointment: {
      fontSize: { xxs: 14 },
      flex: 1,
      textAlign: "right",
      // color: "secondary.light",
      opacity: 0.75,
    },
    closed: {
      opacity: 0.5,
    },
    open: {
      fontWeight: 700,
    },
  },
};

export const hoursDataCopy = {
  subtitle: "visit and get styled",
  description:
    "Experience our personalized service on your terms. Whether you're in need of a fitting or a consultation, our team is here to assist you.",
  content: {
    imgSrc: "https://wallpapercave.com/wp/wp3751665.jpg",

    title: "reach out",
    paragraph:
      "Check out our availability and schedule your visit to witness the pinnacle of craftsmanship firsthand.",
    btnTitle: "Contact Us",
  },
};

export const hoursData = {
  heading: {
    text: [
      {
        variant: "subtitle",
        typography: "heading.subtitle",
        text: "visit and get styled",
      },
      {
        variant: "title",
        typography: "heading.title",
        text: companyData.address,
      },
      {
        variant: "p",
        typography: "heading.p",
        text: "Experience our personalized service on your terms. Whether you're in need of a fitting or a consultation, our team is here to assist you.",
      },
    ],
  },

  content: {
    title: "reach out",
    description:
      "Experience our personalized service on your terms. Whether you're in need of a fitting or a consultation, our team is here to assist you. Check out our availability and schedule your visit today.",
    link: "Contact Us",
  },

  image: {
    src: "https://fashiongalleria.biz/wp-content/uploads/2017/05/2442325-1536x1024.jpg",
    alt: "Hours section background image.",
  },
};
