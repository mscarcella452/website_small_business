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
    mobile: "calc(100vw - 140px)",
    sm: "calc(100vw - 275px)",
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
          border: 1,

          width: 1,

          // padding: 1,
          display: "flex",
          justifyContent: "flex-end",
          position: "sticky",
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
          // border: 1,
        }}
      >
        <Box
          className='flexRow'
          // maxWidth={false}
          sx={{
            // color: hideBackground ? "#fff" : "#000",
            // transition: "all 1s ease",
            color: "primary.dark",
            gap: 6,
            height: 1,
            width: containerWidth,
            padding: 0,
            justifyContent: "flex-end",

            // paddingLeft: {
            //   xxs: 0,
            //   mobile: "150px",
            //   sm: "290px",
            //   md: 0,
            // },
            border: 1,
            background: "red",
          }}
        >
          <Box
            className='flexRow'
            sx={{
              // height: 1,
              // padding: 1,
              border: 1,

              gap: 2,
              zIndex: 2,
              width: 1,

              // borderColor: "red",
              // paddingRight: 8,

              justifyContent: {
                xxs: "flex-end",
                sm: "space-between",
                md: "flex-start",
              },
              position: "relative",

              // "&:before": {
              //   content: "''",
              //   height: 1,
              //   width: 1,

              //   left: 0,

              //   position: "absolute",
              //   backgroundColor: "#65857A",
              //   zIndex: -1,
              // },
            }}
          >
            {/* <Box
              sx={{
                height: 35,
                aspectRatio: 1,
                background: `url(${logo}) top center / cover no-repeat`,
                order: { xxs: 1, md: -1 },

                // display: { xxs: "none", sm: "block" },
              }}
            /> */}
            {!hideHamburgerMenu && (
              <IconButton
                onClick={handleToggleMenu}
                sx={{
                  // border: 1,
                  // height: 35,
                  // aspectRatio: 1,
                  order: { xxs: 1, mobile: 1 },
                  // position: { xxs: "absolute", sm: "relative" },
                  // top: 0,
                  // right: { xxs: "auto", sm: 0 },
                  // left: { xxs: 0, sm: "auto" },
                  // bottom: 0,
                }}
              >
                <MenuIcon sx={{ color: "primary.light" }} />
              </IconButton>
            )}
            <Typography
              variant={hideHamburgerMenu ? "h5" : "h7"}
              // color='primary.light'
              color={
                hideBackground
                  ? {
                      xxs: "primary.light",
                      mobile: "primary.dark",
                      md: "background.primary",
                    }
                  : "primary.dark"
              }
              fontWeight={700}
              textTransform='uppercase'
              // textAlign={hideHamburgerMenu ? "left" : "right"}
              sx={{
                // display: { xxs: "none", sm: "block" },
                transition: "all .5s ease",
                flex: 1,
              }}
            >
              {/* TMC */}
              Thomas Mitchell Clothiers
            </Typography>
          </Box>
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
        <Box
          sx={{
            position: "absolute",
            // height: 400,
            top: 70,
            left: 0,
            right: 0,
            backgroundColor: "primary.dark",
            transform: !showMenu ? "translateY(-200%)" : "translateY(0)",
            transition: "transform 1s ease",
            padding: "1.5rem .5rem",
            // padding: 1,
            // paddingBottom: 0,
          }}
        >
          <Container
            className='flexColumn'
            maxWidth={false}
            sx={{
              // gap: 6,
              // border: 1,
              height: 1,
              color: "#fff",
              opacity: showMenu ? 1 : 0,
              transition: "opacity .5s ease",
              // alignItems: { xxs: "flex-start", sm: "flex-end" },
            }}
          >
            <Typography
              variant='subHeading'
              color='inherit'
              fontWeight={700}
              textTransform='uppercase'
              sx={{
                display: { xxs: "block", sm: "none" },
                width: 1,
                textAlign: "center",
                marginBottom: 3,
                // color: "#000",
              }}
            >
              {/* TMC */}
              Thomas Mitchell Clothiers
            </Typography>
            {links.map((link, index) => (
              <Box
                className='flexRow'
                variant='label'
                color='inherit'
                zIndex={2}
                sx={{
                  height: 60,
                  width: 1,

                  // justifyContent: "flex-start",
                  position: "relative",
                  "&:before": {
                    content: "''",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    // width: "100vw",
                    left: 0,
                    right: 0,
                    // borderTop: index === 0 && 1,
                    // borderBottom: 1,
                    // borderColor: "#fff",

                    // backgroundColor:
                    //   index % 2 === 1 ? "primary.dark" : "primary.light",
                    // zIndex: 2,
                  },
                }}
                // textTransform={"none"}
              >
                <Typography
                  className='flexRow'
                  variant='label'
                  color='inherit'
                  zIndex={1}
                  sx={{
                    width: 1,
                    height: 1,
                    justifyContent: { xxs: "center", sm: "flex-start" },
                    // opacity: showMenu ? 1 : 0,
                    // transition: "opacity .5s ease",
                  }}

                  // textTransform={"none"}
                >
                  {link.link}
                </Typography>
              </Box>
            ))}
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
