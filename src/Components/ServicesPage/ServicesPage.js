import React from "react";
import { Box, Stack } from "@mui/material";
import ContactUs from "../HomePage/Sections/ContactUs";
import { Banner } from "../ReusableComponents";
import OurProcess from "./Sections/OurProcess";
import ServicesList from "./Sections/ServicesList";
import ServicesFAQ from "./Sections/ServicesFAQ";

const image =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

const BannerIamges = [
  "https://images.squarespace-cdn.com/content/v1/5d817829ddc5014885c73bf0/1653873566958-GU365UOTX2CE7ZO0U4JB/TK_MTM_5_0522.JPG?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5d817829ddc5014885c73bf0/1653873627473-3RR0QIUHIEAF1MCM7ICW/TK_BS_8_0522.JPG?format=1500w",
];
// https://www.tailorskeep.com/madetomeasure

function ServicesPage() {
  return (
    <Box>
      <Banner images={BannerIamges} />

      <Stack variant='section'>
        <ServicesList />
      </Stack>

      <OurProcess />

      <Stack
        className='background_image'
        variant='section'
        backgroundColor='dark.secondary'
        sx={{
          backgroundImage: `url(${image})`,
          width: 1,
          aspectRatio: 2,
          minHeight: 300,
        }}
      ></Stack>
      <Stack variant='section'>
        <ServicesFAQ />
      </Stack>

      <Stack variant='section' backgroundColor='background.secondary'>
        <ContactUs />
      </Stack>
    </Box>
  );
}

export default ServicesPage;
