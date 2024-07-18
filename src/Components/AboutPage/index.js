import React from "react";
import { Banner } from "../ReusableComponents";
import { Stack, Typography, useTheme } from "@mui/material";
import ContactUs from "../HomePage/Sections/ContactUs";
import { aboutData } from "./data";

const BannerImages = [
  "https://images.squarespace-cdn.com/content/v1/5d817829ddc5014885c73bf0/1653864133324-93SRILNHDYXDLH6Y0861/TK_S_7_0522.JPG?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5d817829ddc5014885c73bf0/1653864295379-I8WJFS717SLKUDKWFG9J/TK_S_2_0522.JPG?format=1500w",
];

function AboutPage() {
  const theme = useTheme();
  const { heading, content } = aboutData;
  console.log(content);
  return (
    <>
      <Banner images={BannerImages} />

      <Stack variant='section'>
        <Stack gap={theme.spacing(6)}>
          <Typography variant='h2' typography='title'>
            {heading.title}
          </Typography>
          {heading.p.map((p, index) => (
            <Typography variant='p' typography='p' key={index}>
              {p}
            </Typography>
          ))}
        </Stack>

        {content.map(({ title, p }, index) => (
          <Stack variant='grid' key={index}>
            <Typography variant='h5' typography='subtitle'>
              {title}
            </Typography>
            <Typography variant='p' typography='p'>
              {p}
            </Typography>
          </Stack>
        ))}
      </Stack>
      <Stack variant='section' backgroundColor='background.secondary'>
        <ContactUs />
      </Stack>
    </>
  );
}

export default AboutPage;
