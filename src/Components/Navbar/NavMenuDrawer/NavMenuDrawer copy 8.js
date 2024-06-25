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
import { Link as RouterLink } from "react-router-dom";
import CompanyAddress from "../../../HelperComponents/CompanyAddress";

const backgroundImage1 =
  "url(https://alterations-express.com/wp-content/uploads/2021/09/4.png)";
// "https://www.martinbuilding.com/static/a7aa7395fe2fea29ccda39a334d4f272/239d6/New-DBA-Rendering-2024.webp";

const backgroundImage2 = "url(https://wallpapercave.com/wp/wp3751665.jpg)";
// const backgroundImage2 = "url(https://wallpapercave.com/wp/wp3751665.jpg)";
// "https://www.martinbuilding.com/static/8c606aeb9a54aad21902cefdde59e7a9/aefd6/contact-details-image%402x.webp";

const links = [
  { link: "Home", to: "/", variant: "navbar", component: RouterLink },
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
  // { link: "Info", variant: "navbar", component: Button },
  {
    link: "Contact",
    to: "/#footer",
    variant: "primary",
    component: RouterLink,
  },
];

const NavMenuContext = createContext();

export default function NavMenuDrawer({ children, ...rest }) {
  const theme = useTheme();
  const navbar_zIndex = theme.navbar.zIndex;
  // const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);
  const screenSizeThreshold = useMediaQuery(sm);
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
            gridTemplateColumns: screenSizeThreshold ? "900px 1fr" : "1fr",
            // background: "red",
          }}
        >
          {screenSizeThreshold && (
            <Box
              sx={{
                width: 1,
                height: 1,
                display: "grid",
                gridTemplateRows: "1fr 50vh",
              }}
            >
              <TransitionBox
                variant='horizontal'
                justifySelf={"flex-start"}
                sx={{ background: "red", order: -1 }}
              >
                <ContentBox
                  className='background_image_navMenu center_center '
                  right={0}
                  width={"900px"}
                  sx={{
                    backgroundImage: backgroundImage2,
                    backgroundColor: "fontColor.dark",
                    backgroundBlendMode: "overlay",
                  }}
                >
                  <ContactInfo />
                </ContentBox>
                {/* <ContentBox
                  className='background_image_navMenu top_center '
                  sx={{
                    left: 0,
                    width: "900px",
                    backgroundImage: backgroundImage1,
                    backgroundColor: "fontColor.dark",
                    backgroundBlendMode: "overlay",
                  }}
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
                </ContentBox> */}
              </TransitionBox>
              <Box
                sx={{
                  width: 1,
                  height: 1,
                  display: "grid",
                  gridTemplateColumns: "1fr",
                }}
              >
                <TransitionBox
                  className='background_image_navMenu top_center '
                  variant='vertical'
                  alignSelf={"flex-end"}
                  sx={{
                    // backgroundColor: "background.secondary",
                    backgroundImage: backgroundImage1,
                    backgroundColor: "fontColor.dark",
                    backgroundBlendMode: "overlay",
                  }}
                >
                  <ContentBox variant='transition' bottom={0} height={"50vh"}>
                    <CompanyHours />
                  </ContentBox>
                </TransitionBox>
              </Box>
            </Box>
          )}
          <TransitionBox
            variant='vertical'
            alignSelf={"flex-end"}
            sx={{ backgroundColor: "#242424" }}
          >
            <ContentBox
              variant='transition'
              bottom={0}
              height={"100vh"}
              sx={{ pt: theme.navbar.height }}
            >
              <NavLinks />
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
  return (
    <Box
      className='flexColumn'
      sx={{
        color: "fontColor.light",
        gap: 2,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: 1,
        width: 1,
        zIndex: 1,
        zIndex: 1,
        "&:before": {
          zIndex: -1,
          content: "''",
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
          variant='p'
          typography='actionFont'
          // fontWeight={700}
          textAlign='right'

          // width={1}
        >
          {data}
        </Typography>
      ))}
    </Box>
  );
}

function CompanyHours() {
  const { transitionState } = useContext(NavMenuContext);
  const day = "abrievDay";
  return (
    <Box
      className='flexColumn'
      sx={{
        gap: 4,
        height: 1,
        justifyContent: "space-around",
        color: "fontColor.light",
      }}
    >
      {companyData.hours.map((data, index) => (
        <>
          <Box
            className='flexRow'
            key={index}
            sx={{
              color: "inherit",
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
              // sx={{ width: 1 }}
            >
              {data[day]}:
            </Typography>
            {data.hours === "*appt. only" ? (
              <ArrowLink
                color='inherit'
                variant={"p"}
                typography={"secondaryFont"}
              >
                {data.hours}
              </ArrowLink>
            ) : (
              <Typography
                variant={"p"}
                typography={"actionFont"}
                sx={{ textAlign: "right" }}
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

function NavLinks() {
  const { transitionState } = useContext(NavMenuContext);
  return (
    <Box
      className='flexColumn'
      sx={{
        width: 1,
        height: 1,
        justifyContent: "space-around",
        gap: 3,
        // alignItems: "flex-start",
      }}
    >
      {links.map((link, index) => (
        <>
          <Link
            key={index}
            variant={"h4"}
            href={link.to}
            className={transitionState ? "open" : "closed"}
            typography='playfair'
            sx={{
              fontWeight: 700,
              transform: transitionState ? "rotate(0)" : "rotate(25deg)",
              transitionProperty: "transform",
              // : `rotate(${index + links.length * 25}deg)`,
              // opacity: transition ? 1 : 0,
              // transition: navMenuTheme.transitions.content[transition],
            }}
            color='fontColor.light'
            width={"fit-content"}
          >
            {link.link}
          </Link>
        </>
      ))}
    </Box>
  );
}
