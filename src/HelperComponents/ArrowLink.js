import React from "react";
import { Button, Link } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ArrowLink({ flip, sx, children, ...rest }) {
  return (
    <Link
      className={"flexRow"}
      disableRipple
      color='fontColor.p'
      {...rest} // Spread the rest of the props here
      sx={{
        gap: 2,
        justifyContent: "space-between",
        textDecoration: "none",
        paddingBottom: ".25rem",

        // alignSelf: "flex-end",
        width: "fit-content",
        transition: "all .5s ease",
        position: "relative",
        zIndex: 1,
        borderBottom: "1px solid",

        "&:before": {
          content: "''",
          position: "absolute",
          left: "-.5rem",
          bottom: 0,
          height: "50%",
          zIndex: -1,
          width: 0,
          backgroundColor: "secondary.main",
          opacity: 0,
          transition: "inherit",
        },

        "&:hover": {
          // transform: "translateX(5px)",
          backgroundColor: "transparent",
          borderColor: "transparent",
          "&:before": {
            width: "calc(100% + .5rem)",
            opacity: 0.5,
          },
        },

        ...sx,
      }}
    >
      {children}

      <ArrowRightAltIcon
        color='inherit'
        sx={{ order: flip && -1, transform: flip && "rotate(180deg)" }}
      />
    </Link>
  );
}

export default ArrowLink;
