import { cloneElement, useEffect, useState, useRef } from "react";
import {
  Box,
  Button,
  Drawer,
  useTheme,
  IconButton,
  Typography,
  useMediaQuery,
  Link,
} from "@mui/material";
import companyData from "../../../data/CompanyData";

import useResponsiveThemeValue from "../../../Hooks/useResponsiveThemeValue";
import StyledHamburgerMenuIcon from "../../../HelperComponents/StyledHamburgerMenuIcon";
import ChevronRight from "@mui/icons-material/ChevronRight";
import "./NavMenu.css";
import { HoursInfo } from "../../../HelperComponents/CompanyInfo./Info";
import { Link as RouterLink } from "react-router-dom";
import CompanyAddress from "../../../HelperComponents/CompanyAddress";

const backgroundImage1 =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";
// "https://www.martinbuilding.com/static/a7aa7395fe2fea29ccda39a334d4f272/239d6/New-DBA-Rendering-2024.webp";
const backgroundImage2 = "https://wallpapercave.com/wp/wp3751665.jpg";
// "https://www.martinbuilding.com/static/8c606aeb9a54aad21902cefdde59e7a9/aefd6/contact-details-image%402x.webp";

const links = [
  { link: "Home", to: "/", variant: "navbar", component: RouterLink },
  { link: "About Us", to: "#About", variant: "navbar", component: RouterLink },
  {
    link: "Our Services",
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
  // { link: "Info", variant: "navbar", component: Button },
  {
    link: "Contact Us",
    to: "/#footer",
    variant: "primary",
    component: RouterLink,
  },
];

export default function NavMenuDrawer({ children, ...rest }) {
  const theme = useTheme();
  const navbar_zIndex = theme.navbar.zIndex;
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  const [open, setOpen] = useState(false);
  const [hideMenu, setHideMenu] = useState(true);
  const [transition, setTransition] = useState(false);

  const toggleOpen = () => setOpen(prev => !prev);

  // const [contentTransition, setContentTransition] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    let timeoutId;
    if (open) {
      setHideMenu(false);
      setTransition(true);
    } else {
      setTransition(false);
      timeoutId = setTimeout(() => setHideMenu(true), 1500);
    }

    return () => clearTimeout(timeoutId);
  }, [open]);

  return (
    <>
      <Box
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
        <IconButton onClick={toggleOpen} disableRipple={!open}>
          <StyledHamburgerMenuIcon
            transition={open}
            color={open ? "primary.main" : "fontColor.p"}
          />
        </IconButton>
      </Box>

      <Box
        sx={{
          zIndex: !hideMenu ? navbar_zIndex + 1 : -1000,
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          display: "grid",
          gridTemplateColumns: screenSizeThreshold ? "55vw 1fr" : "1fr",
        }}
      >
        {screenSizeThreshold && (
          <Box
            sx={{
              width: 1,
              height: 1,
              display: "grid",
              gridTemplateRows: "1fr 50vh",
              // overflow: "hidden",
            }}
          >
            <TransitionBox
              variant='width'
              state={transition}
              justifySelf='flex-start'
            >
              <MenuContentBox
                variant='fullHeight'
                left={0}
                backgroundImage={backgroundImage1}
                width={"55vw"}
                sx={{ backgroundPosition: "top center" }}
              >
                <Typography
                  variant='h5'
                  typography='secondaryFont'
                  fontWeight={700}
                  color='background.primary'
                  width={1}
                >
                  Thomas Mitchell Clothiers
                </Typography>
              </MenuContentBox>
            </TransitionBox>

            <Box
              sx={{
                width: 1,
                height: 1,
                display: "grid",
                gridTemplateColumns: "30vw 1fr",
              }}
            >
              <TransitionBox
                variant='width'
                state={transition}
                justifySelf='flex-end'
              >
                <MenuContentBox
                  variant='fullHeight'
                  className='flexColumn'
                  right={0}
                  width={"30vw"}
                  backgroundImage={backgroundImage2}
                  sx={{
                    color: "fontColor.light",
                    gap: 1,
                    justifyContent: "flex-end",
                    alignItems: "flex-end",

                    // backgroundImage: `url(${backgroundImage2})`,
                  }}
                >
                  {[
                    companyData.phone,
                    companyData.email,
                    companyData.address,
                  ].map(data => (
                    <Typography
                      variant='h6'
                      typography='secondaryFont'
                      fontWeight={700}
                      textAlign='right'
                      // width={1}
                    >
                      {data}
                    </Typography>
                  ))}
                </MenuContentBox>
              </TransitionBox>

              <TransitionBox
                variant='height'
                alignSelf='flex-end'
                state={transition}
                sx={{ backgroundColor: "primary.main" }}
              >
                <MenuContentBox
                  // className='flexColumn'
                  variant='fullWidth'
                  bottom={0}
                  height={"50vh"}
                  sx={{
                    // gap: 4,
                    // justifyContent: "space-around",
                    transform: navMenuTheme.transform.contentBox[transition],
                    opacity: transition ? 1 : 0,
                    transition: navMenuTheme.transitions.contentBox[transition],
                  }}
                >
                  <Box
                    className='flexColumn'
                    sx={{
                      gap: 4,
                      height: 1,
                      justifyContent: "space-around",
                      transform: transition ? "rotate(0)" : "rotate(25deg)",
                      // : `rotate(${index + links.length * 25}deg)`,
                      opacity: transition ? 1 : 0,
                      transition: navMenuTheme.transitions.content[transition],
                    }}
                  >
                    <Typography
                      variant='h5'
                      typography='actionFont'
                      // fontWeight={700}
                      color='fontColor.dark'

                      // width={1}
                    >
                      Our Hours:
                    </Typography>
                    <HoursInfo variant='p' />
                  </Box>
                </MenuContentBox>
              </TransitionBox>
            </Box>
          </Box>
        )}
        <TransitionBox
          variant='height'
          alignSelf='flex-end'
          state={transition}
          sx={{ backgroundColor: "fontColor.dark" }}
        >
          <MenuContentBox
            className='flexColumn'
            variant='fullWidth'
            bottom={0}
            height={"100vh"}
            sx={{
              alignItems: "flex-start",
              transform: navMenuTheme.transform.contentBox[transition],
              opacity: transition ? 1 : 0,
              // transition: "transform 1s ease-in, opacity 1s ease",
              transition: navMenuTheme.transitions.contentBox[transition],
              // width: 1,

              gap: 5,
              // justifyContent: "space-between",

              py: theme.navbar.height,
            }}
          >
            {links.map((link, index) => (
              <>
                <Link
                  key={index}
                  variant={"h3"}
                  href={link.to}
                  className={!transition && "nav-menu.closed"}
                  typography='secondaryFont'
                  sx={{
                    fontWeight: 700,
                    transform: transition ? "rotate(0)" : "rotate(25deg)",
                    // : `rotate(${index + links.length * 25}deg)`,
                    opacity: transition ? 1 : 0,
                    transition: navMenuTheme.transitions.content[transition],
                  }}
                  color='fontColor.light'
                  width={"fit-content"}
                >
                  {link.link}
                </Link>
              </>
            ))}
          </MenuContentBox>
        </TransitionBox>
      </Box>
    </>
  );
}

