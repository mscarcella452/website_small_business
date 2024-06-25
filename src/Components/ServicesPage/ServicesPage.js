import React from "react";
import { Box, Paper } from "@mui/material";
import HeroSection from "./HeroSection/HeroSection";
import { useGlobalSx } from "../../Styles/useGlobalSx";
import BespokeServices from "./BespokeServices/BespokeServices";
import ServicesGrid from "./ServicesGrid/ServicesGrid";
import ContactUs from "../HomePage/Sections/ContactUs/ContactUs";

const image =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

function ServicesPage() {
  const sx = useGlobalSx();
  return (
    <Box backgroundColor='background.primary' sx={sx.page_container}>
      <HeroSection />
      <Box sx={sx.content_Wrapper}>
        <BespokeServices />

        <Paper variant='section'>
          <Box
            component={"img"}
            src={image}
            // alt={"About section background image."}
            sx={sx.divider_image}
          />
        </Paper>
        <ServicesGrid />
      </Box>
    </Box>
  );
}

export default ServicesPage;
