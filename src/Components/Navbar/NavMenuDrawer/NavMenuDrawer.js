import {
  cloneElement,
  useEffect,
  useState,
  useRef,
  createContext,
  useContext,
} from "react";
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
import { sm, mobileLandscape, xs } from "../../../Theme/mediaQueries";
import ArrowLink from "../../../HelperComponents/ArrowLink";

import useResponsiveThemeValue from "../../../Hooks/useResponsiveThemeValue";
import StyledHamburgerMenuIcon from "../../../HelperComponents/StyledHamburgerMenuIcon";
import ChevronRight from "@mui/icons-material/ChevronRight";
import "./NavMenu.css";
import { HoursInfo } from "../../../HelperComponents/CompanyInfo./Info";
import { Link as RouterLink, NavLink } from "react-router-dom";
import CompanyAddress from "../../../HelperComponents/CompanyAddress";

const backgroundImage1 =
  "url(https://alterations-express.com/wp-content/uploads/2021/09/4.png)";
// "https://www.martinbuilding.com/static/a7aa7395fe2fea29ccda39a334d4f272/239d6/New-DBA-Rendering-2024.webp";

const backgroundImage2 = "url(https://wallpapercave.com/wp/wp3751665.jpg)";
// const backgroundImage2 = "url(https://wallpapercave.com/wp/wp3751665.jpg)";
// "https://www.martinbuilding.com/static/8c606aeb9a54aad21902cefdde59e7a9/aefd6/contact-details-image%402x.webp";

const links = [
  { link: "Home", to: "/", variant: "navbar", component: RouterLink },
  { link: "About", to: "About", variant: "navbar", component: RouterLink },
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
  // { link: "Info", variant: "navbar", component: Button },
  {
    link: "Contact",
    to: "/contact",
    variant: "primary",
    component: RouterLink,
  },
];

const NavMenuContext = createContext();

