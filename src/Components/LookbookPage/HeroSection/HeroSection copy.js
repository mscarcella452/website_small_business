import { useEffect, useRef, useState } from "react";
import { Box, Typography, Button, useMediaQuery, Link } from "@mui/material";
import { mobile, lg } from "../../../Theme/mediaQueries";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import debounce from "lodash/debounce";
import { heroSectionData } from "./data.js";
import CompanyAddress from "../../../HelperComponents/CompanyAddress.js";

const raleway = '"Raleway", sans-serif';

function HeroSection() {
  const largerScreen = useMediaQuery(lg);
  const mobilePortrait = !useMediaQuery(mobile);
  const [containerHeight, setContainerHeight] = useState(
    Math.min(window.innerHeight - 70, 645) + "px"
    // Math.min(window.innerHeight - 70, 645) + "px"
  );
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const { backgroundImage, heading, companyAddress, btnTitle } =
    heroSectionData;

  useEffect(() => {
    const heightResize = () => {
      const windowH = window.innerHeight;
      setWindowHeight(windowH);
    };

    const handleDebounceResize = debounce(heightResize, 300);
    heightResize();

    window.addEventListener("resize", handleDebounceResize);

    return () => window.removeEventListener("resize", handleDebounceResize);
  }, []);

  return (
    <Box
      id='Home'
      sx={{
        marginTop: "70px",
        // scrollSnapAlign: "start",
        scrollMarginTop: "70px",
        padding: { xxs: 2, mobile: 4, md: 5 },
        minHeight: {
          xxs: windowHeight - 70,
          md: Math.min(windowHeight - 70, 750) + "px",
        },
        gap: { xxs: 4, md: 5, lg: 6 },
        display: "grid",
        gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
        gridTemplateRows: { xxs: "auto auto", md: "1fr" },
      }}
    >
      <Box
        component='img'
        src={backgroundImage}
        alt={"Hero Section background image"}
        sx={{
          objectFit: "cover",
          objectPosition: "top center",
          width: 1,
          aspectRatio: 1,
          minHeight: { xxs: "auto", md: 570 },
          order: { xxs: 1, md: -1 },
          alignSelf: "center",
          boxShadow: 5,
        }}
      />

      <Box
        className='flexColumn'
        sx={{
          height: 1,
          width: 1,
          gap: "inherit",
          alignItems: "flex-start",
          maxHeight: { xxs: "auto", md: windowHeight - 105 },
          minHeight: { xxs: "auto", md: 570 },
        }}
      >
        <Typography
          variant={largerScreen ? "h1" : mobilePortrait ? "h2" : "h1"}
          sx={{
            fontFamily: raleway,
            fontWeight: 300,
            color: "#262626",
            maxWidth: { xxs: 1, md: "mobile" },
          }}
        >
          {heading}
        </Typography>

        <Link
          variant='primary'
          sx={{ fontSize: 14, display: { xxs: "block", md: "none" } }}
        >
          {btnTitle}
        </Link>
        <CompanyAddress
          variant={mobilePortrait ? "h7" : "h5"}
          fontWeight='300'
        />
      </Box>
    </Box>
  );
}

export default HeroSection;
