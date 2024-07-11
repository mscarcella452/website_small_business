// import React from "react";
import {
  Paper,
  Container,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import { mobile } from "../../../../Theme/mediaQueries";
import { aboutData } from "./data";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import { useSectionSx } from "../../../../Styles/useSectionSx";

function About() {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up("md"));
  const { heading, content, image } = aboutData;
  const { heading: hv, subHeading: shv } = theme.typography.variants;

  return (
    <>
      <Stack direction='row' sx={{ alignItems: "center" }}>
        <Typography
          variant={"h1"}
          typography={"displayFont"}
          sx={{
            width: 0.5,
            // fontWeight: "300",
            textAlign: "left",
          }}
        >
          who we are.
        </Typography>
        <Typography
          variant={"p"}
          typography={"subHeading.p"}
          sx={{ width: 0.5 }}
        >
          Welcome to Thomas Mitchell Clothiers, where craftsmanship meets
          elegance. We specialize in bespoke tailoring, crafting timeless
          garments that reflect your unique style and personality. With
          meticulous attention to detail and a passion for quality, we ensure
          each piece fits you perfectly and makes a statement. Explore our
          collection and experience the art of tailoring tailored just for you.
        </Typography>
      </Stack>
      <Stack direction='row'>
        <Stack variant='content'>
          <Typography variant={shv.title} typography='subHeading.title'>
            {content.title}
          </Typography>
          <Typography variant={shv.p} typography='subHeading.p'>
            {content.description}
          </Typography>
          <ArrowLink variant={shv.link} typography='subHeading.link'>
            {content.link}
          </ArrowLink>
        </Stack>

        {showImage && (
          <Box
            className='content_img'
            component={"img"}
            src={image.src}
            alt={image.alt}
            // sx={{ order: -1 }}
          />
        )}
      </Stack>
    </>
  );
}

export default About;
