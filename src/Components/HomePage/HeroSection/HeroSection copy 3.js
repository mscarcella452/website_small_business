import {
  Paper,
  Box,
  Typography,
  useMediaQuery,
  Link,
  Container,
} from "@mui/material";
import { mobile } from "../../../Theme/mediaQueries.js";
import { fonts } from "../../../Theme/ThemeContext.js";

import { heroSectionData } from "./data.js";
import CompanyAddress from "../../../HelperComponents/CompanyAddress.js";
import { useHeroSectionSx } from "../../../Styles/useHeroSectionSx.js";

function HeroSection() {
  const mobilePortrait = !useMediaQuery(mobile);
  const { backgroundImage, heading, btnTitle } = heroSectionData;

  const { variant, sx } = useHeroSectionSx({ bottomGutter: false });

  return (
    <Paper id='Home' variant='heroSection'>
      <Typography
        // variant={variant.heading}
        variant='h3'
        sx={{
          ...sx.heading,
          fontFamily: fonts.display,
          mt: 6,
          // fontFamily: '"Playfair Display", serif',
          fontFamily: '"Libre Baskerville", serif',
          fontWeight: 100,
          // textAlign: "center",
          maxWidth: "450px",
          textTransform: "capitalize",

          // alignSelf: "Center",
        }}
      >
        {heading}
      </Typography>

      <Link variant='primary' sx={sx.hero_link}>
        {btnTitle}
      </Link>
      <CompanyAddress
        variant={mobilePortrait ? "h7" : "h5"}
        fontWeight='300'
        justifyContent='flex-start'
        sx={sx.address}
      />
      <Box
        component='img'
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        sx={sx.hero_image_lg}
      />
    </Paper>
  );
}

export default HeroSection;
