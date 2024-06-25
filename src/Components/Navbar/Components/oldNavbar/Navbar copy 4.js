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
  { link: "About", to: "#About" },
  { link: "Services", to: "#Services" },
  { link: "Lookbook", to: "#Lookbook" },
  { link: "Hours", to: "#Hours" },
  // { link: "Contact", to: "#Contact" },
];

const alexBrush = '"Alex Brush", cursive;';
const dancingScript = '"Dancing Script", cursive;';
const gravitas = '"Gravitas One", cursive;';
const exo = '"Exo", sans-serif';
const ysabeau = '"Ysabeau SC", sans-serif;';

function Navbar() {
  const navbarHeight = 70;
  const [hideBackground, IntersectionTrigger] = useObserverNavbar(navbarHeight);
  const [loading, setLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const hideHamburgerMenu = useMediaQuery(md);

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

          "&::before": {
            content: "''",
            position: "absolute",
            // display: loading ? "none" : "block",
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            backgroundColor: "primary.dark",

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
        <Typography
          className='flexRow'
          variant='h5'
          sx={{
            zIndex: 2,
            height: 1,
            flex: { xxs: 1, md: "unset" },
            // width: { xxs: 1, md: 460, lg: 480 },
            justifyContent: {
              xxs: "flex-start",
              xs: "center",
              md: "flex-start",
            },

            // transform: {
            //   xxs:
            //     (hideBackground && !showMenu) || loading
            //       ? "translateY(-200%)"
            //       : "translateY(0)",
            //   // md: "translateY(0)",
            // },
            opacity: { xxs: hideBackground && !showMenu ? 0 : 1, md: 1 },
            transition: "transform .5s ease",
            fontFamily: ysabeau,
            fontWeight: 500,
            // backgroundColor: "#edd9b1",
            // color: "primary.dark",
            color: hideBackground || loading ? "primary.dark" : "#fff",
            // color: { xxs: "#edd9b1", mobile: "primary.dark", md: "" },
            // color: "primary.dark",
          }}
        >
          Thomas Mitchell Clothiers
        </Typography>

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
            {links.map((link, index) => (
              <Typography
                variant='p'
                color={hideBackground || loading ? "#000" : "#fff"}
                // textTransform={"uppercase"}
                fontWeight={600}
                sx={{
                  fontFamily: ysabeau,
                  // fontSize: 16,
                  transition: "all .5s ease",
                }}
              >
                {link.link}
              </Typography>
            ))}
            <Button
              variant='primary'
              sx={{
                // fontSize: 13,
                padding: "10px 12px",
                fontFamily: ysabeau,
              }}
            >
              Contact
            </Button>
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