export default function NavMenuDrawer({ children, ...rest }) {
  const theme = useTheme();
  const navbar_zIndex = theme.navbar.zIndex;
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  const navbarHeight = useResponsiveThemeValue("navbar.height");
  // const landscapeSm = useMediaQuery(sm);
  const landscapeSm = useMediaQuery(mobileLandscape);

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

  const leftContainerWidth = "50vw";

  return (
    <>
      <FixedWrapper right={0} position='fixed'>
        <IconButton onClick={toggleOpen} disableRipple={!open}>
          <StyledHamburgerMenuIcon
            transitionState={open}
            color={open ? "primary.main" : "fontColor.p"}
          />
        </IconButton>
      </FixedWrapper>
      <NavMenuContext.Provider value={{ transitionState: transition }}>
        <Box
          id='navMenu_container'
          className={screenSizeThreshold && "columns"}
          sx={{ zIndex: !hideMenu ? navbar_zIndex + 1 : -1000 }}
        >
          {screenSizeThreshold && (
            <Box
              id='left_column_container'
              className={classes.column_container[transition]}
            >
              <FixedWrapper
                left={0}
                justifyContent='flex-start'
                width={"60vw"}
                position='absolute'
              >
                <Typography
                  variant={"h4"}
                  typography='secondaryFont'
                  fontWeight={700}
                  color='fontColor.light'
                  // fontSize={14}
                >
                  Thomas Mitchell Clothiers
                </Typography>
              </FixedWrapper>
              <Box
                id='left_column_contentBox'
                className='contentBox background_image_navMenu'
                sx={{
                  padding: theme.padding.menu,
                  background: `${backgroundImage1}  center 0 / auto 175vh no-repeat`,
                  // backgroundColor: "rgba(0, 0, 0, 0.45)",
                  backgroundColor: "fontColor.dark",

                  // backgroundColor: "fontColor.dark",
                }}
              >
                <Box className='companyHours_container'>
                  <CompanyHours
                    day={"day"}
                    dayProps={{ variant: "h6" }}
                    hoursProps={{ variant: "h6" }}
                    linkProps={{ variant: "h6", sx: { fontWeight: 700 } }}
                  />
                </Box>
                <Box className='contactInfo_container flex_end'>
                  <ContactInfo variant='h6' />
                </Box>
              </Box>
            </Box>
          )}
          <Box
            id='right_column_container'
            className={classes.column_container[transition]}
            sx={{ backgroundColor: "#242424" }}
          >
            {!screenSizeThreshold && (
              <FixedWrapper
                left={0}
                justifyContent='flex-start'
                position='absolute'
                sx={{ backgroundColor: !screenSizeThreshold && "#242424" }}
              >
                <Typography
                  variant={"p"}
                  typography='secondaryFont'
                  fontWeight={700}
                  color='fontColor.p'
                >
                  Thomas Mitchell Clothiers
                </Typography>
              </FixedWrapper>
            )}
            <Box
              id='right_column_contentBox'
              className={
                screenSizeThreshold
                  ? "contentBox"
                  : landscapeSm
                  ? `contentBox gridColumn`
                  : `contentBox gridRow`
              }
              sx={{
                padding: theme.padding.menu,
                height: "100vh",

                // height: !screenSizeThreshold
                //   ? `calc(100vh - ${navbarHeight})`
                //   : "100vh",
              }}
            >
              <Box
                className='navLinks_container'
                sx={{
                  maxHeight: screenSizeThreshold ? 525 : 1,
                }}
              >
                <NavLinks
                  onClick={toggleOpen}
                  variant={
                    screenSizeThreshold ? "h2" : landscapeSm ? "h5" : "h3"
                  }
                />
              </Box>
              {!screenSizeThreshold && (
                <Box
                  className='info_container'
                  sx={{
                    justifyContent: landscapeSm ? "center" : "flex-start",
                  }}
                >
                  <Box className='companyHours_container'>
                    <CompanyHours day={"abrievDay"} />
                  </Box>

                  <Box className='contactInfo_container flex_start'>
                    <ContactInfo />
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </NavMenuContext.Provider>
    </>
  );
}

const classes = {
  navMenu_container: {
    true: "navMenu_container grid",
    false: "navMenu_container",
  },
  column_container: {
    true: "column_container open",
    false: "column_container closed",
  },
  left_column: {
    container: {
      true: "open",
      false: "closed",
    },
    contentBox: "left_column_contentBox  contentBox background_image_navMenu",
  },
  right_column: {
    container: {
      true: "right_column  open",
      false: "right_column   closed",
    },
    contentBox: "right_column_contentBox contentBox",
  },

  transitionBox: {
    vertical: {
      true: "vertical_transition_box open",
      false: "vertical_transition_box closed",
    },
    horizontal: {
      true: "horizontal_transition_box open",
      false: "horizontal_transition_box closed",
    },
  },
  contentBox: {
    default: "content_box",
    transition: {
      true: "content_box transition open",
      false: "content_box transition closed",
    },
  },
};

const getClassNames = {
  transitionBox: (variant, transitionState, className) => {
    if (!variant) {
      return className;
    }

    return `${classes.transitionBox[variant][transitionState]} ${className}`;
  },
  contentBox: (variant, transitionState, className) => {
    if (!variant) {
      return `${classes.contentBox.default} ${className}`;
    }
    switch (variant) {
      case "transition":
        return `${classes.contentBox.transition[transitionState]} ${className}`;
      default:
        return `${classes.contentBox.default} ${className}`;
    }
  },
};

function FixedWrapper({ children, sx, ...rest }) {
  const theme = useTheme();
  const navbarHeight = useResponsiveThemeValue("navbar.height");

  return (
    <Box
      className='flexRow'
      sx={{
        top: 0,
        zIndex: theme.navbar.zIndex + 2,
        height: navbarHeight,
        padding: theme.padding.navbar,

        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
}

function TransitionBox({ variant, className, sx, children, ...rest }) {
  const { transitionState } = useContext(NavMenuContext);
  const classNames = getClassNames.transitionBox(
    variant,
    transitionState,
    className
  );
  return (
    <Box className={classNames} sx={{ ...sx }} {...rest}>
      {children}
    </Box>
  );
}

function ContentBox({
  variant,
  width = 1,
  height = 1,
  className,
  sx,
  children,
  ...rest
}) {
  const theme = useTheme();
  const { transitionState } = useContext(NavMenuContext);

  const classNames = getClassNames.contentBox(
    variant,
    transitionState,
    className
  );

  return (
    <Box
      {...rest}
      className={classNames}
      sx={{
        padding: theme.padding.menu,
        width: width,
        height: height,

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function ContactInfo({ ...rest }) {
  const theme = useTheme();

  const defaultProps = {
    variant: "navMenu",
    typography: "secondaryFont",
    color: theme.palette.background.primary,
    fontWeight: 700,
  };

  const props = { ...defaultProps, ...rest };
  return (
    <>
      {[companyData.phone, companyData.email, companyData.address].map(data => (
        <Typography {...props}>{data}</Typography>
      ))}
    </>
  );
}

function CompanyHours({
  day = "abrievDay",
  dayProps,
  hoursProps,
  linkProps,
  ...rest
}) {
  const theme = useTheme();

  const defaultDayProps = {
    variant: "navMenu",
    typography: "actionFont",
    color: theme.palette.background.primary,
    sx: {
      fontWeight: 700,
    },
  };

  const defaultHoursProps = {
    variant: "navMenu",
    typography: "actionFont",
    color: theme.palette.background.primary,
  };
  const defaultLinkProps = {
    variant: "navMenu",
    typography: "secondaryFont",
    color: theme.palette.primary.dark,
  };

  const props = {
    day: { ...defaultDayProps, ...dayProps },
    hours: { ...defaultHoursProps, ...hoursProps },
    link: { ...defaultLinkProps, ...linkProps },
  };

  return (
    <>
      {companyData.hours.map((data, index) => (
        <>
          <Box
            className='flexRow'
            key={index}
            sx={{
              width: 1,
              justifyContent: "flex-start",
              gap: 2,
            }}
            {...rest}
          >
            <Typography {...props.day}>{data[day]}:</Typography>
            {data.hours === "*appt. only" ? (
              <ArrowLink {...props.link}>{data.hours}</ArrowLink>
            ) : (
              <Typography {...props.hours}>{data.hours}</Typography>
            )}
          </Box>
        </>
      ))}
    </>
  );
}

function NavLinks({ ...rest }) {
  const theme = useTheme();
  const { transitionState } = useContext(NavMenuContext);
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  return (
    <>
      {links.map((link, index) => (
        <>
          <Link
            className='navLink'
            key={index}
            // href={link.to}
            to={link.to}
            typography='playfair'
            component={NavLink}
            style={({ isActive }) => ({
              color: isActive && theme.palette.primary.dark,
              fontWeight: 700,
            })}
            width={"fit-content"}
            {...rest}
          >
            {link.link}
          </Link>
        </>
      ))}
    </>
  );
}
