// import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";
import { hoursDataCopy } from "./data";
import CompanyAddress from "../../../../HelperComponents/CompanyAddress";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import { useSectionSx } from "../../../../Styles/useSectionSx";
import companyData from "../../../../data/CompanyData";

function Hours() {
  const { variant, sx } = useSectionSx();

  const { subtitle, description, content } = hoursDataCopy;

  return (
    <>
      <Paper variant='section' id='Hours'>
        <Container maxWidth={false} sx={sx.section_container}>
          <Typography variant={variant.subtitle} sx={sx.subtitle}>
            {subtitle}
          </Typography>
          <CompanyAddress variant={variant.title} sx={sx.title} />
          <Typography variant={variant.heading_p} sx={sx.heading_p}>
            {description}
          </Typography>

          <Box
            className='flexColumn'
            sx={{ width: 1, gap: "inherit", my: "3rem" }}
          >
            {companyData.hours.map(({ day, hours }, index) => (
              <Box
                key={index}
                sx={{ ...sx.contentContainer, maxWidth: "lg", gap: 1 }}
              >
                <Typography
                  variant={variant.content_title}
                  sx={sx.content_title}
                >
                  {day}
                </Typography>
                {hours === "*appt. only" ? (
                  <ArrowLink>{hours}</ArrowLink>
                ) : (
                  <Typography variant={variant.content_p} sx={sx.content_p}>
                    {hours}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>

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
              alt={"Hours section bacground image."}
            />
          </Box>
        </Container>
      </Paper>
    </>
  );
}

export default Hours;
