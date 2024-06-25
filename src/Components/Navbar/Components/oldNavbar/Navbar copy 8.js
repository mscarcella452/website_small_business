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
import { md, mobile } from "../../Theme/mediaQueries";
import MenuIcon from "@mui/icons-material/Menu";
import { useToggle } from "../../Hooks/CustomHooks";
import { fonts } from "../../Theme/ThemeContext";
import CompanyAddress from "../../HelperComponents/CompanyAddress";
import ArrowButton from "../../HelperComponents/ArrowButton";
import ArrowLink from "../../HelperComponents/ArrowLink";
import StyledHamburgerMenuIcon from "../../HelperComponents/StyledHamburgerMenuIcon";
import { Link as RouterLink } from "react-router-dom";
import InfoDrawer from "./InfoDrawer/InfoDrawer";

const logo = "https://cdn-icons-png.flaticon.com/128/10583/10583048.png";

const links = [
  { link: "About", to: "#About" },
  { link: "Services", to: "/our-services" },
  { link: "Lookbook", to: "/lookbook" },
  { link: "Hours", href: "/#footer" },
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
  const [infoOpen, setInfoOpen] = useState(true);

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

          fontFamily: fonts.secondary,
        }}
      >
        <InfoDrawer open={infoOpen} setOpen={setInfoOpen}>
          <Button onClick={handleToggeInfoMenu}>close</Button>
        </InfoDrawer>
        <Box
          className='flexRow'
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: navbarHeight,
            backgroundColor: "background.primary",
            width: 1,
            zIndex: "inherit",
            justifyContent: "space-between",

            "&::before": {
              // content: "''",
              position: "absolute",
              top: 0,
              left: 0,
              width: 1,
              height: 1,
              backgroundColor: "background.primary",

              // backgroundColor: "#333",
              // backgroundColor: "#D6CAB7",

              transform:
                (hideBackground && !menuOpen) || loading
                  ? "translateX(200%)"
                  : "translateX(0)",
              transition: "transform 1s ease",

              zIndex: 2,
            },
            padding: { xxs: ".5rem 1rem", sm: ".5rem 1.5rem" },
          }}
        >
          <Link
            component={RouterLink}
            to='/'
            variant='navbar'
            sx={{ zIndex: 2 }}
          >
            <Typography
              variant='h5'
              onClick={handleToggleMenu}
              sx={{
                zIndex: 2,
                fontFamily: fonts.secondary,
              }}
            >
              Thomas Mitchell Clothiers
            </Typography>
          </Link>

          {isMenuHidden && (
            <Box
              className='flexRow'
              sx={{
                justifyContent: "flex-end",
                flex: 1,
                gap: 4,
                zIndex: 2,

                // border: 1,
              }}
            >
              {links.map((link, index) => (
                <Link
                  key={index}
                  component={!link.href ? RouterLink : Link}
                  variant='navbar'
                  to={link.to}
                  href={link.href}
                >
                  {link.link}
                </Link>
              ))}
              <Link
                onClick={handleToggeInfoMenu}
                variant='primary'
                sx={{ fontSize: 14 }}
              >
                Discover Your Fit
              </Link>
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

        <Box
          className='flexColumn'
          sx={{
            position: "absolute",
            top: 0,

            left: 0,
            right: 0,
            height: "100vh",

            backgroundColor: "background.secondary",
            transform: !menuOpen && "translateX(-200%)",
            transition: "transform 1s ease",
            padding: { xxs: "3rem 1rem", sm: "3rem 1.5rem" },
          }}
        >
          <Container
            className='flexColumn'
            maxWidth='sm'
            sx={{
              display: "flex",
              gap: 4,

              justifyContent: "space-around",
              height: 1,
            }}
          >
            <Box
              className='flexColumn'
              gap={4}
              sx={{
                width: 1,
                alignItems: "flex-start",
              }}
            >
              {links.map((link, index) => (
                <ArrowLink
                  key={index}
                  variant='secondary'
                  onClick={handleToggleMenu}
                  href={link.to}
                  sx={{ width: 1 }}
                >
                  {link.link}
                </ArrowLink>
              ))}
            </Box>
            <Box className='flexColumn' gap='inherit'>
              <CompanyAddress
                variant={mobilePortrait ? "h7" : "h5"}
                fontWeight='300'
              />
              <Link
                variant='primary'
                onClick={handleToggleMenu}
                sx={{ fontSize: 14, backgroundColor: "primary.main" }}
              >
                Discover Your Fit
              </Link>
            </Box>
          </Container>
        </Box>
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
