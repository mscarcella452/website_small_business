// import React from "react";
import { Box } from "@mui/material";

function StyledHamburgerMenuIcon({
  transitionState,
  color = "#000",
  sx,
  ...rest
}) {
  return (
    <Box
      className='flexColumn'
      {...rest}
      sx={{
        width: 1,
        height: 1,
        alignItems: "flex-end",
        justifyContent: transitionState ? "center" : "space-between",
        position: "relative",
        transitionDuration: ".75s",
        transitionTimingFunction: transitionState ? "eas-in" : "ease-out",

        height: transitionState ? 0.5 : 1,
        // border: 1,
        "& > *": {
          transition: "inherit",
          height: "2px",
          backgroundColor: color,
          position: transitionState ? "absolute" : "relative",
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
          width: transitionState ? 1 : 0.5,
          transform: transitionState && "rotate(45deg)",
          transitionProperty: "width, transform, background-color",
        }}
      />
      <Box
        sx={{
          width: transitionState ? 1 : 0.75,
          opacity: transitionState ? 0 : 1,
          transform: transitionState && "rotate(45deg)",
          transitionProperty: "width, opacity, transform, background-color",
        }}
      />
      <Box
        sx={{
          width: 1,
          transform: transitionState && "rotate(-45deg)",
          transitionProperty: "transform, background-color",
        }}
      />
    </Box>
  );
}

export default StyledHamburgerMenuIcon;
