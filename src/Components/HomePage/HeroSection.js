import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { sm } from "../../Theme/mediaQueries";

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
const background2 = "https://wallpaperaccess.com/full/4870769.jpg";

const barlow = '"Barlow Condensed", sans-serif';

function HeroSection() {
  const largerScreen = useMediaQuery(sm);
  return (
    <>
      <Paper
        variant='section'
        sx={{
          //   height: "calc(100vh - 70px)",
          height: "120vh",
          maxHeight: { xxs: 425, sm: 550, lg: 750 },
          position: "relative",
          zIndex: 2,

          "&:after": {
            content: "''",
            top: "-70px",
            bottom: 0,
            // left: 0,
            width: "calc(100vw - 425px)",
            right: 0,
            position: "absolute",
            backgroundColor: "background.primary",
            zIndex: -1,
          },
          "&:before": {
            content: "''",
            zIndex: -1,
            top: "-70px",
            bottom: 0,
            left: 0,
            width: 575,
            position: "absolute",
            background: `url(${background3}) right center / cover no-repeat`,
            // transform: "translateX(100px)",

            // filter: "grayscale(100%)", // Apply grayscale filter
            backgroundColor: "primary.light", // Apply your desired background color with opacity
            // backgroundColor: "rgba(140, 148, 136, 1)", // Apply your desired background color with opacity
            // backgroundColor: "rgba(229, 248, 255, 1)", // Apply your desired background color with opacity
            backgroundBlendMode: "multiply", // Blend mode for combining background color with image
          },
        }}
      >
        {/* <Box
          sx={{
            zIndex: 1,
            top: "-70px",
            bottom: 0,
            left: 0,
            width: 425,
            position: "absolute",
            backgroundColor: "primary.dark",
            opacity: 0.85,
          }}
        /> */}
        <Container
          maxWidth={"lg"}
          sx={{
            zIndex: 1,
            position: "relative",
            // border: 1,
            // backgroundColor: "red",
            height: 500,
            marginLeft: "175px",
            display: "grid",
            gridTemplateColumns: "450px 1fr",
            gap: 4,
            // display: "none",
          }}
        >
          <Box
            component='img'
            src={dummyBackground}
            sx={{
              height: 1,
              width: 1,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Box
            className='flexColumn'
            sx={{
              //   border: 1,
              height: 1,
              width: 1,
              gap: "inherit",
              alignItems: "flex-start",
            }}
          >
            <Typography variant='h2'>
              Expert tailoring for personalized elegance.
            </Typography>
            <Button variant='primary'>Discover Your Perfect Fit</Button>
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default HeroSection;