const navMenuTheme = {
  transitions: {
    transitionBox: {
      true: "1s ease-out",
      false: "1.25s ease-in",
    },
    contentBox: {
      true: "transform 1s ease-out, opacity 1s ease-out",
      false: "transform 1.25s ease-in, opacity 1s ease-in",
    },
    content: {
      true: "transform 1s ease-out, opacity 1s ease-out",
      false: "transform 1.25s ease-in, opacity 1s ease-in",
    },
  },
  transform: {
    contentBox: { true: "translateY(0)", false: "translateY(100%)" },
  },
};

function TransitionBox({ children, className, variant, state, sx, ...rest }) {
  const classes =
    variant === "height"
      ? `height_transition_box ${className}`
      : variant === "width"
      ? `width_transition_box ${className}`
      : className;

  const transitionDimension =
    variant === "height"
      ? { height: state ? 1 : 0 }
      : variant === "width"
      ? { width: state ? 1 : 0 }
      : null;
  return (
    <Box
      className={classes}
      sx={{
        ...transitionDimension,
        transition: navMenuTheme.transitions.transitionBox[state],
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

function MenuContentBox({
  children,
  variant,
  backgroundImage,
  className,
  sx,
  ...rest
}) {
  const theme = useTheme();
  const fixedDimension =
    variant === "fullWidth"
      ? { width: 1 }
      : variant === "fullHeight"
      ? { height: 1 }
      : null;

  const classes = backgroundImage
    ? `background_image_navMenu ${className}`
    : className;
  return (
    <Box
      className={classes}
      sx={{
        padding: theme.padding.section,
        // p: 2,
        position: "absolute",
        whiteSpace: "pre-wrap",
        ...fixedDimension,
        backgroundImage: `url(${backgroundImage})`,
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}
