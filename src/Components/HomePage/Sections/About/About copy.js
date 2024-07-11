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
      <Stack variant='heading'>
        <Typography variant={hv["p"]} typography={"heading.p"}>
          {heading}
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
            sx={{ order: -1 }}
          />
        )}
      </Stack>
    </>
  );
}

export default About;
