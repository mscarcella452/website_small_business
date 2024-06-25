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

export default function NavMenuDrawer({
  open,

  children,
  ...rest
}) {
  const theme = useTheme();
  const navbar_zIndex = theme.navbar.zIndex;
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);

  const [hideMenu, setHideMenu] = useState(true);
  const [transition, setTransition] = useState(false);
  const [contentTransition, setContentTransition] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setHideMenu(false);
      setTransition(true);
      setTimeout(() => setContentTransition(true), 500);
    } else {
      setContentTransition(false);
      setTimeout(() => setTransition(false), 500);
      setTimeout(() => setHideMenu(true), 2000);
    }
  }, [open]);

  // useEffect(() => {
  //   if (leftContainerRef.current) {
  //     const width = leftContainerRef.current.getBoundingClientRect().width;
  //     contactInfoRef.current.style.width = `${width * 0.6}px`; // Ensure to add 'px' for proper CSS width
  //   }
  // }, []);

  // const [open, setOpen] = React.useState(false);

  return (
    <Box
      sx={{
        zIndex: !hideMenu ? navbar_zIndex + 1 : -1000,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,

        // backgroundColor: !hideMenu ? "rgba(0, 0, 0, 0.5)" : "transparent",
        // // // opacity: open ? 1 : 0,
        // transition: "backgroundColor .75s ease",

        // display: open ? "grid" : "none",
        display: "grid",
        // display: "grid",
        gridTemplateColumns: screenSizeThreshold ? "60vw 1fr" : "1fr",
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
          <Box
            className='width_transition_box'
            justifySelf='flex-start'
            sx={{ width: transition ? 1 : 0 }}
          >
            <MenuContentBox
              variant='fullHeight'
              left={0}
              backgroundImage={backgroundImage1}
              width={"60vw"}
              sx={{ backgroundPosition: "top center" }}
            >
              <Typography
                variant='h5'
                typography='secondaryFont'
                fontWeight={700}
                color='background.primary'
              >
                Thomas Mitchell Clothiers
              </Typography>
            </MenuContentBox>
          </Box>

          <Box
            sx={{
              width: 1,
              height: 1,
              display: "grid",
              gridTemplateColumns: "35vw 1fr",
            }}
          >
            <Box
              className='width_transition_box'
              justifySelf='flex-end'
              sx={{
                width: transition ? 1 : 0,
              }}
            >
              <MenuContentBox
                variant='fullHeight'
                className='flexColumn'
                right={0}
                width={"35vw"}
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
            </Box>
            <Box
              className='height_transition_box'
              alignSelf='flex-end'
              sx={{
                height: transition ? 1 : 0,
                backgroundColor: "primary.main",
              }}
            >
              <MenuContentBox
                className='flexColumn'
                variant='fullWidth'
                bottom={0}
                height={"50vh"}
                sx={{
                  gap: 4,
                  justifyContent: "space-around",
                  transform: contentTransition
                    ? "translateY(0)"
                    : "translateY(100%)",
                  opacity: contentTransition ? 1 : 0,
                  transition: "transform 1.5s ease, opacity .75s ease",
                }}
              >
                <Typography
                  variant='h5'
                  typography='actionFont'
                  // fontWeight={700}
                  color='fontColor.dark'
                  sx={{}}
                  // width={1}
                >
                  Our Hours:
                </Typography>
                <HoursInfo variant='p' />
              </MenuContentBox>
            </Box>
          </Box>
        </Box>
      )}
      <Box
        className='height_transition_box'
        alignSelf='flex-end'
        sx={{ height: transition ? 1 : 0, backgroundColor: "fontColor.dark" }}
      >
        <MenuContentBox
          className='flexColumn'
          variant='fullWidth'
          bottom={0}
          sx={{
            height: "100vh",
            alignItems: "flex-start",
            transform: contentTransition ? "translateY(0)" : "translateY(100%)",
            opacity: contentTransition ? 1 : 0,
            transition: "transform 1.5s ease, opacity .75s ease",
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
                  transform: contentTransition
                    ? "rotate(0)"
                    : `rotate(${index + links.length * 5}deg)`,
                  opacity: contentTransition ? 1 : 0,
                  transition: "transform 1.5s ease, opacity .75s ease",
                }}
                color='fontColor.light'
                width={"fit-content"}
              >
                {link.link}
              </Link>
            </>
          ))}
        </MenuContentBox>
      </Box>
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
