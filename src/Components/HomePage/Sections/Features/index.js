// import React from "react";
import { Typography, useTheme, Stack } from "@mui/material";
import { ArrowLink } from "../../../../HelperComponents";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { featuresData } from "./data";

function Features() {
  const theme = useTheme();
  const { heading, content, link, image } = featuresData;

  return (
    <>
      <Stack variant='section' backgroundColor='primary.main'>
        <Stack variant='grid'>
          <Typography
            variant={"h2"}
            typography={"title"}
            sx={{ color: "#D3D7D5" }}
          >
            {heading.title}
          </Typography>
          <Typography variant={"p"} typography={"p"} sx={{ color: "#D3D7D5" }}>
            {heading.p}
          </Typography>
        </Stack>
        <ArrowLink
          variant={"h6"}
          typography='arrowLink'
          to={link.path}
          sx={{ width: 1, color: "#D3D7D5" }}
        >
          {link.title}
        </ArrowLink>
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
            <Grid xxs={1}>
              <Stack key={index} sx={{ gap: 2, minHeight: 200 }}>
                <Typography
                  variant={"h4"}
                  typography='title'
                  // sx={{ color: "#D3D7D5" }}
                  // sx={{ color: "#D3D3D3" }}
                  // sx={{ color: "primary.main" }}
                >
                  {title}
                </Typography>
                <Typography
                  variant={"p"}
                  typography='p'
                  // sx={{ color: "#D3D3D3" }}
                  // sx={{ color: "#D3D7D5" }}
                  // sx={{ color: "primary.main" }}
                >
                  {p}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
        {/* <ArrowLink
          variant={"h6"}
          typography='arrowLink'
          to={link.path}
          sx={{ width: 1, color: "primary.main" }}
        >
          {link.title}
        </ArrowLink> */}
      </Stack>
    </>
  );
}

export default Features;
