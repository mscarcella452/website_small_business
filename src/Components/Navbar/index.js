// React Imports
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
// Material-UI Imports
import { Link, useTheme, useMediaQuery, AppBar, Toolbar } from "@mui/material";
// Local Imports
import NavMenu from "../NavMenu";
import { companyData, routes } from "../../data";
import { useCurrentRouteKey } from "../../Hooks";
import { AnimatedHamburgerIconButton } from "../../HelperComponents";

function Navbar() {
  const theme = useTheme();
  const currentRoute = useCurrentRouteKey(routes);

  const isAtLeastXs = useMediaQuery(theme.breakpoints.up("xs"));
  const isAtLeastMobile = useMediaQuery(theme.breakpoints.up("mobile"));

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleNavMenu = () => setMenuOpen(prev => !prev);
  const handleDynamicOpenMenu = () => (menuOpen ? null : setMenuOpen(true));

  const dynamicCursor = menuOpen ? "default" : "pointer";
  const dynamicUnderline = menuOpen ? "none" : "hover";
  const dynamicPath = menuOpen ? null : "/";
  const dynamicCompanyName = isAtLeastMobile
    ? companyData.name
    : companyData.abrievName;

  const companyNameProps = {
    component: RouterLink,
    underline: dynamicUnderline,
    to: dynamicPath,
    variant: "h6",
    typography: "navbar.companyname",
    sx: { cursor: dynamicCursor },
    color: "primary.main",
  };

  const currentRouteProps = {
    underline: dynamicUnderline,
    component: "button",
    onClick: handleDynamicOpenMenu,
    variant: "h6",
    typography: "subtitle",
    sx: { cursor: dynamicCursor, marginLeft: "auto" },
  };

  return (
    <>
      <AppBar variant='navbar'>
        <Toolbar
          sx={{
            height: 1,
            gap: theme.spacing(3),
            justifyContent: "space-between",
          }}
        >
          <Link {...companyNameProps}>{dynamicCompanyName}</Link>

          {isAtLeastXs && <Link {...currentRouteProps}>{currentRoute}</Link>}
          <AnimatedHamburgerIconButton
            onClick={toggleNavMenu}
            transitionState={menuOpen}
            disableRipple={!menuOpen}
          />
        </Toolbar>
        <NavMenu open={menuOpen} setOpen={setMenuOpen} />
      </AppBar>
    </>
  );
}

export default Navbar;
