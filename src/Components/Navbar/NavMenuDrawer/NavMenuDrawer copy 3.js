import { cloneElement, useEffect, useState } from "react";
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

const backgroundImage =
  "https://www.martinbuilding.com/static/a7aa7395fe2fea29ccda39a334d4f272/239d6/New-DBA-Rendering-2024.webp";
const backgroundImage2 =
  "https://www.martinbuilding.com/static/8c606aeb9a54aad21902cefdde59e7a9/aefd6/contact-details-image%402x.webp";

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

  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => setTransition(true), 100);
    } else setTransition(false);

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        zIndex: navbar_zIndex + 1,
        position: "fixed",
        display: open ? "block" : "none",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          width: 1,
          display: "grid",
          gridTemplateColumns: "55vw 45vw",
          height: 1,
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 1,
            border: 1,

            background: "red",
            display: "grid",
            gridTemplateRows: "1fr 1fr",
            overflow: " hiden",
          }}
        >
          <Box
            sx={{
              width: transition ? "100%" : 0,
              overflow: "hidden",
              transition: "width 1s ease",
              backgroundColor: "blue",
              background: `url(${backgroundImage}) center center / cover no-repeat local`,

              pt: theme.navbar.height,
              // p: 2,
              position: "relative", // Ensure text stays within this box
            }}
          >
            <Typography
              variant='h2'
              typography={"actionFont"}
              sx={{
                width: "55vw",
                p: theme.padding.section,
                height: 1,
                whiteSpace: "pre-wrap", // Prevent wrapping of text
              }}
            >
              Thomas Mitchell Clothiers
            </Typography>
          </Box>
          <Box
            sx={{
              width: 1,

              border: 1,

              backgroundColor: "fontColor.p",

              display: "grid",
              gridTemplateColumns: "70% 50%",
            }}
          >
            <Box
              sx={{
                width: transition ? "100%" : 0,
                overflow: "hidden",
                transition: "width 1s ease",
                backgroundColor: "blue",
                background: `url(${backgroundImage2}) bottom right / cover no-repeat local`,

                // p: 2,
                position: "relative", // Ensure text stays within this box
                justifySelf: "flex-end",
              }}
            >
              <Typography
                variant='h2'
                typography={"actionFont"}
                sx={{
                  width: "70%",
                  border: 1,
                  p: theme.padding.section,
                  height: 1,
                  whiteSpace: "pre-wrap", // Prevent wrapping of text
                }}
              >
                Thomas Mitchell Clothiers
              </Typography>
            </Box>
            <Box
              sx={{
                hewidthght: 1,
                height: transition ? 1 : 0,
                border: 1,
                transition: "all 1s ease",
                backgroundColor: "fontColor.light",
                alignSelf: "flex-end",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: 1,
            height: transition ? 1 : 0,
            border: 1,
            transition: "all 1s ease",
            backgroundColor: "fontColor.p",
            alignSelf: "flex-end",
          }}
        ></Box>
      </Box>
      {/* {cloneElement(children, {
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
        })} */}
    </Box>
  );
}
