// React Imports
import { useEffect, useRef } from "react";
// Material-UI Imports
import {
  Drawer,
  useTheme,
  Tab,
  Tabs,
  Stack,
  useMediaQuery,
  Typography,
  Toolbar,
} from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";

// Custom Hooks
import { useCarousel } from "use-carousel-hook";
import { debounce } from "lodash";
// Styles

// Reusable Components

import { NavLinks, CompanyInfo } from "../ReusableComponents";

const navigationIcons = [FormatListBulletedIcon, AccessTimeIcon, PlaceIcon];

function NavMenu({ open, setOpen }) {
  const theme = useTheme();
  const { ref, current, setCurrent, reset } = useCarousel();

  const isAtleastMd = useMediaQuery(theme.breakpoints.up("md"));
  const isPhoneLandscape = useMediaQuery(theme.mediaQueries.isPhoneLandscape);

  const handleChangeIndex = (event, newIndex) => setCurrent(newIndex);

  const handleCloseDrawer = () => setOpen(false);

  const resetRef = useRef(reset);

  useEffect(() => {
    if (open) {
      resetRef.current();
    }
  }, [open]);

  useEffect(() => {
    // Debounced resize handler to reset on screen size changes
    const handleResize = debounce(() => resetRef.current(), 300);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      handleResize.cancel(); // Clean up any pending debounced calls
    };
  }, [open]);

  const companyInfoProps = {
    direction: isPhoneLandscape ? "row" : "column",
    variant: "h6",
    textAlign: "center",
  };

  const carouselData = [
    <NavLinks
      onClick={handleCloseDrawer}
      variant='h4'
      color='primary.light'
      activeColor={theme.palette.dark.primary}
    />,
    <CompanyInfo {...companyInfoProps} type='hours' />,
    <CompanyInfo {...companyInfoProps} type='contact' />,
  ];

  return (
    <Drawer
      open={open}
      onClick={handleCloseDrawer}
      sx={{ zIndex: { xxs: 0, md: theme.navbar.zIndex + 1 } }}
      anchor={isAtleastMd ? "left" : "top"}
      transitionDuration={{ enter: 750, exit: 750 }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          width: { xxs: "100vw", md: 550 },
        },
      }}
    >
      <Stack
        onClick={e => e.stopPropagation()}
        onKeyDown={e => e.stopPropagation()}
        role='presentation'
        elevation={5}
        variant='navMenu'
        sx={{
          "> *": {
            transition: "opacity .75s ease",
            opacity: open ? 1 : 0,
          },
        }}
      >
        <Toolbar sx={{ display: { xxs: "none", md: "flex" } }}>
          <Typography
            typography='navbar.companyname'
            textAlign='center'
            width={1}
          >
            Thomas Mitchell Clothiers
          </Typography>
        </Toolbar>
        <Stack ref={ref} variant='carousel_container'>
          {carouselData.map((content, index) => (
            <Stack key={index} variant='carousel_content'>
              {content}
            </Stack>
          ))}
        </Stack>

        <Tabs
          value={current}
          onChange={handleChangeIndex}
          variant='fullWidth'
          TabIndicatorProps={{ style: { top: 0 } }}
        >
          {navigationIcons.map((Icon, index) => (
            <Tab key={index} disabled={!open} label={<Icon />} sx={{ p: 2 }} />
          ))}
        </Tabs>
      </Stack>
    </Drawer>
  );
}

export default NavMenu;
