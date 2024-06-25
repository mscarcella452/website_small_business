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
  "https://i.pinimg.com/originals/a6/71/77/a67177f120a8e8acac1b35ef6d391aae.jpg";

function HeroSection() {
  const mobilePortrait = !useMediaQuery(mobile);
  const { backgroundImage, heading, btnTitle } = heroSectionData;

  const { variant, sx } = useHeroSectionSx({ bottomGutter: false });

  const clip = "calc(100% - 350px)";

  return (
    <Paper
      id='Home'
      elevation={0}
      // variant='heroSection'
      sx={{
        mb: 10,
        // mt: 0,
        // padding: 0,
        // mt: "140px",
        // border: 1,
        display: "grid",
        // gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "auto auto",
        // gap: 5,

        // border: 1,
        minHeight: {
          xxs: "auto",
          md: Math.min(window.innerHeight, 1100) + "px",
        },
      }}
    >
      <Box
        className='flexColumn'
        sx={{
          width: 1,
          height: 1,
          order: -1,
          padding: 6,
          // justifyContent: "flex-end",
          // alignItems: "flex-start",
          gap: 5,
          display: "grid",
          // gridTemplateColumns: "auto 1fr",
          gridTemplateColumns: { xxs: "1fr", md: "1fr auto", lg: "1fr 1fr" },

          alignItems: "flex-end",
          // border: 1,

          // mt: 5,
          // justifyContent: "space-around",
          // border: 1,
          // my: 4,

          // maxWidth: 350,
          // maxWidth: 650,
          // my: 3,
          // minHeight: "60vh",
          // minHeight: "calc(100vh - 105px)",
          // minHeight: {
          //   xxs: "auto",
          //   md: Math.min(window.innerHeight - 70, 450) + "px",
          // },
          // minHeight: {
          //   xxs: "auto",
          //   md: Math.min(window.innerHeight - 70, 550) + "px",
          // },
          // minHeight: "calc(100vh - 105px)",
          // border: 1,
          // pb: 10,

          // py: 5,

          // border: 1,
          // my: 10,
          order: 1,
        }}
      >
        {/* <Typography
          variant='h1'
          sx={{
            width: 1,
            maxWidth: "mobile",
            alignSelf: "flex-start",

            fontFamily: '"Playfair Display", serif',
            fontFamily: fonts.display,
            // lineHeight: 1.75,

            fontWeight: 500,
          }}
        >
          expert tailoring for personalized elegance
        </Typography> */}
        <Typography
          variant='h2'
          sx={{
            width: 1,

            fontFamily: '"Playfair Display", serif',
            // fontFamily: fonts.display,
            // fontSize: 75,
            // lineHeight: "75px",
            maxWidth: { xxs: 350, mobile: 1, sm: 650 },
            alignSelf: "flex-start",
            fontFamily: '"Libre Baskerville", serif',

            fontWeight: 300,
            textTransform: "lowercase",
            color: "fontColor.p",
            // color: "#2c3e50",
            // color: "primary.main",
            // mb: 5,
            "& .subtitle": {
              color: "fontColor.p",
              fontWeight: 200,
              fontFamily: fonts.display,
            },

            // maxWidth: 850,
            // display: "none",
          }}
        >
          {/* expert tailoring for personalized elegance */}
          {/* bespoke tailoring for personalized elegance */}
          {/* bespoke tailoring, uniquely elegant */}
          Bespoke tailoring{" "}
          <span className='subtitle'>for timeless elegance.</span>
          {/* Expert tailoring{" "}
          <span className='address'>for personalized elegance</span> */}
        </Typography>

        <Box
          className='flexColumn'
          sx={{
            // maxWidth: 400,
            // border: 1,
            // maxWidth: 650,
            width: 1,
            gap: 3,
            // border: 1,

            alignItems: { xxs: "flex-start", md: "center" },
            // order: 1,
            // display: "none",
          }}
        >
          <Typography
            variant='h6'
            sx={{
              width: 1,
              maxWidth: 400,

              fontFamily: '"Playfair Display", serif',
              fontFamily: fonts.display,
              // lineHeight: 1.75,
              display: "none",

              fontWeight: 300,
            }}
          >
            We specialize in bespoke tailoring, crafting exceptional garments
            that reflect your unique style and personality.
            {/* We specialize in bespoke tailoring, crafting timeless garments that
            reflect your unique style and personality. */}
          </Typography>
          <ArrowLink
            sx={{
              fontFamily: '"Libre Baskerville", serif',
              maxWidth: 400,
              width: 1,
              alignSelf: { xxs: "flex-start", md: "center" },
              // border: 1,
            }}
          >
            Request A Free Consulation
          </ArrowLink>
        </Box>
      </Box>

      <Box
        // component='img'
        // src={backgroundImage.src}
        // alt={backgroundImage.alt}
        sx={{
          width: 1,
          // aspectRatio: 1.5,
          // height: Math.min(window.innerHeight - 70, 400) + "px",
          height: 1,
          // height: 400,
          // height: 450,

          // objectFit: "cover",
          // objectPosition: "center",
          // minHeight: 450,
          minHeight: 450,
          background: `url(${image}) center center / cover no-repeat`,
          background: `url(${image}) center -200px / cover no-repeat fixed`,
        }}
        // sx={sx.hero_image_lg}
      />
    </Paper>
  );
}

export default HeroSection;
