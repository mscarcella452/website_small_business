import React from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { processData } from "./data";

function OurProcess() {
  const theme = useTheme();
  const { heading, content } = processData;
  return (
    <>
      <Stack variant='section' backgroundColor='primary.main'>
        <Stack variant='grid'>
          <Typography variant='h2' typography='title' color='light.primary'>
            {heading.title}
          </Typography>
          <Typography variant='p' typography='p' color='light.primary'>
            {heading.p}
          </Typography>
        </Stack>
      </Stack>
      <Stack variant='section' backgroundColor='background.secondary'>
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
                <Typography
                  variant={"h6"}
                  typography='subtitle'
                  // color='dark.secondary'
                >
                  0{index + 1}. {title}
                </Typography>

                <Typography variant={"p"} typography='p'>
                  {p}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default OurProcess;
