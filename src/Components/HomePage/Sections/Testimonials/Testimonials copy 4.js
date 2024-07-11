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

  const isAtLeastSm = useMediaQuery(theme.breakpoints.up("sm"));

  const { ref, previous, next, reset } = useCarousel();

  const handlePrev = () => previous();

  const handleNext = () => next();

  useEffect(() => {
    const debounce = (func, delay) => {
      let timeoutId;
      return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func(...args);
        }, delay);
      };
    };

    const handleResetCarousel = debounce(() => reset(), 500);

    window.addEventListener("resize", handleResetCarousel);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResetCarousel);
    };
  }, []); // Empty dependency array ensures effect runs only on mount and unmount

  return (
    <>
      <Stack gap={{ xxs: theme.spacing(5), md: theme.spacing(10) }}>
        {/* {!isAtLeastSm && (
          <CarouselButtons
            handlePrev={handlePrev}
            handleNext={handleNext}
            alignSelf='end'
          />
        )} */}
        <Stack
          direction={{ xxs: "column", md: "row" }}
          gap={{ xxs: theme.spacing(5), sm: theme.spacing(3) }}
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
            {/* what is bespoke tailoring? */}
          </Typography>
          <CarouselButtons
            handlePrev={handlePrev}
            handleNext={handleNext}
            alignSelf={{ xxs: "end", md: "center" }}
            sx={{ order: { xxs: -1, sm: 1 } }}
          />
          {/* {isAtLeastSm && (
            <CarouselButtons handlePrev={handlePrev} handleNext={handleNext} />
          )} */}
        </Stack>

        <Stack
          direction='row'
          sx={{
            width: 1,
            height: 1,
            overflow: "hidden",

            position: "relative",
            maxWidth: "lg",
            alignSelf: "center",
          }}
          ref={ref}
        >
          {reviews.map((review, index) => (
            <Box
              key={index}
              sx={{
                flex: { xxs: "0 0 100%", md: "0 0 50%" },
                height: 1,
                width: 1,
              }}
            >
              <Stack
                sx={{
                  maxWidth: { xxs: "sm", md: "xs", lg: "mobile" },
                  margin: "auto",
                  gap: 2,
                  px: 1,
                }}
              >
                {/* <Typography variant='h4' color='primary.main'>
                  {quoteIcon}
                </Typography> */}
                {/* <Divider
                  sx={{ width: 0.5, backgroundColor: "secondary.main" }}
                /> */}
                <Typography
                  variant={"h5"}
                  typography='displayFont'
                  fontWeight={500}
                  sx={{ pl: 2, borderLeft: 1.5 }}
                >
                  {review.name}
                </Typography>
                <Typography
                  variant={theme.typography.variants.subHeading.p}
                  typography='heading.p'
                  fontStyle='italic'
                  // fontWeight={350}
                >
                  {review.review}
                </Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default Testimonials;

const CarouselButtons = ({ handlePrev, handleNext, ...rest }) => {
  return (
    <Stack direction='row' gap={2} {...rest}>
      <IconButton onClick={handlePrev} color='inherit'>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton onClick={handleNext} color='inherit'>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  );
};
