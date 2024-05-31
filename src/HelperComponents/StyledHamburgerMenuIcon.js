// import React from "react";
import { Box } from "@mui/material";

function StyledHamburgerMenuIcon({ transition, color = "#000", sx }) {
  return (
    <Box
      className='flexColumn'
      sx={{
        width: 1,
        height: 1,
        alignItems: "flex-end",
        justifyContent: transition ? "center" : "space-between",
        position: "relative",
        transition: "all .75s ease",
        height: transition ? 0.5 : 1,
        // border: 1,
        "& > *": {
          transition: "inherit",
          height: "1.5px",
          backgroundColor: color,
          position: transition ? "absolute" : "relative",
          right: 0,
          borderRadius: "1.5px",
        },
        "&:hover > *": {
          width: 1,
        },
        ...sx,
      }}
    >
      <Box
        sx={{
          width: transition ? 1 : 0.5,
          transform: transition && "rotate(45deg)",
        }}
      />
      <Box
        sx={{
          width: transition ? 1 : 0.75,
          opacity: transition ? 0 : 1,
          transform: transition && "rotate(45deg)",
        }}
      />
      <Box
        sx={{
          width: 1,
          transform: transition && "rotate(-45deg)",
        }}
      />
    </Box>
  );
}

export default StyledHamburgerMenuIcon;
