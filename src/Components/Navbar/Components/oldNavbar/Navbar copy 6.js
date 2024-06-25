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
import { md } from "../../Theme/mediaQueries";
import MenuIcon from "@mui/icons-material/Menu";
import { useToggle } from "../../Hooks/CustomHooks";
import { fonts } from "../../Theme/ThemeContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowButton from "../../HelperComponents/ArrowButton";

const logo = "https://cdn-icons-png.flaticon.com/128/10583/10583048.png";

const links = [
  { link: "About", to: "#About" },
  { link: "Services", to: "#Services" },
  { link: "Lookbook", to: "#Lookbook" },
  { link: "Hours", to: "#Hours" },
  // { link: "Contact", to: "#Contact" },
];

function Navbar() {
  const navbarHeight = 70;
  const [hideBackground, IntersectionTrigger] = useObserverNavbar(navbarHeight);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const hideHamburgerMenu = false;
  // const hideHamburgerMenu = useMediaQuery(md);

  useEffect(() => {
    hideHamburgerMenu && showMenu && setShowMenu(false);
  }, [hideHamburgerMenu]);
  useEffect(() => {
    const loadBackground = () => setTimeout(() => setLoading(false), 1);
    loadBackground();
  }, []);

  const handleToggleMenu = () => setShowMenu(prev => !prev);

  return (
    <>
      {IntersectionTrigger}
      <Box
        className='flexRow'
        sx={{
          height: navbarHeight,
          justifyContent: "space-between",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "background.primary",
          fontFamily: fonts.secondary,

          "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            backgroundColor: "#fff",

            // backgroundColor: "#EEEEEE",

            transform:
              (hideBackground && !showMenu) || loading
                ? "translateY(-200%)"
                : "translateY(0)",
            transition: "transform .5s ease",

            zIndex: 2,
          },
          padding: { xxs: ".5rem 1rem", sm: ".5rem 1.5rem" },
        }}
      >
        <Link to='#Home' variant='navbar' href='#Home' sx={{ zIndex: 2 }}>
          <Typography
            variant='h5'
            sx={{ zIndex: 2, fontFamily: fonts.secondary }}
          >
            Thomas Mitchell Clothiers
          </Typography>
        </Link>

        {hideHamburgerMenu && (
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
            {links.map(link => (
              <Link variant='navbar' href={link.to}>
                {link.link}
              </Link>
            ))}
            <Link variant='primary' sx={{ fontSize: 14 }}>
              Discover Your Fit
            </Link>
          </Box>
        )}

        {!hideHamburgerMenu && (
          <IconButton
            onClick={handleToggleMenu}
            sx={{
              zIndex: 2,
              position: "absolute",
              right: { xxs: "1rem", sm: "1.5rem" },
            }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
        )}

        <Box
          className='flexColumn'
          sx={{
            position: "absolute",
            top: navbarHeight,

            left: 0,
            right: 0,

            backgroundColor: "lightgrey",
            transform: !showMenu && "translateY(-150%)",
            transition: "transform .75s ease",
            padding: { xxs: "2rem 1rem", sm: "3rem 1.5rem" },
          }}
        >
          <Container
            className='flexColumn'
            maxWdith='md'
            sx={{ display: "flex", gap: 4, alignItems: "flex-start" }}
          >
            {links.map(link => (
              <ArrowButton variant='navbar' href={link.to}>
                {link.link}
              </ArrowButton>
            ))}
            <Link variant='primary' sx={{ fontSize: 14 }}>
              Discover Your Fit
            </Link>
            <Typography
              className='flexRow'
              variant={"h7"}
              sx={{ fontWeight: 300, gap: "5px" }}
            >
              24 Gerard St, Huntington, NY 11743
              <LocationOnIcon sx={{ color: "primary.main" }} />
            </Typography>
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
