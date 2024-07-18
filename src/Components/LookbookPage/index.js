import React from "react";
import { Box, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { lookbookImages } from "./data";

import ContactUs from "../HomePage/Sections/ContactUs";
import { useResponsiveThemeValue } from "../../Hooks";

function LookbookPage() {
  const navbarHeight = useResponsiveThemeValue("navbar.height");
  return (
    <Box>
      <Stack
        variant='section'
        mt={navbarHeight}
        pt={{ xxs: 0, xs: 0, mobile: 0, sm: 0, md: 0, lg: 0 }}
      >
        <Grid container columns={{ xxs: 1, mobile: 2, md: 3 }}>
          {lookbookImages.map(item => (
            <Grid xxs={1} key={item.img} p={{ xxs: 1, mobile: 1.5, md: 2 }}>
              <Box
                component={"img"}
                src={item.img}
                alt={item.title}
                loading='lazy'
                sx={{
                  width: "100%",
                  aspectRatio: 1,
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack variant='section' backgroundColor='background.secondary'>
        <ContactUs />
      </Stack>
    </Box>
  );
}

export default LookbookPage;
