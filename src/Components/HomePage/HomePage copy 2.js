import React from "react";
import { Paper, Box, Container } from "@mui/material";
import { useGlobalSx } from "../../Styles/useGlobalSx";
import { HeroSection } from "../ReusableComponents";
import { heroSectionData } from "./HeroSection/data";
// import HeroSection from "./HeroSection/HeroSection";
import About from "./Sections/About/About";
import Features from "./Sections/Features/Features";
import ServicesShowcase from "./Showcases/Services/ServicesShowcase";
import Hours from "./Sections/Hours/Hours";
import GalleryShowcase from "./Showcases/Gallery/GalleryShowcase";
import Testimonials from "./Sections/Testimonials/Testimonials";
import ContactUs from "./Sections/ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import HeroFullGrid from "./HeroSection/HeroSection fullGrid";
import HeroHalfGrid from "./HeroSection/HeroSection halfGrid";

function HomePage() {
  const sx = useGlobalSx();
  return (
    <Box backgroundColor='background.primary' sx={sx.page_container}>
      {/* <HeroFullGrid /> */}
      {/* <HeroHalfGrid /> */}
      <HeroSection data={heroSectionData} />
      <Paper variant='section'>
        <Container variant='section' maxWidth={false}>
          <Features />
        </Container>
      </Paper>
      <Box sx={sx.content_Wrapper}>
        {/* <Paper variant='section'>
          <ImageStack />
        </Paper> */}
        <About />
        {/* image break */}
        <Paper variant='section'>
          <ImageStack />
        </Paper>

        <Features />

        {/* <ServicesShowcase /> */}
        <HeroHalfGrid />

        <Hours />

        <Paper variant='section'>
          <ImageStack />
        </Paper>
        <Testimonials />
        {/* <GalleryShowcase /> */}
        <HeroHalfGrid />

        <ContactUs />
      </Box>
    </Box>
  );
}

export default HomePage;

const galleryImages = [
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
];

function ImageBox({ index }) {
  const img1 = index === 0;
  return (
    <Box
      sx={{
        display: {
          xxs: img1 ? "block" : "none",
          mobile: "block",
        },
        gridRow: img1 && "span 2",
        width: 1,
        height: 1,
        background: `url(${galleryImages[index]}) top center / cover no-repeat`,
      }}
    />
  );
}

function ImageStack() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xxs: "1fr",
          mobile: "1fr 1fr",
          sm: "1fr .75fr",
          lg: "1fr 450px",
        },

        gridTemplateRows: "1fr 1fr",
        height: { xxs: 300, mobile: 400, sm: 500, md: 700 },
        width: 1,
        gap: 2,
      }}
    >
      <ImageBox index={0} />
      <ImageBox index={1} />
      <ImageBox index={2} />
    </Box>
  );
}

const image1 = "https://wallpaperaccess.com/full/2595436.jpg";
const image2 = "https://wallpapercave.com/wp/wp3751665.jpg";
const image3 =
  "https://c1.wallpaperflare.com/preview/107/507/607/tailoring-tailor-costume-apparel.jpg";

const images = [image1, image2, image3];
