// import React from "react";
import { Box, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import { aboutData } from "./data";
import { ArrowLink } from "../../../../HelperComponents";

function About() {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up("sm"));
  const { heading, content, image } = aboutData;

  return (
    <>
      <Stack variant='grid'>
        <Typography variant={"h2"} typography={"title"}>
          {heading.title}
        </Typography>
        <Typography variant={"p"} typography={"p"}>
          {heading.p}
        </Typography>
      </Stack>
      <Stack variant='grid'>
        <Stack variant='content'>
          <Typography variant={"h6"} typography='subtitle'>
            {content.title}
          </Typography>
          <Typography variant={"p"} typography='p'>
            {content.p}
          </Typography>
          <ArrowLink
            variant={"p"}
            typography='arrowLink'
            to={content.link.path}
          >
            {content.link.title}
          </ArrowLink>
        </Stack>

        <Box
          className='content_img'
          component={"img"}
          src={image.src}
          alt={image.alt}
        />
      </Stack>
    </>
  );
}

export default About;
