import React from "react";
import { Button, Link, useTheme } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ArrowLink({ flip, sx, children, ...rest }) {
  const theme = useTheme();
  return (
    <Link
      className={"flexRow"}
      disableRipple
      // color='fontColor.p'
      sx={{
        gap: 2,
        justifyContent: "space-between",
        textDecoration: "none",
        paddingBottom: ".25rem",
        // color: "fontColor.p",

        // alignSelf: "flex-end",
        width: "fit-content",
        transition: "transform 1s ease",
        position: "relative",
        zIndex: 1,
        borderBottom: "1px solid",

        // "&:before": {
        //   content: "''",
        //   position: "absolute",
        //   left: "-.5rem",
        //   bottom: 0,
        //   height: "100%",
        //   zIndex: -1,
        //   width: 0,
        //   backgroundColor: "fontColor.p",
        //   opacity: 0,
        //   transition: "inherit",
        // },
        "& .icon": {
          transition: "transform 1s ease",
        },

        "&:hover": {
          // transform: "translateX(5px)",
          backgroundColor: "transparent",
          // borderColor: "transparent",
          textDecoration: "none",

          // "&:before": {
          //   width: "calc(100% + .5rem)",
          //   opacity: 0.5,
          // },
          "& .icon": {
            transform: "translateX(-8px)",
          },

          transform: "translateX(10px)",
        },

        ...sx,
      }}
      {...rest} // Spread the rest of the props here
    >
      {children}

      <ArrowRightAltIcon
        className='icon'
        color='inherit'
        sx={{ order: flip && -1, transform: flip && "rotate(180deg)" }}
      />
    </Link>
  );
}

export default ArrowLink;
