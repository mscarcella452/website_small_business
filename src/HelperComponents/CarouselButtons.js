import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";

function CarouselButtons({ handlePrevSlide, handleNextSlide, ...rest }) {
  return (
    <Box className='flexRow' {...rest}>
      <IconButton onClick={handlePrevSlide} sx={{ transform: "scale(-1)" }}>
        <ArrowForwardIosIcon />
      </IconButton>
      <IconButton onClick={handleNextSlide}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default CarouselButtons;
