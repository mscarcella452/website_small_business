import { Box, Typography, useMediaQuery, Link } from "@mui/material";
import { mobile } from "../../../Theme/mediaQueries";

import { heroSectionData } from "./data.js";
import CompanyAddress from "../../../HelperComponents/CompanyAddress.js";
import { useHeroSectionSx } from "../../../Styles/useHeroSectionSx.js";

function HeroSection() {
  const mobilePortrait = !useMediaQuery(mobile);
  const { backgroundImage, heading, btnTitle } = heroSectionData;

  const { variant, sx } = useHeroSectionSx({ bottomGutter: false });

  return (
    <Box
      id='Home'
      sx={{
        ...sx.hero_wrapper,
        scrollMarginTop: "70px",
      }}
    >
      <Box sx={sx.contentContainer}>
        <Typography variant={"h1"} sx={sx.heading}>
          {heading}
        </Typography>

        <Link variant='primary' sx={sx.hero_link}>
          {btnTitle}
        </Link>
        <CompanyAddress
          variant={mobilePortrait ? "h7" : "h5"}
          fontWeight='300'
          sx={sx.address}
        />
      </Box>
      <Box
        component='img'
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        sx={sx.hero_image_lg}
      />
    </Box>
  );
}

export default HeroSection;
