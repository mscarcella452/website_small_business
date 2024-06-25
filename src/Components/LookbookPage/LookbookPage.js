import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { useGlobalSx } from "../../Styles/useGlobalSx";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { lookbookImages } from "./data";
import HeroSection from "./HeroSection/HeroSection";
import { useSectionSx } from "../../Styles/useSectionSx";
import { useHeroSectionSx } from "../../Styles/useHeroSectionSx";
import ContactUs from "../HomePage/Sections/ContactUs/ContactUs";
import BespokeServices from "../ServicesPage/BespokeServices/BespokeServices";
import ImageGrid from "./ImageGrid";
import Hours from "../HomePage/Sections/Hours/Hours";
function LookbookPage() {
  const sx = useGlobalSx();

  return (
    <Box backgroundColor='background.primary' sx={sx.page_container}>
      <HeroSection />
      {/* <Box sx={sx.content_Wrapper}>
        <BespokeServices />
      </Box>
      <Box sx={sx.content_Wrapper}>
        <ContactUs />
      </Box> */}
      {/* <ImageGrid /> */}
      <Box sx={sx.content_Wrapper}>
        <ContactUs />
      </Box>
    </Box>
  );
}

export default LookbookPage;
