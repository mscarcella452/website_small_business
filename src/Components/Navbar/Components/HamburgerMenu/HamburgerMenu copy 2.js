import React from "react";
import { Box, Container, Typography, Link, Button, Paper } from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import CompanyAddress from "../../../../HelperComponents/CompanyAddress";
import {
  mobilePortrait,
  mobileLandscape,
} from "../../../../Theme/mediaQueries";
import { Link as RouterLink } from "react-router-dom";
import { fonts } from "../../../../Theme/ThemeContext";
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
    link: "Contact / Shop Hours",
    to: "/#footer",
    variant: "primary",
    component: RouterLink,
  },

  // { link: "Contact", to: "#Contact" },
];

function HamburgerMenu({}) {
  return (
    <Paper
      variant='section'
      // sx={{ borderTop: 1, borderColor: "lightgrey" }}
    >
      <Box className='flexColumn' sx={{ width: 1, height: 1, gap: 5 }}>
        {links.map((link, index) => (
          <Link
            key={index}
            variant='h6'
            // variant='secondary'
            // onClick={handleToggleMenu}
            href={link.to}
            sx={{
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
              fontFamily: '"Playfair Display", serif',
              fontFamily: '"Libre Baskerville", serif',
              // fontWeight: 700,
              // fontSize: 20,
            }}
          >
            {link.link}
          </Link>
        ))}
      </Box>
    </Paper>
  );
}

export default HamburgerMenu;
