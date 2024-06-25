import { cloneElement, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  useTheme,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";

import useResponsiveThemeValue from "../../../Hooks/useResponsiveThemeValue";
import StyledHamburgerMenuIcon from "../../../HelperComponents/StyledHamburgerMenuIcon";
import ChevronRight from "@mui/icons-material/ChevronRight";

export default function NavMenuDrawer({
  open,
  handleClose,
  anchor = "top",
  paperProps,
  variant = "temporary",
  Backdrop,
  children,
  ...rest
}) {
  const theme = useTheme();
  const navbar_zIndex = theme.navbar.zIndex;

  useEffect(() => {
    if (variant === "persistent") {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }
    // if (open) {
    //   document.body.style.overflow = "hidden";
    // } else {
    //   document.body.style.overflow = "unset";
    // }
    // return () => {
    //   document.body.style.overflow = "unset";
    // };
  }, [open, variant]);

  // const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ zIndex: 1 }}>
      {variant === "persistent" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: navbar_zIndex - 1,
            opacity: 0,
            visibility: "hidden",
            transition: "opacity 0.3s, visibility 0.3s",
            opacity: open ? 1 : 0,
            visibility: open ? "visible" : "hidden",
          }}
          onClick={handleClose}
        />
      )}
      {/* <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 300,
          height: "100vh",
          background: "red",
          zIndex: -5,
        }}
      ></Box> */}
      {/* {open && (
        <Button
          disableRipple
          onClick={handleClose}
          sx={{
            position: "fixed",
            top: 0,
            width: 1,
            height: navbarHeight,
            zIndex: navbar_zIndex + 1,
          }}
        />
      )} */}

      <Drawer
        open={open}
        onClose={handleClose}
        anchor={anchor}
        variant={variant}
        // variant='persistent'
        // elevation={0}
        sx={{ zIndex: navbar_zIndex + 1 }}
        ModalProps={{
          keepMounted: false,
          // sx: { zIndex: 100 },
          // sx: { zIndex: navbar_zIndex - 1 },
        }}
        PaperProps={{
          sx: {
            // top: navbarHeight,
            // pt: navbarHeight,

            // height: { xxs: 1, sm: "fit-content" },
            // maxHeight: `calc(100vh  - ${navbarHeight})`, // Ensure the drawer height is correct
            // height: `calc(100vh  - ${navbarHeight})`, // Ensure the drawer height is correct
            // height: `calc(100vh  - ${navbarHeight})`,
            // height: "100vh",
            px: 1,

            backgroundColor: "background.secondary",

            ...paperProps,
          },
        }}
        transitionDuration={500}
      >
        {cloneElement(children, {
          onClick: e => {
            e.stopPropagation();
            if (children.props.onClick) {
              children.props.onClick(e);
            }
          },
          onKeyDown: e => {
            e.stopPropagation();
            if (children.props.onKeyDown) {
              children.props.onKeyDown(e);
            }
          },
        })}
      </Drawer>
    </Box>
  );
}
