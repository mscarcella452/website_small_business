import { companyData } from "../../../../data";

export const testimonialData = {
  quoteIcon: <i class='fa-solid fa-quote-right'></i>,
  title: "what our customers say.",
  p: `At ${companyData.name}, we deeply value our clients and are committed to delivering exceptional service at every opportunity. Here are a few testimonials from our clients, sharing their experiences of working with us:`,
  reviews: [
    {
      name: "Alice Johnson",
      location: "Babylon, NY",
      review: `Had a wonderful experience at ${companyData.name}. From the initial consultation to the final fitting, everything was handled professionally and with care. Highly recommend!`,
    },
    {
      name: "Michael Smith",
      location: "Huntington, NY",
      review: `Absolutely thrilled with the suit I received from ${companyData.name}. The fit is impeccable, and the attention to detail is outstanding. Will definitely be coming back for more!`,
    },
    {
      name: "Stefon Brown",
      location: "Brookhaven, NY",
      review: `Exceptional service and quality! ${companyData.name} exceeded my expectations in every way. The team went above and beyond to ensure I was satisfied with my purchase. Highly recommend to anyone in need of custom tailoring.`,
    },
    {
      name: "Sarah Wilson",
      location: "East Islip, NY",
      review: `The team at ${companyData.name} truly understands the art of tailoring. I've never felt more confident in my clothes. Thank you for your expertise and excellent service!`,
    },
  ],
};
