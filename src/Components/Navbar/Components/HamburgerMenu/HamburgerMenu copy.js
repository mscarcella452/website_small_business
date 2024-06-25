import React from "react";
import { Box, Container, Typography, Link, Button, Paper } from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import CompanyAddress from "../../../../HelperComponents/CompanyAddress";
import {
  mobilePortrait,
  mobileLandscape,
} from "../../../../Theme/mediaQueries";
import { Link as RouterLink } from "react-router-dom";
const links = [
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
  { link: "Info", variant: "navbar", component: Button },
  // {
  //   link: "Discover Your Fit",
  //   to: "/#footer",
  //   variant: "primary",
  //   component: RouterLink,
  // },
  // { link: "Contact", to: "#Contact" },
];

function HamburgerMenu({}) {
  return (
    <Paper
      className='flexRow'
      variant='section'
      sx={{
        backgroundColor: "background.primary",
        justifyContent: "flex-start",

        [mobileLandscape]: {
          minHeight: { xxs: "calc(100vh - 70px)", md: "auto" },
        },
      }}
    >
      <Container
        className='flexColumn'
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr",
          [mobileLandscape]: {
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
          },

          gap: 8,
          alignItems: "flex-start",
          // border: 1,
          width: 1,

          justifyContent: "space-around",
          height: 1,
        }}
      >
        <Box
          className='flexColumn'
          gap={4}
          sx={{
            width: 1,
            alignItems: "flex-start",
            maxWidth: "mobile",
          }}
        >
          {links.map((link, index) => (
            <ArrowLink
              key={index}
              variant='secondary'
              // onClick={handleToggleMenu}
              href={link.to}
              sx={{ width: 1 }}
            >
              {link.link}
            </ArrowLink>
          ))}
        </Box>

        <Box
          className='flexColumn'
          gap='inherit'
          sx={{
            alignItems: "flex-start",
            [mobileLandscape]: { alignItems: "center" },
          }}
        >
          <CompanyAddress
            variant={mobilePortrait ? "h7" : "h5"}
            fontWeight='300'
          />
          <Link
            variant='primary'
            // onClick={handleToggleMenu}
            sx={{
              fontSize: 14,
              backgroundColor: "primary.main",
              order: 1,
              [mobileLandscape]: { order: { xxs: -1, sm: 1 } },
              width: { xxs: 1, sm: "fit-content" },
              textAlign: "center",
            }}
          >
            Discover Your Fit
          </Link>
        </Box>
      </Container>
    </Paper>
  );
}

export default HamburgerMenu;
