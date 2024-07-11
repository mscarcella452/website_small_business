// React Imports
import { useState, useEffect, cloneElement, useRef } from "react";
// Material-UI Imports
import { Box, Drawer, useTheme, Slide, Tab, Tabs } from "@mui/material";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";
// Custom Hooks
import useResponsiveThemeValue from "../../../Hooks/useResponsiveThemeValue";
import useNavMenuCarouselProps from "./useNavMenuCarouselProps";
// Styles
import "./NavMenu.css";
// Reusable Components

import { NavLinks, ContactInfo, CompanyHours } from "../../ReusableComponents";
// Helper Components
import { AnimatedHamburgerIconButton } from "../../../HelperComponents";
// Data
import companyData from "../../../data/CompanyData";

const navigationIcons = [AccessTimeIcon, FormatListBulletedIcon, PlaceIcon];

function NavMenu() {
  const theme = useTheme();

  const navbarHeight = useResponsiveThemeValue("navbar.height");
  const contentProps = useNavMenuCarouselProps();

  const [currentIndex, setCurrentIndex] = useState(1);
  const [open, setOpen] = useState(false);

  const handleChangeIndex = (event, newIndex) => setCurrentIndex(newIndex);

  const toggleDrawer = () => setOpen(prev => !prev);
  const handleCloseDrawer = () => setOpen(false);

  useEffect(() => {
    let timeoutId;
    if (open) {
      setCurrentIndex(1);
    } else timeoutId = setTimeout(() => setCurrentIndex(1), 750);

    return () => clearTimeout(timeoutId);
  }, [open]);

  const carouselData = [
    <CompanyHours {...contentProps.companyHours} />,
    <NavLinks onClick={handleCloseDrawer} {...contentProps.navLinks} />,
    <ContactInfo {...contentProps.contactInfo} />,
  ];

  return (
    <>
      <Box
        id='hamburgerButton_wrapper'
        sx={{
          zIndex: theme.navbar.zIndex + 2,
          height: navbarHeight,
          padding: theme.padding.navbar,
        }}
      >
        <AnimatedHamburgerIconButton
          onClick={toggleDrawer}
          transitionState={open}
          disableRipple={!open}
        />
      </Box>

      <Drawer
        id='navMenu_drawer'
        open={open}
        onClick={handleCloseDrawer}
        sx={{ zIndex: theme.navbar.zIndex + 1 }}
        anchor='right'
        transitionDuration={{ enter: 750, exit: 1250 }}
      >
        <Slide
          direction='left'
          in={open}
          out={!open}
          mountOnEnter
          unmountOnExit
          timeout={750}
        >
          <Box
            id='nav_menu'
            onClick={e => e.stopPropagation()}
            onKeyDown={e => e.stopPropagation()}
            role='presentation'
            elevation={5}
            sx={{
              backgroundColor: "secondary.dark",
              width: { xxs: 1, md: 500 },
            }}
          >
            <Box className={"content_container"}>
              {carouselData.map((content, index) => (
                <Box
                  className='content_list'
                  sx={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    opacity: currentIndex === index ? 1 : 0,
                    padding: theme.padding.menu,
                  }}
                >
                  {content}
                </Box>
              ))}
            </Box>
            <Tabs
              value={currentIndex}
              onChange={handleChangeIndex}
              variant='fullWidth'
              TabIndicatorProps={{ style: { top: 0 } }}
            >
              {navigationIcons.map((Icon, index) => (
                <Tab
                  key={index}
                  disabled={!open}
                  label={cloneElement(<Icon />, {
                    sx: {
                      color:
                        currentIndex === index
                          ? "primary.main"
                          : "secondary.light",
                      "&:hover": {
                        color: currentIndex !== index && "secondary.dark",
                        cursor: currentIndex === index && "default",
                      },
                    },
                  })}
                  sx={{ p: 2 }}
                />
              ))}
            </Tabs>
          </Box>
        </Slide>
      </Drawer>
    </>
  );
}

export default NavMenu;
