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
import ArrowLink from "../../../HelperComponents/ArrowLink.js";

const image =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

function HeroSection() {
  const mobilePortrait = !useMediaQuery(mobile);
  const { backgroundImage, heading, btnTitle } = heroSectionData;

  const { variant, sx } = useHeroSectionSx({ bottomGutter: false });

  const clip = "calc(100% - 350px)";

  return (
    <Paper
      id='Home'
      variant='heroSection'
      sx={
        {
          // mt: "30px",
          // border: 1,
          // display: "grid",
          // // gridTemplateColumns: "auto 1fr",
          // gridTemplateColumns: "1fr auto",
        }
      }
    >
      <Box
        className='flexColumn'
        sx={{
          width: 1,
          height: 1,
          order: -1,
          // justifyContent: "flex-end",
          // alignItems: "flex-start",
          gap: 5,
          // display: "grid",
          // // gridTemplateColumns: "auto 1fr",
          // gridTemplateColumns: "1fr auto",
          alignItems: "flex-start",
          justifyContent: "space-around",

          // maxWidth: 350,
          // maxWidth: 650,
          // my: 3,
          minHeight: "60vh",
          // maxHeight: "calc(100vh - 105px)",

          // py: 5,

          // border: 1,
          // order: 1,
        }}
      >
        <Typography
          variant='h1'
          sx={{
            width: 1,

            fontFamily: '"Playfair Display", serif',
            // fontFamily: fonts.display,
            // fontFamily: '"Libre Baskerville", serif',

            fontWeight: 700,
            textTransform: "lowercase",
            mb: 5,

            // maxWidth: 850,
            // display: "none",
          }}
        >
          Expert tailoring for personalized elegance
        </Typography>
        <Box
          className='flexColumn'
          sx={{ maxWidth: 450, gap: "inherit", alignSelf: "flex-end" }}
        >
          <Typography
            variant='h6'
            sx={{
              width: 1,

              fontFamily: '"Playfair Display", serif',
              fontFamily: fonts.primary,
              lineHeight: 1.75,

              // mt: 5,
              // order: -1,
              // display: "none",
              // fontFamily: '"Libre Baskerville", serif',

              fontWeight: 200,
            }}
          >
            We specialize in bespoke tailoring, crafting timeless garments that
            reflect your unique style and personality.
          </Typography>
          <ArrowLink sx={{ fontFamily: '"Libre Baskerville", serif' }}>
            Get A Free Consulation
          </ArrowLink>
        </Box>
      </Box>

      <Box
        component='img'
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        // sx={{
        //   width: 1,
        //   aspectRatio: 1,
        //   objectFit: "cover",
        //   objectPosition: "center",
        //   minHeight: 650,
        // }}
        sx={sx.hero_image_lg}
      />
    </Paper>
  );
}

export default HeroSection;
