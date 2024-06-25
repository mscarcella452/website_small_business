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
      <Container
        maxWidth={false}
        variant='navbar'
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          backgroundColor: "background.primary",

          // boxShadow: navMenu && 1,
        }}
      >
        <IconButton
          onClick={toggleNavMenu}
          disabled={infoMenu}
          disableRipple={!navMenu}
        >
          <StyledHamburgerMenuIcon
            transition={navMenu}
            color={"fontColor.p"}
            sx={{ transform: "scale(-1)" }}
          />
        </IconButton>

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

        {screenSizeThreshold && (
          <DropdownButton
            disabled={navMenu}
            onClick={toggleInfoMenu}
            transformState={infoMenu}
            sx={{
              justifySelf: "flex-end",
              textDecoration: infoMenu && "underline",
              color: "fontColor.p",
              zIndex: 2,
            }}
          >
            Hours & Contact
          </DropdownButton>
        )}

        {screenSizeThreshold && (
          <NavMenuDrawer
            open={infoMenu}
            handleClose={toggleInfoMenu}
            anchor={"right"}
            variant={"persistent"}
            paperProps={{
              width: "fit-content",
              pt: navbarHeight,
            }}
          >
            <CompanyInfo />
          </NavMenuDrawer>
        )}

        <NavMenuDrawer
          open={navMenu}
          handleClose={toggleNavMenu}
          anchor='top'
          // anchor='left'
          // paperWidth={screenSizeThreshold ? "fit-content" : 1}
          paperProps={{
            // width: { xxs: 1, mobile: "fit-content" },
            // width: screenSizeThreshold ? "fit-content" : 1,
            width: 1,

            maxHeight: `calc(100vh - ${navbarHeight})`,

            // maxHeight: 750,
            top: navbarHeight,
            // pt: 0,
            backgroundColor: screenSizeThreshold
              ? "background.primary"
              : "background.secondary",
            // width: screenSizeThreshold ? "fit-content" : 1,
          }}
        >
          <HamburgerMenu />
        </NavMenuDrawer>
      </Container>
    </>
  );
}

export default Navbar;
