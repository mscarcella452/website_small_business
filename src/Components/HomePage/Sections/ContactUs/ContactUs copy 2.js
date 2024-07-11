// import React from "react";
import { Box, Typography, useTheme, Stack, useMediaQuery } from "@mui/material";
import { contactData } from "./data.js";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";

import { CompanyHours, ContactInfo } from "../../../ReusableComponents";

function ContactUs() {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up("md"));
  const { heading, content, image } = contactData;
  const { heading: hv, subHeading: shv } = theme.typography.variants;

  return (
    <>
      <Stack variant='heading'>
        {heading.text.map(({ variant, typography, text }) => (
          <Typography variant={hv[variant]} typography={typography}>
            {text}
          </Typography>
        ))}
        <ArrowLink variant={hv.link} typography='heading.link'>
          {heading.link}
        </ArrowLink>
      </Stack>
      <Stack direction='row'>
        <Stack variant='content'>
          <CompanyHours />
          <ContactInfo />
        </Stack>

        {showImage && (
          <Box
            className='content_img'
            component={"img"}
            src={image.src}
            alt={image.alt}
          />
        )}
      </Stack>
    </>
  );
}

export default ContactUs;
