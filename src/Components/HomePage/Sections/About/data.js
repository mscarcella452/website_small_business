import { companyData, routes } from "../../../../data";
export const aboutData = {
  heading: {
    title: "Who We Are.",
    p: `Welcome to ${companyData.name}, where craftsmanship meets elegance. We specialize in bespoke tailoring, crafting timeless garments that reflect your unique style and personality. With meticulous attention to detail and a passion for quality, we ensure each piece fits you perfectly and makes a statement. Explore our collection and experience the art of tailoring tailored just for you.`,
  },

  content: {
    title: "our story",
    p: `Nestled in the bustling metropolis of New York City, ${companyData.name} finds its humble beginnings in a quaint workshop where the timeless echoes of tradition harmonize with the innovative spirit of the modern age...`,
    link: { title: "Read More", path: routes.about.path },
  },
  image: {
    src: "https://wallpapercave.com/wp/wp3751665.jpg",
    alt: "About section background image.",
  },
};
