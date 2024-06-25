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

function useDrawer(initialValue = false) {
  const [open, setOpen] = useState(initialValue);
  const toggleOpen = () => setOpen(prev => !prev);
  return [open, setOpen, toggleOpen];
}

function Navbar() {
  const theme = useTheme();
  const screenSizeThreshold = useMediaQuery(theme.custom.screenSizeThreshold);

  // const [menu, setMenu] = useState({ type: "", open: false });
  // const navMenuOpen = menu.type === "navMenu" && menu.open;
  // const infoMenuOpen = menu.type === "infoMenu" && menu.open;
  // const handleCloseMenu = () =>
  //   setMenu(prev => ({ type: prev.type, open: false }));
  // const handleOpenMenu = type => setMenu({ type, open: true });

  // const [menuOpen, setMenuOpen] = useState(false);
  // const [menuType, setMenuType] = useState("");

  // const navMenuOpen = menuType === "navMenu" && menuOpen;
  // const infoMenuOpen = menuType === "infoMenu" && menuOpen;

  // const handleCloseMenu = () => setMenuOpen(false);
  // const handleOpenMenu = type => {
  //   setMenuOpen(true);
  //   setMenuType(type);
  // };
  const [navMenu, setNavMenu, toggleNavMenu] = useDrawer(false);
  const [infoMenu, setInfoMenu, toggleInfoMenu] = useDrawer(false);

  const menuOpen = navMenu || infoMenu;

  const handleToggleMenu = menuType => {
    // Safety check to ensure menuType is valid
    const validMenuTypes = ["navMenu", "infoMenu"];
    if (!validMenuTypes.includes(menuType)) {
      return;
    }
    const menuOption = {
      navMenu: {
        isOpen: infoMenu,
        closeState: setInfoMenu,
        toggleState: setNavMenu,
      },
      infoMenu: {
        isOpen: navMenu,
        closeState: setNavMenu,
        toggleState: setInfoMenu,
      },
    };
    const menu = menuOption[menuType];

    if (menu.isOpen) {
      menu.closeState(false);
      setTimeout(() => menu.toggleState(prev => !prev), 500);
    } else menu.toggleState(prev => !prev);
  };

  // const handleClickMenu = (menu, status) => {
  //   if (menu === "navMenu") setNavMenu(status);
  //   if (menu === "infoMenu") setInfoMenu(status);
  // };

  // useEffect(() => {
  //   if (!screenSizeThreshold && infoMenuOpen) {
  //     handleCloseMenu();
  //   }
  // }, [screenSizeThreshold, infoMenuOpen]);

  return (
    <>
      <Container
        maxWidth={false}
        variant='navbar'
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          boxShadow: menuOpen && 1,
          backgroundColor: menuOpen
            ? "background.secondary"
            : "background.primary",
          // "&:before": {
          //   content: "''",
          //   position: "absolute",
          //   height: 1.5,
          //   width: menuOpen ? 1 : 0,
          //   bottom: 0,
          //   backgroundColor: "lightgrey",
          //   transition: "all .5s ease",
          // },
        }}
      >
        <IconButton
          onClick={() => handleToggleMenu("navMenu")}
          // disabled={infoMenuOpen}
          disableRipple={!navMenu}
        >
          <StyledHamburgerMenuIcon
            transition={navMenu}
            color='fontColor.p'
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
            // disabled={navMenu}
            onClick={() => handleToggleMenu("infoMenu")}
            transformState={infoMenu}
            sx={{
              justifySelf: "flex-end",
              textDecoration: infoMenu && "underline",
              color: "fontColor.p",
            }}
          >
            Visit Us
          </DropdownButton>
        )}
      </Container>

      {screenSizeThreshold && (
        <NavMenuDrawer
          open={infoMenu}
          handleClose={toggleInfoMenu}
          anchor={"right"}
          paperProps={{
            width: { xxs: 1, mobile: "fit-content" },
          }}
        >
          <CompanyInfo />
        </NavMenuDrawer>
      )}

      <NavMenuDrawer
        open={navMenu}
        handleClose={toggleNavMenu}
        anchor='left'
        // paperWidth={screenSizeThreshold ? "fit-content" : 1}
        paperProps={{
          width: { xxs: 1, mobile: "fit-content" },
        }}
      >
        <HamburgerMenu>
          {/* <Button
            className='flexRow'
            // disabled={navMenu}
            // disableRipple
            onClick={() => handleToggleMenu("infoMenu")}
            sx={{ gap: 1, color: "fontColor.p" }}
          >
            <QueryBuilderIcon sx={{ color: "inherit" }} />

            <Typography
              // variant='h6'
              sx={{ textTransform: "none", typography: "actionFont" }}
            >
              Shop Hours
            </Typography>
          </Button> */}
          {/* <Box className='flexColumn' gap={2} width={1} sx={{ maxWidth: "xs" }}>
            <QueryBuilderIcon
              sx={{ color: "fontColor.p", alignSelf: "flex-start" }}
            />
            <Box
              className='flexRow'
              gap={1}
              width={1}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant='p' typography={"actionFont"}>
                sun - mon:
              </Typography>
              <ArrowLink variant='p' typography={"secondaryFont"}>
                *appt. only
              </ArrowLink>
            </Box>
            <Box
              className='flexRow'
              gap={1}
              width={1}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant='p' typography={"actionFont"}>
                tues:
              </Typography>
              <Typography variant='p' typography={"actionFont"}>
                closed
              </Typography>
            </Box>
            <Box
              className='flexRow'
              gap={1}
              width={1}
              sx={{ justifyContent: "space-between" }}
            >
              <Typography variant='p' typography={"actionFont"}>
                wed - sat:
              </Typography>
              <Typography variant='p' typography={"actionFont"}>
                9am - 6pm
              </Typography>
            </Box>
          </Box> */}
        </HamburgerMenu>
      </NavMenuDrawer>

      {/* 
      <NavMenuDrawer open={menuOpen} handleClose={handleCloseMenu}>
        {menu.type === "infoMenu" && screenSizeThreshold && (
          <CompanyInfo handleCloseMenu={handleCloseMenu} />
        )}

        {menu.type === "navMenu" && (
          <HamburgerMenu handleCloseMenu={handleCloseMenu} />
        )}
      </NavMenuDrawer> */}
    </>
  );
}

export default Navbar;
