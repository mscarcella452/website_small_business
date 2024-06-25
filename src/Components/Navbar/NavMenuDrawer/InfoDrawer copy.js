import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Backdrop } from "@mui/material";

export default function InfoDrawer({
  open,
  setOpen,
  anchor = "left",
  PaperProps,
  ModalProps,
  children,
  ...rest
}) {
  // const [open, setOpen] = React.useState(false);

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };

  return (
    <Drawer
      open={open}
      onClose={toggleDrawer(false)}
      onClick={toggleDrawer(false)}
      anchor={anchor}
      variant='temporary'
      elevation={0}
      {...rest}
      ModalProps={{
        keepMounted: false,
        ...ModalProps,
      }}
      PaperProps={{
        sx: PaperProps,
      }}
      transitionDuration={{ enter: 500, exit: 500 }}
    >
      <Box
        sx={{ width: 1, height: 1 }}
        role='presentation'
        onClick={e => e.stopPropagation()} // Prevent click propagation to backdrop
        onKeyDown={e => e.stopPropagation()} // Prevent keydown propagation to backdrop
      >
        {children}
      </Box>
    </Drawer>
  );
}
