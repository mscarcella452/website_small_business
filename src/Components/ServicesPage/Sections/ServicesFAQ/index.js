import { useState } from "react";
import { Stack, Typography, useTheme, Box } from "@mui/material";
import { serviecsFAQData } from "./data";
import { Accordion } from "../../../ReusableComponents";

function ServicesFAQ() {
  const theme = useTheme();
  const { heading, content } = serviecsFAQData;
  return (
    <Stack gap={theme.spacing(12)} alignItems='center'>
      <Stack gap={theme.spacing(6)}>
        <Typography variant='h2' typography='title' textAlign='center'>
          {heading.title}
        </Typography>
        <Typography
          variant='p'
          typography='p'
          sx={{ textAlign: { xxs: "left", sm: "center" }, maxWidth: "lg" }}
        >
          {heading.p}
        </Typography>
      </Stack>
      <Accordion panels={content} maxWidth='lg' />
    </Stack>
  );
}

export default ServicesFAQ;
