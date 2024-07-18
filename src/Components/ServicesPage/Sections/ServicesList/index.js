import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { servicesData } from "./data";

function ServicesList() {
  const theme = useTheme();
  const { title, content } = servicesData;
  return (
    <Stack gap={theme.spacing(12)}>
      {/* <Typography variant='h2' typography='title' textAlign={"center"}>
        {title}
      </Typography> */}
      <Grid
        container
        columns={{ xxs: 1, md: 2 }}
        spacing={{
          xxs: theme.spacing(6),
          md: theme.spacing(8),
          lg: theme.spacing(12),
        }}
      >
        {content.map(({ title, p }, index) => (
          <Grid xxs={1} key={index}>
            <Stack sx={{ gap: 2, minHeight: 200 }}>
              <Typography variant={"h4"} typography='title'>
                {title}
              </Typography>

              <Typography variant={"p"} typography='p'>
                {p}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

export default ServicesList;
