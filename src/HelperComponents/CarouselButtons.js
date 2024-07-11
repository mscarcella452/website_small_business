import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Stack, IconButton } from "@mui/material";

function CarouselButtons({ handlePrevSlide, handleNextSlide, ...rest }) {
  return (
    <Stack direction='row' {...rest}>
      <IconButton onClick={handlePrevSlide} sx={{ transform: "scale(-1)" }}>
        <ArrowForwardIosIcon />
      </IconButton>
      <IconButton onClick={handleNextSlide}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  );
}

export default CarouselButtons;
