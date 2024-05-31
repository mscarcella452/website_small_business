import React from "react";
import { Button, Link } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ArrowLink({ flip, sx, children, ...rest }) {
  return (
    <Link
      variant='secondary'
      className={"flexRow"}
      {...rest} // Spread the rest of the props here
      sx={{
        gap: "5px",
        justifyContent: "space-between",
        ...sx,
      }}
      disableRipple
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
