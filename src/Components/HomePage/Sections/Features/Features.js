// import React from "react";
import {
  Typography,
  Box,
  useTheme,
  Stack,
  useMediaQuery,
  Container,
  Button,
} from "@mui/material";
import { ArrowLink } from "../../../../HelperComponents";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { featuresData } from "./data";

function Features() {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up("md"));
  const { heading, content, image } = featuresData;
  const { heading: hv, subHeading: shv } = theme.typography.variants;

  return (
    <>
      <Stack variant='heading'>
        <Typography
          variant={"h2"}
          typography={"displayFont"}
          sx={{
            // fontWeight: "300",
            textAlign: "left",
            color: "#fff",
          }}
        >
          what is bespoke?
          {/* what is bespoke tailoring? */}
        </Typography>
        <Typography
          variant={"p"}
          typography={"heading.p"}
          sx={{ color: "#fff" }}
        >
          The art of creating custom-fitted clothing from scratch, using precise
          measurements and client specifications. The process involves multiple
          fittings to ensure a perfect fit and unique style. This results in
          superior craftsmanship, high-quality fabrics, and meticulous attention
          to detail, producing one-of-a-kind garments tailored to the client's
          personal taste and physique.
        </Typography>
      </Stack>

      <Grid
        container
        columns={{ xxs: 1, md: 2 }}
        spacing={{
          xxs: theme.spacing(6),
          // sm: theme.spacing(6),
          md: theme.spacing(8),
          lg: theme.spacing(12),
        }}
        // sx={{ maxWidth: "lg", alignSelf: "center" }}
      >
        {content.map(({ title, description }, index) => (
          <Grid xxs={1}>
            <Stack
              key={index}
              sx={{
                gap: 2,
                margin: "auto",
                height: 1,
                minHeight: 200,
              }}
            >
              <Typography
                variant={"h4"}
                typography='heading.title'
                // sx={{ color: "#999999" }}
                sx={{ color: "primary.light" }}
              >
                {title}
              </Typography>
              <Typography
                variant={shv.p}
                typography='subHeading.p'
                sx={{ color: "primary.light" }}
              >
                {description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <ArrowLink
        variant={"h6"}
        typography='heading.link'
        alignSelf='start'
        sx={{ width: 1, maxWidth: "xs", color: "#fff" }}
      >
        View Our Services
      </ArrowLink>
    </>
  );
}

export default Features;

const galleryImages = [
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
];
