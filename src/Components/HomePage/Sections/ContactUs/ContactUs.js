// import React from "react";
import { Paper, Container, Typography } from "@mui/material";
import { contactData } from "./data.js";
import { useSectionSx } from "../../../../Styles/useSectionSx";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";

function ContactUs() {
  const { variant, sx } = useSectionSx();
  const { subtitle, title, description, btnTitle } = contactData;
  return (
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
  );
}

export default ContactUs;
