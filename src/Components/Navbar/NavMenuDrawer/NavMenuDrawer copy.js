import { cloneElement } from "react";
import { Box, Button, Drawer, useTheme } from "@mui/material";
import Navbar from "../../../Navbar copy 5";
import useResponsiveThemeValue from "../../../../../Hooks/useResponsiveThemeValue";

export default function NavMenuDrawe({
  open,
  handleClose,
  anchor = "top",
  paperProps,
  children,
  ...rest
}) {
  const theme = useTheme();
  const navbarHeight = useResponsiveThemeValue("navbarHeight");
  const paperPadding = useResponsiveThemeValue("sectionPadding");
  const navbar_zIndex = theme.custom.navbar_zIndex;

  // const [open, setOpen] = React.useState(false);

  return (
    <>
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
        variant='temporary'
        // elevation={0}
        sx={{ zIndex: navbar_zIndex - 1 }}
        ModalProps={{
          keepMounted: false,
        }}
        PaperProps={{
          sx: {
            top: navbarHeight,

            height: { xxs: 1, sm: "fit-content" },
            // maxHeight: `calc(100vh  - ${navbarHeight})`, // Ensure the drawer height is correct
            height: `calc(100vh  - ${navbarHeight})`, // Ensure the drawer height is correct
            backgroundColor: "background.primary",
            px: 2,
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
    </>
  );
}
