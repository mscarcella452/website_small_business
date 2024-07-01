import React from "react";
import { Box, IconButton } from "@mui/material";
import styles from "./styles.module.css"; // Ensure the correct path

function AnimatedHamburgerIconButton({
  transitionState,
  transitionProps,
  sx,
  ...rest
}) {
  const props = {
    iconButton: {
      backgroundColor: { true: "secondary.main", false: "transparent" },
      color: { true: "fontColor.light", false: "secondary.main" },
    },
    transform: {
      translate: { 0: "translateY(-5px)", 1: "translateY(5px)" },
      rotate: { 0: "rotate(135deg)", 1: "rotate(-135deg)" },
    },

    transition: {
      transitionPropery: "transform, rotate",
      transitionDuration: "0.75s",
      transitionTimingFunction: "ease-in",
      ...transitionProps,
    },
  };
  return (
    <IconButton
      className={styles.iconButton}
      sx={{
        "&:hover": {
          backgroundColor: props.iconButton.backgroundColor[transitionState],
        },
        color: props.iconButton.color[transitionState],
        ...sx,
      }}
      {...rest}
    >
      <Box className={styles.icon_container}>
        {["0", "1"].map(index => (
          <Box
            className={styles.lines}
            sx={{
              transform: transitionState
                ? `translateY(0) ${props.transform.rotate[index]}`
                : `${props.transform.translate[index]} rotate(0)`,
              ...props.transition,
            }}
          />
        ))}
      </Box>
    </IconButton>
  );
}

export default AnimatedHamburgerIconButton;
