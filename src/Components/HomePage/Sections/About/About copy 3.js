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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
          gap: { xxs: theme.spacing(8), md: theme.spacing(4) },
        }}
      >
        <Typography variant={"h1"} typography={"displayFont"}>
          who we are.
        </Typography>
        <Stack sx={{ alignItems: "flex-start", gap: theme.spacing(24) }}>
          <Typography variant={"p"} typography={"subHeading.p"}>
            Welcome to Thomas Mitchell Clothiers, where craftsmanship meets
            elegance. We specialize in bespoke tailoring, crafting timeless
            garments that reflect your unique style and personality. With
            meticulous attention to detail and a passion for quality, we ensure
            each piece fits you perfectly and makes a statement. Explore our
            collection and experience the art of tailoring tailored just for
            you.
          </Typography>
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
        </Stack>
      </Box>
    </>
  );
}

export default About;
