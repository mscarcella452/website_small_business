// import React from "react";
import {
  Paper,
  Container,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { mobile } from "../../../../Theme/mediaQueries";
import { aboutData } from "./data";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import { useSectionSx } from "../../../../Styles/useSectionSx";

function About() {
  const { variant, sx } = useSectionSx();
  const largerScreen = useMediaQuery(mobile);
  const { companyName, companyDescription, content } = aboutData;

  return (
    <>
      <Paper variant='section'>
        <Container maxWidth={false} sx={sx.section_container}>
          <Typography
            variant={largerScreen ? "h2" : "h3"}
            sx={{
              ...sx.title,
              textTransform: "uppercase",
              maxWidth: 1,
              fontWeight: 700,
            }}
          >
            {companyName}
          </Typography>
          <Typography
            variant={variant.heading_p}
            sx={{ ...sx.heading_p, paddingBottom: 0 }}
          >
            {companyDescription}
          </Typography>
        </Container>
      </Paper>
      <Paper variant='section'>
        <Container maxWidth={false} variant='sectionContainer'>
          <Box sx={sx.contentGrid}>
            <Box sx={sx.contentContainer}>
              <Typography variant={variant.content_title} sx={sx.content_title}>
                {content.title}
              </Typography>
              <Typography variant={variant.content_p} sx={sx.content_p}>
                {content.paragraph}
              </Typography>
              <ArrowLink>{content.btnTitle}</ArrowLink>
            </Box>
            <Box
              sx={sx.contentImage}
              component={"img"}
              src={content.imgSrc}
              alt={"About section background image."}
            />
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default About;
