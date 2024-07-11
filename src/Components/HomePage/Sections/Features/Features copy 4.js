// import React from "react";
import {
  Typography,
  Box,
  useTheme,
  Stack,
  useMediaQuery,
  Container,
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
          gap: { xxs: theme.spacing(8), md: theme.spacing(4) },
          alignItems: "center",
        }}
      >
        <Typography
          variant={"h1"}
          typography={"displayFont"}
          sx={{
            // fontWeight: "300",
            textAlign: "left",
          }}
        >
          what is bespoke?
          {/* what is bespoke tailoring? */}
        </Typography>
        <Typography variant={"p"} typography={"subHeading.p"}>
          The art of creating custom-fitted clothing from scratch, using precise
          measurements and client specifications. The process involves multiple
          fittings to ensure a perfect fit and unique style. This results in
          superior craftsmanship, high-quality fabrics, and meticulous attention
          to detail, producing one-of-a-kind garments tailored to the client's
          personal taste and physique.
        </Typography>
        {/* {heading.text.map(({ variant, typography, text }) => (
          <Typography
            variant={hv[variant]}
            sx={{ width: 0.5 }}
            typography={typography}
          >
            {text}
          </Typography>
        ))} */}
        {/* <ArrowLink variant={hv.link} typography='heading.link'>
          {heading.link}
        </ArrowLink> */}
      </Box>
      {/* <Grid container spacing={theme.spacing(5)}>
        {galleryImages.map(image => (
          <Grid xxs={4}>
            <Box
              sx={{
                // height: 1,
                aspectRatio: 1 / 1.25,
                width: 1,
                objectFit: "cover",
                objectPosition: "center center",
              }}
              component={"img"}
              src={image}
            />
          </Grid>
        ))}
      </Grid> */}

      <Stack direction='row'>
        <Stack variant='content'>
          {content.map(({ title, description }, index) => (
            <Stack key={index} sx={{ gap: 1 }}>
              <Typography variant={shv.title} typography='subHeading.title'>
                {title}
              </Typography>
              <Typography variant={shv.p} typography='subHeading.p'>
                {description}
              </Typography>
            </Stack>
          ))}
        </Stack>

        {showImage && (
          <Box
            className='content_img'
            // component={"img"}
            // src={image.src}
            // alt={image.alt}
          />
        )}
      </Stack>
    </>
  );
}

export default Features;

const galleryImages = [
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
];
