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
import ImageGrid from "../ImageGrid.js";
import { useGlobalSx } from "../../../Styles/useGlobalSx.js";

function HeroSection() {
  const { heading, subHeading, backgroundImage } = heroSectionData;
  const { variant, sx } = useHeroSectionSx({ bottomGutter: true });
  const globalSx = useGlobalSx();

  return (
    <Paper id='Home' variant='heroSection'>
      <Box className='flexColumn' sx={sx.contentContainer}>
        <Typography variant={variant.heading} sx={sx.heading}>
          {heading}
        </Typography>
        <Typography variant={variant.subHeading} sx={sx.subHeading}>
          {subHeading}
        </Typography>
      </Box>

      <ImageGrid />
    </Paper>
  );
}

export default HeroSection;
