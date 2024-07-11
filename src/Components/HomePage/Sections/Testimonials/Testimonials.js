import { useState, useCallback, useReducer, useEffect } from "react";
import {
  Paper,
  Typography,
  Box,
  Container,
  useMediaQuery,
  Stack,
  Button,
  useTheme,
  IconButton,
  Divider,
} from "@mui/material";
import { useSectionSx } from "../../../../Styles/useSectionSx";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useCarousel } from "use-carousel-hook";

import { md } from "../../../../Theme/mediaQueries.js";
import { testimonialData } from "./data.js";

function Testimonials() {
  const theme = useTheme();

  const quoteIcon = <i class='fa-solid fa-quote-right'></i>;

  const { subtitle, title, description, backgroundImage, reviews } =
    testimonialData;

  return (
    <>
      <Stack gap={theme.spacing(12)}>
        {/* <Stack
          variant='heading'
          // direction={{ xxs: "column", md: "row" }}
          // gap={{ xxs: theme.spacing(5), sm: theme.spacing(3) }}
        >
          <Typography
            variant={"h2"}
            typography={"displayFont"}
            sx={{
              // fontWeight: "300",
              textAlign: "left",
              width: 1,
            }}
          >
            what our customers say
          </Typography>
          <Typography variant={"p"} typography={"heading.p"}>
            We value our clients and strive to provide the best service
            possible. Here are some of their thoughts about working with us
          </Typography>
        </Stack> */}
        <Typography variant='h4' color='secondary.main' alignSelf={"center"}>
          {quoteIcon}
        </Typography>
        <Typography
          variant={"h2"}
          typography={"displayFont"}
          // color='primary.light'
          sx={{
            // fontWeight: "300",
            textAlign: "center",
            width: 1,
          }}
        >
          what our customers say
        </Typography>

        <Box
          direction='row'
          sx={{
            width: 1,
            height: 1,
            // maxWidth: "lg",
            alignSelf: "center",
            display: "grid",
            gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
            gap: "inherit",
          }}
        >
          {reviews.map((review, index) => (
            <Stack
              key={index}
              sx={{
                maxWidth: { xxs: "sm", md: "mobile" },
                margin: "auto",
                gap: 2,
                // border: 1,
                height: 1,
              }}
            >
              {/* <Typography variant='h4' color='secondary.main'>
                {quoteIcon}
              </Typography> */}
              <Typography
                variant={"h5"}
                typography='heroSection.heading'
                fontWeight={500}
                // sx={{ pl: 2, borderLeft: 1.5 }}
                // color='primary.main'
              >
                {review.name}
              </Typography>
              <Typography
                variant={theme.typography.variants.subHeading.p}
                typography='heading.p'
                fontStyle='italic'
                // color='primary.main'
                // fontWeight={400}
              >
                {review.review}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Stack>
    </>
  );
}

export default Testimonials;
