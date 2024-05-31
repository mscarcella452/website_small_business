import { useEffect, useRef, useState } from "react";
import debounce from "lodash/debounce";

import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import {
  mobile,
  sm,
  md,
  lg,
  mobileLandscape,
} from "../../../Theme/mediaQueries";
import { useHeroSectionStyles } from "./styles/heroSectionStyles";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const dummyLogo =
  "https://webstockreview.net/images/clipart-scissors-craft-scissors-16.png";

const dummyBackground2 = "https://wallpaperaccess.com/full/4870403.jpg";
const dummyBackground =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

const logo = "https://cdn-icons-png.flaticon.com/128/10583/10583048.png";

const tailorStore =
  "https://i.pinimg.com/originals/cc/78/3f/cc783fcb7a3aaf8049ad104998e3c3ac.jpg";
const background1 = "https://wallpaperaccess.com/full/2595436.jpg";
const background3 = "https://wallpapercave.com/wp/wp3751665.jpg";
// background3 1024w  x 768h
const background2 = "https://cdn131.picsart.com/268046385010211.png";
const background4 = "https://wallpaperaccess.com/full/2595436.jpg";
// const background2 = "https://wallpaperaccess.com/full/4870769.jpg";

const barlow = '"Barlow Condensed", sans-serif';
const alexBrush = '"Alex Brush", cursive';
const exo = '"Exo", sans-serif';
const dancingScript = '"Dancing Script", cursive;';
const gravitas = '"Gravitas One", cursive;';
const ysabeau = '"Ysabeau SC", sans-serif';
const recursive = '"Recursive", sans-serif';
const playfair = '"Playfair Display", serif';
const baskerville = '"Libre Baskerville", serif';
const raleway = '"Raleway", sans-serif';
const bitter = '"Bitter", serif';

function HeroSection() {
  const classes = useHeroSectionStyles();
  const largerScreen = useMediaQuery(lg);
  const mobilePortrait = !useMediaQuery(mobile);
  const [containerHeight, setContainerHeight] = useState(
    Math.min(window.innerHeight - 70, 645) + "px"
    // Math.min(window.innerHeight - 70, 645) + "px"
  );
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const heightResize = () => {
      const windowH = window.innerHeight;
      setWindowHeight(windowH);
      // if (largerScreen) {
      //   setContainerHeight(Math.min(windowHeight - 70, 820) + "px");
      // } else setContainerHeight(Math.min(windowHeight - 70, 645) + "px");
    };

    heightResize();

    window.addEventListener("resize", heightResize);

    return () => window.removeEventListener("resize", heightResize);
  }, []);

  return (
    <Box
      className='flexColumn'
      sx={{
        marginTop: "70px",
        padding: { xxs: 2, mobile: 4, md: 5 },
        minHeight: {
          xxs: Math.min(windowHeight - 70, 500) + "px",
          mobile: Math.min(windowHeight - 70, 645) + "px",
          md: Math.min(windowHeight - 70, 820) + "px",
          lg: "calc(100vh - 70px)",
        },

        // border: 1,
        gap: { xxs: 6, md: 5, lg: 6 },
      }}
    >
      <Box
        // className='flexColumn'
        sx={{
          height: 1,
          width: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
          gridTemplateRows: { xxs: "auto auto", md: "1fr" },

          gap: "inherit",
          alignItems: "flex-start",
          minHeight: 570,
        }}
      >
        <Box
          component='img'
          src={dummyBackground}
          alt={"Hero Section background image"}
          sx={{
            objectFit: "cover",
            objectPosition: "top center",
            width: 1,
            aspectRatio: 1,
            minHeight: 570,
            order: { xxs: 1, md: -1 },
          }}
        />

        <Box
          className='flexColumn'
          sx={{
            height: 1,
            width: 1,
            alignItems: "flex-start",
            maxHeight: "calc(100vh - 105px)",
            minHeight: { xxs: "auto", md: 570 },
            gap: "inherit",
            border: 1,
          }}
        >
          <Typography
            variant={largerScreen ? "h1" : mobilePortrait ? "h2" : "h1"}
            sx={{
              fontFamily: raleway,
              fontWeight: 300,
              color: "#262626",
              maxWidth: { xxs: 1, md: "mobile" },
              border: 1,
            }}
          >
            expert tailoring for personalized elegance
          </Typography>
          <Button
            variant='primary'
            sx={{ display: { xxs: "block", md: "none" } }}
          >
            Discover Your Fit
          </Button>
          <CompanyAddress
            mobilePortrait={mobilePortrait}
            // display={{ xxs: "block", md: "none" }}
          />
        </Box>
      </Box>
      {/* <CompanyAddress
        mobilePortrait={mobilePortrait}
        display={{ xxs: "none", md: "block" }}
      /> */}
    </Box>
  );
}

export default HeroSection;

function CompanyAddress({ display, mobilePortrait }) {
  return (
    <Typography
      variant={mobilePortrait ? "h7" : "h5"}
      sx={{
        fontFamily: recursive,
        fontWeight: 300,
        width: 1,
        display: display,

        // border: 1,
      }}
    >
      24 Gerard St, Huntington, NY 11743{" "}
      <LocationOnIcon sx={{ color: "primary.main" }} />
    </Typography>
  );
}
