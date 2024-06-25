import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  useMediaQuery,
  Link,
} from "@mui/material";
import { mobile, lg } from "../../../Theme/mediaQueries";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import debounce from "lodash/debounce";
import { heroSectionData } from "./data.js";
import CompanyAddress from "../../../HelperComponents/CompanyAddress.js";
import { fonts } from "../../../Theme/ThemeContext.js";
import { useHeroSectionSx } from "../../../Styles/useHeroSectionSx.js";
import ServicesGrid from "../ServicesGrid/ServicesGrid.js";
import BespokeServices from "../BespokeServices/BespokeServices.js";

function HeroSection() {
  const { heading, subHeading, backgroundImage } = heroSectionData;
  const { variant, sx } = useHeroSectionSx();

  return (
    // <Box sx={sx.hero_wrapper}>
    <Paper variant='heroSection'>
      <Typography variant={variant.heading} sx={sx.heading}>
        {heading}
      </Typography>
      <Typography variant={variant.subHeading} sx={sx.subHeading}>
        {subHeading}
      </Typography>

      <Box
        component='img'
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        sx={sx.hero_image}
      />
      {/* <BespokeServices /> */}
    </Paper>
  );
}

export default HeroSection;
