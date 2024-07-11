import React from "react";
import {
  Paper,
  Box,
  Container,
  Stack,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useGlobalSx } from "../../Styles/useGlobalSx";
import { HeroSection } from "../ReusableComponents";
import { heroSectionData } from "./HeroSection/data";
// import HeroSection from "./HeroSection/HeroSection";
import About from "./Sections/About/About";
import AboutCopy from "./Sections/About/AboutCopy";
import Features from "./Sections/Features/Features";
import ServicesShowcase from "./Sections/Services/ServicesShowcase";
import Hours from "./Sections/Hours/Hours";
import GalleryShowcase from "./Sections/Gallery/GalleryShowcase";
import Testimonials from "./Sections/Testimonials/Testimonials";
import ContactUs from "./Sections/ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import HeroFullGrid from "./HeroSection/HeroSection fullGrid";
import HeroHalfGrid from "./HeroSection/HeroSection halfGrid";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function HomePage() {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const rowHeight = 400;
  const columns = lgScreen ? 3 : smScreen ? 2 : 1;

  const grid = [
    {
      rows: smScreen ? 2 : 1,
      cols: lgScreen ? 2 : 1,
    },
    { rows: 1, cols: 1 },
    { rows: 1, cols: 1, display: lgScreen ? "block" : "none" },
  ];
  return (
    <Box sx={{ backgroundColor: "background.secondary" }}>
      <HeroSection data={heroSectionData} />

      <Stack variant='section' sx={{ backgroundColor: "#fff" }}>
        <About />
      </Stack>
      <Stack variant='section' sx={{ backgroundColor: "primary.dark" }}>
        {/* <Stack variant='section' sx={{ backgroundColor: "#202020" }}> */}
        <Features />
      </Stack>
      {/* <Box
        component={"img"}
        src={galleryImages[0]}
        sx={{
          objectFit: "cover",
          objectPosition: "top  center",
          width: 1,
          aspectRatio: { xxs: 1, sm: 1.5, md: 1.75 },
        }}
        // alt={"About section background image."}
      /> */}
      <Stack
        className='background_image'
        variant='section'
        backgroundColor='secondary.main'
        sx={{
          backgroundImage: `url(${galleryImages[0]})`,
          // minHeight: { xxs: "auto", md: 600 },
          aspectRatio: { xxs: 1, sm: 1.5, md: 1.75 },
        }}
      >
        <GalleryShowcase />
      </Stack>
      {/* <Stack variant='section' backgroundColor='background.primary'>
        <Testimonials />
      </Stack> */}

      <Stack variant='section' backgroundColor='#fff'>
        <Testimonials />
      </Stack>
      <Stack variant='section' backgroundColor='background.secondary'>
        <ContactUs />
      </Stack>
    </Box>
  );
}

export default HomePage;

const galleryImages = [
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
  "https://wallpapercave.com/wp/wp3751665.jpg",
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

function MasonryImageList() {
  return (
    <ImageList
      sx={{ width: 1, height: 1, overflow: "hidden" }}
      cols={3}
      rowHeight={300}
    >
      {itemData.map(item => (
        <ImageListItem key={item.img}>
          <img
            // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            // src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            src={item.img}
            alt={item.title}
            // loading='lazy'
            style={{ objectFit: "cover", objectPosition: "top center" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];
