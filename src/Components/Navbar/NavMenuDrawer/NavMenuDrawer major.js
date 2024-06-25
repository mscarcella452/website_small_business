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
import { sm } from "../../../Theme/mediaQueries";
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
      <NavMenuContext.Provider value={{ transitionState: transition }}>
        <Box
          sx={{
            zIndex: !hideMenu ? navbar_zIndex + 1 : -1000,
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,

            display: "grid",
            gridTemplateColumns: screenSizeThreshold ? "60vw 1fr" : "1fr",
            // background: "red",
          }}
        >
          {screenSizeThreshold && (
            <TransitionBox variant='horizontal' justifySelf={"flex-start"}>
              <ContentBox
                // className='flexColumn'
                left={0}
                width={"60vw"}
                sx={{
                  background: `${backgroundImage1}  center 0 / auto 175vh no-repeat`,
                  backgroundColor: "fontColor.dark",
                  backgroundBlendMode: "overlay",
                  filter: "grayscale(.75)",
                  alignItems: "flex-start",
                  display: "grid",
                  gridTemplateRows: "1fr 1fr 1fr",
                  zIndex: 2,
                  "&:before": {
                    zIndex: -1,
                    content: "''",
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "rgba(0,0,0, .45)",
                  },
                }}
              >
                <Typography
                  variant='h5'
                  typography='secondaryFont'
                  fontWeight={700}
                  color='fontColor.p'
                >
                  Thomas Mitchell Clothiers
                </Typography>
                <CompanyHours />
                <ContactInfo />
              </ContentBox>
            </TransitionBox>
          )}
          <TransitionBox
            variant='vertical'
            alignSelf={"flex-end"}
            // sx={{ backgroundColor: "primary.dark" }}
            sx={{
              backgroundColor: "#242424",
            }}
          >
            <ContentBox
              className='flexColumn'
              variant='transition'
              bottom={0}
              height={"100vh"}
              sx={{
                pt: screenSizeThreshold && theme.navbar.height,
                alignItems: "flex-start",
                justifyContent: "space-between",
                overflow: "scroll",
              }}
            >
              <NavLinks onClick={toggleOpen} />
              {!screenSizeThreshold && (
                <>
                  <Typography
                    variant={"p"}
                    typography='secondaryFont'
                    fontWeight={700}
                    color='fontColor.p'
                    sx={{ order: -1 }}
                    // fontSize={14}
                  >
                    Thomas Mitchell Clothiers
                  </Typography>
                  <CompanyHours />
                  <ContactInfo />
                </>
              )}
            </ContentBox>
          </TransitionBox>
        </Box>
      </NavMenuContext.Provider>
    </>
  );
}

const classes = {
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

function TransitionBox({
  variant,

  className,
  sx,
  children,
  ...rest
}) {
  const { transitionState } = useContext(NavMenuContext);
  // Usage
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
        padding: theme.padding.section,
        width: width,
        height: height,

        ...sx,
      }}
    >
      {children}
    </Box>
  );
}

function ContactInfo() {
  const theme = useTheme();
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  const fontSize = !screenSizeThreshold && 14;
  return (
    <Box
      className='flexColumn'
      sx={{
        color: "fontColor.light",
        height: screenSizeThreshold && 1,
        gap: 2,
        justifySelf: "flex-end",
        justifyContent: "flex-end",
        alignItems: screenSizeThreshold ? "flex-end" : "flex-start",

        width: 1,

        zIndex: 1,
        "&:before": {
          zIndex: -1,
          // content: "''",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0, .5)",
        },
        // "&:before": {
        //   zIndex: -1,
        //   content: "''",
        //   position: "absolute",
        //   top: 0,
        //   bottom: 0,
        //   left: 0,
        //   right: 0,
        //   backgroundColor: "fontColor.p",
        //   opacity: 0.85,
        //   transition: "opacity 1s ease",
        // },
        // "&:hover": {
        //   "&:before": {
        //     opacity: 0.95,
        //   },
        // },
      }}
    >
      {[companyData.phone, companyData.email, companyData.address].map(data => (
        <Typography
          variant='h6'
          typography='secondaryFont'
          color={screenSizeThreshold ? "primary.dark" : "fontColor.p"}
          // fontWeight={700}
          textAlign={screenSizeThreshold ? "right" : "left"}
          sx={{ fontSize: fontSize }}

          // width={1}
        >
          {data}
        </Typography>
      ))}
    </Box>
  );
}

function CompanyHours() {
  const theme = useTheme();
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  const fontSize = !screenSizeThreshold && 14;
  const day = "day";
  return (
    <Box
      className='flexColumn'
      sx={{
        gap: { xxs: 2, md: 4 },
      }}
    >
      {companyData.hours.map((data, index) => (
        <>
          <Box
            className='flexRow'
            key={index}
            sx={{
              color: screenSizeThreshold ? "primary.dark" : "fontColor.p",
              width: 1,

              justifyContent: "flex-start",
              gap: 2,
            }}
            // flexDirection={flexDirection}
          >
            <Typography
              variant={"p"}
              typography={"actionFont"}
              fontWeight={700}
              sx={{ fontSize: fontSize }}
              // sx={{ width: 1 }}
            >
              {data[day]}:
            </Typography>
            {data.hours === "*appt. only" ? (
              <ArrowLink
                color='fontColor.light'
                variant={"p"}
                typography={"secondaryFont"}
                sx={{ fontSize: fontSize }}
              >
                {data.hours}
              </ArrowLink>
            ) : (
              <Typography
                variant={"p"}
                typography={"actionFont"}
                // sx={{ textAlign: "right" }}
                sx={{ textAlign: "right", fontSize: fontSize }}
              >
                {data.hours}
              </Typography>
            )}
          </Box>
        </>
      ))}
    </Box>
  );
}

function NavLinks({ onClick }) {
  const theme = useTheme();
  const { transitionState } = useContext(NavMenuContext);
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  return (
    <Box
      className='flexColumn'
      sx={{
        width: 1,
        height: screenSizeThreshold && 1,
        gap: 3,
        alignItems: "flex-start",
        // color: theme.palette.fontColor.p,
      }}
    >
      {links.map((link, index) => (
        <>
          <Link
            className='navLink'
            key={index}
            onClick={onClick}
            variant={screenSizeThreshold ? "h2" : "h4"}
            // href={link.to}
            to={link.to}
            typography='playfair'
            component={NavLink}
            style={({ isActive }) => ({
              color: isActive && theme.palette.primary.dark,
              fontWeight: 700,
            })}
            width={"fit-content"}
          >
            {link.link}
          </Link>
        </>
      ))}
    </Box>
  );
}
