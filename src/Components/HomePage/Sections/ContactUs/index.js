// import React from "react";
import { Typography, Stack } from "@mui/material";
import { contactData } from "./data.js";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";

function ContactUs() {
  const { title, p, link } = contactData;

  return (
    <>
      <Stack variant='grid'>
        <Typography variant='h2' typography='title'>
          {title}
        </Typography>
        <Typography variant={"p"} typography={"heading.p"}>
          {p}
        </Typography>
      </Stack>

      <ArrowLink
        to={link.path}
        variant='h6'
        typography='arrowLink'
        sx={{ width: 1, maxWidth: "mobile" }}
      >
        {link.title}
      </ArrowLink>
    </>
  );
}

export default ContactUs;
