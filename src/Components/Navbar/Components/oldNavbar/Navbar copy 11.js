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
import { md, mobile, sm } from "../../Theme/mediaQueries";
import MenuIcon from "@mui/icons-material/Menu";
import { useToggle } from "../../Hooks/CustomHooks";
import { fonts } from "../../Theme/ThemeContext";
import CompanyAddress from "../../HelperComponents/CompanyAddress";
import ArrowButton from "../../HelperComponents/ArrowButton";
import ArrowLink from "../../HelperComponents/ArrowLink";
import StyledHamburgerMenuIcon from "../../HelperComponents/StyledHamburgerMenuIcon";
import { Link as RouterLink } from "react-router-dom";
import InfoDrawer from "./InfoDrawer/InfoDrawer";
import CompanyInfo from "./Components/CompanyInfo";
import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu";
import Accordion from "@mui/material";
import AccordionMenu from "./AccordionMenu";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Navbar() {
  const largerNav = useMediaQuery(sm);
  const navbarHeight = largerNav ? 80 : 70;
  const [hideBackground, IntersectionTrigger] = useObserverNavbar(navbarHeight);
  const [loading, setLoading] = useState(true);
  const isButtonVisibile = useMediaQuery(md);
  const mobilePortrait = !useMediaQuery(mobile);
  // const [menuOpen, setMenuOpen] = useFullScreenMenu(isMenuHidden);
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const loadBackground = () => setTimeout(() => setLoading(false), 1);
    loadBackground();
  }, []);

  const handleToggleMenu = () => setMenuOpen(prev => !prev);
  const handleToggeInfoMenu = () => setInfoOpen(prev => !prev);

  const menus = [
    {
      id: "hamburgerMenu",
      open: menuOpen,
      setOpen: setMenuOpen,
      ContentComponent: <HamburgerMenu handleCloseMenu={handleToggeInfoMenu} />,
    },
    {
      id: "companyInfo",
      open: infoOpen,
      setOpen: setInfoOpen,
      ContentComponent: <CompanyInfo handleCloseMenu={handleToggeInfoMenu} />,
    },
  ];

  const dropDownButtons = [
    {
      id: "hamburgerDropDown",
      disabled: infoOpen,
      onClick: handleToggleMenu,
      isActive: menuOpen,
      sx: { order: -1, justifySelf: "flex-start" },
      btnTitle: "Discover Your Fit",
    },
    {
      id: "companyInfoDropDown",
      disabled: menuOpen,
      onClick: handleToggeInfoMenu,
      isActive: infoOpen,
      sx: { order: 1, justifySelf: "flex-end" },
      btnTitle: "Visit Us",
    },
  ];

  return (
    <>
      {IntersectionTrigger}

      <Container
        maxWidth={false}
        sx={{
          height: navbarHeight,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          padding: { xxs: ".5rem 1rem", sm: ".5rem 2rem" },
          backgroundColor: "background.primary",
          fontFamily: fonts.secondary,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr auto 1fr" },
          alignItems: "center",
        }}
      >
        <Link
          component={RouterLink}
          className='flexRow'
          to='/'
          variant={mobilePortrait ? "p" : "h5"}
          sx={{
            zIndex: 2,
            fontWeight: 500,
            typography: "secondaryFont",
          }}
        >
          Thomas Mitchell Clothiers
        </Link>

        {isButtonVisibile &&
          dropDownButtons.map(button => (
            <DropdownButton
              key={button.id}
              disabled={button.disabled}
              onClick={button.onClick}
              isActive={button.isActive}
              sx={button.sx}
            >
              {button.btnTitle}
            </DropdownButton>
          ))}
        {isButtonVisibile &&
          menus.map(menu => (
            <InfoDrawer
              key={menu.id}
              open={menu.open}
              setOpen={menu.setOpen}
              anchor='top'
              PaperProps={{
                mt: `${navbarHeight}px`,
                backgroundColor: "background.primary",
              }}
              ModalProps={{
                BackdropProps: {
                  sx: { top: `${navbarHeight}px` },
                },
                sx: { zIndex: 9 },
              }}
            >
              {menu.ContentComponent}
            </InfoDrawer>
          ))}
      </Container>
    </>
  );
}

export default Navbar;

const DropdownButton = ({ children, isActive, sx, ...rest }) => {
  return (
    <Button
      disableRipple
      sx={{
        typography: "menuButton",
        ...sx,
      }}
      {...rest}
      endIcon={
        <ExpandMoreIcon
          sx={{
            transform: isActive ? "rotate(180deg)" : "rotate(0)",
            transition: "transform .5s ease",
          }}
        />
      }
    >
      {children}
    </Button>
  );
};

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
