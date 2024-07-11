// import React from "react";
import { Paper, Typography, Box, Container, useTheme } from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import { featuresData } from "./data";
import { useSectionSx } from "../../../../Styles/useSectionSx";

function Features() {
  const { typography } = useTheme();
  const { heading, subHeading } = typography.variants;
  const { sx } = useSectionSx();
  const { subtitle, title, description, btnTitle, content } = featuresData;
  return (
    <>
      <Paper variant='section'>
        <Container maxWidth={false} variant='heading'>
          <Typography variant={heading.subtitle} typography='heading.subtitle'>
            {subtitle}
          </Typography>
          <Typography variant={heading.title} typography='heading.title'>
            {title}
          </Typography>

          <Typography variant={heading.p} typography='heading.p'>
            {description}
          </Typography>
          <ArrowLink variant={heading.link} typography='heading.link'>
            {btnTitle}
          </ArrowLink>
        </Container>
      </Paper>
      <Paper variant='section'>
        <Container maxWidth={false} variant='content_column'>
          <Box sx={sx.contentGrid}>
            <Box sx={sx.contentContainer}>
              {content.bulletPoints.map(({ title, description }, index) => (
                <Box
                  key={index}
                  className='flexColumn'
                  sx={{ alignItems: "flex-start", gap: 1 }}
                >
                  <Typography
                    variant={subHeading.title}
                    typography='subHeading.title'
                  >
                    {title}
                  </Typography>
                  <Typography variant={subHeading.p} typography='subHeading.p'>
                    {description}
                  </Typography>
                </Box>
              ))}
            </Box>
            <Box
              sx={sx.contentImage}
              component={"img"}
              src={content.backgroundImage}
              alt='Features section background image.'
            />
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default Features;
