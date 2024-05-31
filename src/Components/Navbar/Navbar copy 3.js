import { useEffect, useState, useRef } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { md } from "../../Theme/mediaQueries";
import MenuIcon from "@mui/icons-material/Menu";
import { useToggle } from "../../Hooks/CustomHooks";

const logo = "https://cdn-icons-png.flaticon.com/128/10583/10583048.png";

const links = [
  // { link: "Home", to: "#Home" },
  { link: "About", to: "#About" },
  { link: "Services", to: "#Services" },
  { link: "Lookbook", to: "#Lookbook" },
  { link: "Hours", to: "#Hours" },
  // { link: "Contact", to: "#Contact" },
];

function Navbar() {
  const navbarHeight = 70;
  const [hideBackground, IntersectionTrigger] = useObserverNavbar(navbarHeight);
  const [showMenu, setShowMenu] = useState(false);
  const hideHamburgerMenu = useMediaQuery(md);

  useEffect(() => {
    hideHamburgerMenu && showMenu && setShowMenu(false);
  }, [hideHamburgerMenu]);

  const handleToggleMenu = () => setShowMenu(prev => !prev);

  const containerWidth = {
    xxs: 1,
    mobile: "calc(100vw - 175px)",
    sm: "calc(100vw - 250px)",
    md: "100vw",
  };

  return (
    <>
      {IntersectionTrigger}
      <Box
        className='flexRow'
        sx={{
          // height: hideBackground ? 100 : 70,
          // transition: "all .5s ease",
          height: navbarHeight,
          width: 1,
          display: "flex",
          justifyContent: "flex-end",
          position: "sticky",
          border: 1,

          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,

          "&::before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            // backgroundColor: "primary.dark",
            // backgroundColor: "#333366",
            backgroundColor: "#fff",
            // backgroundColor: "#292929",
            transform:
              hideBackground && !showMenu
                ? "translateY(-200%)"
                : "translateY(0)",
            transition: "transform .5s ease",
            // boxShadow: !hideBackground && !showMenu && 1,
            // backgroundColor: {
            //   xxs: "Red",
            //   sm: "blue",
            //   md: "purple",
            //   lg: "teal",
            // },
            zIndex: 2,
          },
        }}
      >
        <Box
          sx={{
            width: containerWidth,
            height: 1,
            padding: {
              xxs: ".5rem 1rem",
              sm: ".5rem 2rem",
              md: ".5rem 1.5rem",
            },
          }}
        >
          <Box
            className='flexRow'
            sx={{
              height: 1,
              width: 1,
              alignSelf: "flex-end",
              zIndex: 2,
              position: "relative",
              // border: 1,
            }}
          >
            {!hideHamburgerMenu && (
              <IconButton onClick={handleToggleMenu}>
                <MenuIcon sx={{ color: "primary.light" }} />
              </IconButton>
            )}
            {hideHamburgerMenu && (
              <Box
                className='flexRow'
                sx={{ justifyContent: "flex-end", flex: 1, gap: 4, zIndex: 2 }}
              >
                {links.map(link => (
                  <Typography
                    variant='p'
                    color='#000'
                    textTransform={"uppercase"}
                    fontWeight={400}
                  >
                    {link.link}
                  </Typography>
                ))}
                <Button
                  variant='primary'
                  sx={{
                    fontSize: 13,
                    padding: "10px 12px",
                  }}
                >
                  Contact
                </Button>
              </Box>
            )}
          </Box>
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
