import React from "react";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ArrowButton({ flip, sx, children, ...rest }) {
  return (
    <Button
      variant='secondary'
      className={"flexRow"}
      {...rest} // Spread the rest of the props here
      sx={{ gap: "5px", justifyContent: "flex-start", ...sx }}
      disableRipple
    >
      {children}

      <ArrowRightAltIcon
        color='inherit'
        sx={{ order: flip && -1, transform: flip && "rotate(180deg)" }}
      />
    </Button>
  );
}

export default ArrowButton;
