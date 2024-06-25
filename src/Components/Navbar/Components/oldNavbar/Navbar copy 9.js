import { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  IconButton,
  Link,
} from "@mui/material";
import { md, mobile, sm } from "../../Theme/mediaQueries";
import MenuIcon from "@mui/icons-material/Menu";
import { useToggle } from "../../Hooks/CustomHooks";
import { fonts } from "../../Theme/ThemeContext";
import CompanyAddress from "../../HelperComponents/CompanyAddress";
import ArrowButton from "../../HelperComponents/ArrowButton";
import ArrowLink from "../../HelperComponents/ArrowLink";
import StyledHamburgerMenuIcon from "../../HelperComponents/StyledHamburgerMenuIcon";
import { Link as RouterLink } from "react-router-dom";
import InfoDrawer from "./InfoDrawer/InfoDrawer";
import CompanyInfo from "./Components/CompanyInfo";
import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu";

const logo = "https://cdn-icons-png.flaticon.com/128/10583/10583048.png";

const links = [
  { link: "About", to: "#About", variant: "navbar", component: RouterLink },
  {
    link: "Services",
    to: "/our-services",
    variant: "navbar",
    component: RouterLink,
  },
  {
    link: "Lookbook",
    to: "/lookbook",
    variant: "navbar",
    component: RouterLink,
  },
  { link: "Info", variant: "navbar", component: Button },
  {
    link: "Discover Your Fit",
    to: "/#footer",
    variant: "primary",
    component: RouterLink,
  },
  // { link: "Contact", to: "#Contact" },
];

const useFullScreenMenu = isMenuHidden => {
  const [menuOpen, setMenuOpen] = useState(isMenuHidden);

  useEffect(() => {
    if (isMenuHidden && menuOpen) {
      setMenuOpen(false);
    }

    // Disable scrolling when the menu is open
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    // Cleanup effect to reset overflow style on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuHidden, menuOpen]);

  return [menuOpen, setMenuOpen];
};

function Navbar() {
  const navbarHeight = 70;
  const [hideBackground, IntersectionTrigger] = useObserverNavbar(navbarHeight);
  const [loading, setLoading] = useState(true);
  const isMenuHidden = useMediaQuery(md);
  const mobilePortrait = !useMediaQuery(mobile);
  const [menuOpen, setMenuOpen] = useFullScreenMenu(isMenuHidden);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const loadBackground = () => setTimeout(() => setLoading(false), 1);
    loadBackground();
  }, []);

  const handleToggleMenu = () => setMenuOpen(prev => !prev);
  const handleToggeInfoMenu = () => setInfoOpen(prev => !prev);

  return (
    <>
      {IntersectionTrigger}

      <Box
        className='flexRow'
        sx={{
          height: navbarHeight,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          justifyContent: "space-between",
          padding: { xxs: ".5rem 1rem", sm: ".5rem 1.5rem" },
          backgroundColor: hideBackground
            ? "background.primary"
            : "background.secondary",

          fontFamily: fonts.secondary,
          padding: { xxs: ".5rem 1rem", sm: ".5rem 1.5rem" },
        }}
      >
        <InfoDrawer
          open={infoOpen}
          setOpen={setInfoOpen}
          anchor='right'
          PaperProps={{ width: "fit-content", height: 1 }}
        >
          <CompanyInfo handleCloseMenu={handleToggeInfoMenu} />
        </InfoDrawer>
        {!isMenuHidden && (
          <InfoDrawer
            open={menuOpen}
            setOpen={setMenuOpen}
            anchor='top'
            PaperProps={{
              width: 1,
              height: 1,
              mt: "70px",
            }}
            ModalProps={{
              BackdropProps: {
                sx: { top: "70px" },
                // sx: { background: "transparent" },
              },
              sx: {
                zIndex: 9,
              },
              // sx: { top: "70px", zIndex: 9 },
            }}
          >
            <HamburgerMenu handleCloseMenu={handleToggeInfoMenu} />
          </InfoDrawer>
        )}

        <Link
          component={RouterLink}
          to='/'
          variant='navbar'
          sx={{ zIndex: 2, flex: 1 }}
        >
          <Typography
            variant='h5'
            onClick={handleToggleMenu}
            sx={{ zIndex: 2, fontFamily: fonts.secondary }}
          >
            Thomas Mitchell Clothiers
          </Typography>
        </Link>

        {isMenuHidden && (
          <Box
            className='flexRow'
            sx={{
              justifyContent: "flex-end",

              gap: 4,
              zIndex: 2,
            }}
          >
            {links.map((link, index) => (
              <Link
                key={index}
                onClick={link.component === Button && handleToggeInfoMenu}
                component={link.component}
                variant={link.variant}
                to={link.to}
                sx={{ fontSize: index === links.length - 1 && 14 }}
              >
                {link.link}
              </Link>
            ))}
          </Box>
        )}

        {!isMenuHidden && (
          <IconButton
            onClick={handleToggleMenu}
            disableRipple
            disableFocusRipple
            sx={{
              zIndex: 2,
              position: "absolute",
              right: { xxs: "1rem", sm: "1.5rem" },
            }}
          >
            <StyledHamburgerMenuIcon transition={menuOpen} color={"#333"} />
          </IconButton>
        )}
      </Box>
    </>
  );
}

export default Navbar;

const useObserverNavbar = (navbarHeight = 70) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const triggerRef = useRef(null);

  useEffect(() => {
    const trigger = triggerRef.current;

    if (!trigger) {
      // Return if triggerRef is not initialized
      return;
    }

    const options = {
      root: null, // Use the viewport as the root
      threshold: 1.0, // Fully intersecting
    };

    const handleIntersect = entries => {
      entries.forEach(entry => {
        setIsIntersecting(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(trigger);

    return () => {
      observer.unobserve(trigger);
    };
  }, []);

  const IntersectionTrigger = (
    <Box
      ref={triggerRef}
      className='flexRow'
      sx={{
        position: "absolute",
        // top: navbarHeight,
        // top: -navbarHeight,
        top: navbarHeight * 0.5,
        left: 0,
        right: 0,
        zIndex: -200,
        // background: "teal",
        height: "1px",
      }}
    />
  );
  // Return both isIntersecting and the JSX for the trigger box
  return [isIntersecting, IntersectionTrigger];
};
