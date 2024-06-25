import { useState, useEffect, cloneElement } from "react";
import {
  Container,
  useMediaQuery,
  IconButton,
  Box,
  Button,
  Link,
  useTheme,
  ClickAwayListener,
  Tooltip,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import ArrowLink from "../../HelperComponents/ArrowLink";
import { md, mobile, mobilePortrait, sm } from "../../Theme/mediaQueries";
import StyledHamburgerMenuIcon from "../../HelperComponents/StyledHamburgerMenuIcon";
import { Link as RouterLink } from "react-router-dom";
import NavMenuDrawer from "./NavMenuDrawer/NavMenuDrawer";
import CompanyInfo from "./Components/CompanyInfo";
import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu";
import DropdownButton from "../../HelperComponents/DropdownButton";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import CompanyAddress from "../../HelperComponents/CompanyAddress";
import useResponsiveThemeValue from "../../Hooks/useResponsiveThemeValue";

function useDrawer(initialValue = false) {
  const [open, setOpen] = useState(initialValue);
  const toggleOpen = () => setOpen(prev => !prev);
  return [open, setOpen, toggleOpen];
}

function Navbar() {
  const theme = useTheme();
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  const navbarHeight = useResponsiveThemeValue("navbar.height");

  const [navMenu, setNavMenu, toggleNavMenu] = useDrawer(false);
  const [infoMenu, setInfoMenu, toggleInfoMenu] = useDrawer(false);

  const menuOpen = navMenu || infoMenu;

  const [transition, setTransition] = useState(false);

  const handleToggleNavMenu = () => {
    if (!navMenu) {
      setNavMenu(true);
      setTimeout(() => setTransition(true), 100);
    } else {
      setTransition(false);
      setTimeout(() => setNavMenu(false), 1000);
    }
  };

  useEffect(() => {
    if (!screenSizeThreshold && infoMenu) {
      setInfoMenu(false);
      setNavMenu(true);
    }
  }, [infoMenu, screenSizeThreshold]);

  // const handleToggleMenu = menuType => {
  //   // Safety check to ensure menuType is valid
  //   const validMenuTypes = ["navMenu", "infoMenu"];
  //   if (!validMenuTypes.includes(menuType)) {
  //     return;
  //   }
  //   const menuOption = {
  //     navMenu: {
  //       isOpen: infoMenu,
  //       closeState: setInfoMenu,
  //       toggleState: setNavMenu,
  //     },
  //     infoMenu: {
  //       isOpen: navMenu,
  //       closeState: setNavMenu,
  //       toggleState: setInfoMenu,
  //     },
  //   };
  //   const menu = menuOption[menuType];

  //   if (menu.isOpen) {
  //     menu.closeState(false);
  //     setTimeout(() => menu.toggleState(prev => !prev), 500);
  //   } else menu.toggleState(prev => !prev);
  // };

  return (
    <>
      {/* <Box
        className='flexRow'
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: theme.navbar.zIndex + 2,
          height: theme.navbar.height,
          padding: theme.padding.navbar,
        }}
      >
        <IconButton
          onClick={toggleNavMenu}
          disabled={infoMenu}
          disableRipple={!navMenu}
        >
          <StyledHamburgerMenuIcon
            transition={navMenu}
            color={navMenu ? "primary.main" : "fontColor.p"}
            // sx={{ transform: "scale(-1)" }}
          />
        </IconButton>
      </Box> */}
      <Container
        maxWidth={false}
        variant='navbar'
        sx={{ justifyContent: { xxs: "flex-start", mobile: "center" } }}
      >
        <Link
          component={RouterLink}
          to='/'
          variant={"h5"}
          typography='secondaryFont'
          sx={{ fontWeight: 500 }}
        >
          {/* {notMobile ? "Thomas Mitchell Clothiers " : "TMC"} */}
          Thomas Mitchell Clothiers
        </Link>
      </Container>
      <NavMenuDrawer open={navMenu} transition={transition} />
    </>
  );
}

export default Navbar;
