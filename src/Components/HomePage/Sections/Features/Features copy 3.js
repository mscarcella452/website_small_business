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

import { featuresData } from "./data";

function Features() {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up("md"));
  const { heading, content, image } = featuresData;
  const { heading: hv, subHeading: shv } = theme.typography.variants;

  return (
    <>
      {/* <Typography
        variant={"h2"}
        typography={"heading.title"}
        sx={{ width: 1, textAlign: "right", textDecoration: "overline" }}
      >
        what is bespoke tailoring?
      </Typography> */}

      <Stack direction='row' sx={{ alignItems: "center", alignSelf: "center" }}>
        <Typography
          variant={"h1"}
          typography={"displayFont"}
          sx={{
            width: 0.5,
            // fontWeight: "300",
            textAlign: "left",
          }}
        >
          what is bespoke?
          {/* what is bespoke tailoring? */}
        </Typography>
        <Typography
          variant={"p"}
          typography={"subHeading.p"}
          sx={{ width: 0.5 }}
        >
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
      </Stack>
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
            component={"img"}
            src={image.src}
            alt={image.alt}
          />
        )}
      </Stack>
    </>
  );
}

export default Features;
