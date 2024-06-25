// import React from "react";
import { Paper, Typography, Box, Container } from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import { featuresData } from "./data";
import { useSectionSx } from "../../../../Styles/useSectionSx";

function Features() {
  const { variant, sx } = useSectionSx();
  const { subtitle, title, description, btnTitle, content } = featuresData;
  return (
    <>
      <Paper variant='section'>
        <Container maxWidth={false} sx={sx.section_container}>
          <Typography variant={variant.subtitle} sx={sx.subtitle}>
            {subtitle}
          </Typography>
          <Typography variant={variant.title} sx={sx.title}>
            {title}
          </Typography>

          <Typography variant={variant.heading_p} sx={sx.heading_p}>
            {description}
          </Typography>
          <ArrowLink sx={sx.heading_link}>{btnTitle}</ArrowLink>
        </Container>
      </Paper>
      <Paper variant='section'>
        <Container maxWidth={false} sx={sx.section_container}>
          <Box sx={sx.contentGrid}>
            <Box sx={sx.contentContainer}>
              {content.bulletPoints.map(({ title, description }, index) => (
                <Box
                  key={index}
                  className='flexColumn'
                  sx={{ alignItems: "flex-start", gap: 1 }}
                >
                  <Typography
                    variant={variant.content_title}
                    sx={sx.content_title}
                  >
                    {title}
                  </Typography>
                  <Typography variant={variant.content_p} sx={sx.content_p}>
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
