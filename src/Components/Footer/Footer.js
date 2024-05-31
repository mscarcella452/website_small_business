import React from "react";
import {
  Paper,
  Box,
  Typography,
  Container,
  Divider,
  Link,
} from "@mui/material";
import { fonts } from "../../Theme/ThemeContext";
import companyData from "../../data/CompanyData";
import CompanyAddress from "../../HelperComponents/CompanyAddress";
import ArrowLink from "../../HelperComponents/ArrowLink";
import { Link as RouterLink } from "react-router-dom";

// import { PageDiv, CompanyInfo } from "../../Helpers/HelperComponents";

const links = [
  { title: "About Us", link: "#AboutUs" },
  { title: "Services", link: "#Services" },
  { title: "Hours", link: "#Hours" },
  { title: "Lookbook", link: "#Lookbook" },
  { title: "Contact Us", link: "#Contact Us" },
];

function Footer() {
  return (
    <Paper variant='section' sx={{ backgroundColor: "#333", color: "#fff" }}>
      <Container
        maxWidth={false}
        className='flexColumn'
        sx={{
          gap: 10,
          display: "flex",
        }}
      >
        <Box
          className='flexRow'
          sx={{
            width: 1,
            display: "grid",
            gridTemplateColumns: { xxs: "1fr", sm: "1fr 1fr" },
            alignItems: "flex-start",
            gap: "inherit",
          }}
        >
          <Box className='flexColumn' sx={{ alignItems: "flex-start", gap: 5 }}>
            <Title />
            <Box
              sx={{
                alignItems: "flex-start",

                display: "grid",
                gridTemplateColumns: { xxs: "1fr", sm: "1fr 1fr" },
                gap: "inherit",
              }}
            >
              <Hours />
              <Box className='flexColumn' gap='inherit'>
                <Contact />
                <Location />
              </Box>
            </Box>
          </Box>
          <Links />
        </Box>

        <Attribution />
      </Container>
    </Paper>
  );
}

export default Footer;

function Hours() {
  return (
    <Box
      className='flexColumn'
      gap={2}
      sx={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: 1,
        height: 1,
        color: "inherit",
      }}
    >
      <Typography
        variant='h6'
        sx={{ fontFamily: fonts.display, color: "primary.main" }}
      >
        Hours:
      </Typography>
      {companyData.hours.map(data => (
        <Box
          className='flexColumn'
          maxWidth='sm'
          gap={1}
          sx={{ alignItems: "flex-start" }}
        >
          <Typography variant='p' fontWeight={300}>
            {data.abrievDay}
          </Typography>
          {/* <Typography variant='p'>{data.hours}</Typography> */}
          {data.hours === "*appt. only" ? (
            <ArrowLink color='inherit'>{data.hours}</ArrowLink>
          ) : (
            <Typography variant='p'>{data.hours}</Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

function Links() {
  return (
    <Box
      className='flexColumn'
      gap={{ xxs: 5, mobile: 3 }}
      sx={{
        height: 1,
        flex: 1,
        flexDirection: { xxs: "column", mobile: "row", sm: "column" },
        flexWrap: "wrap",

        // border: 1,
        alignItems: { xxs: "center", sm: "flex-end" },
        justifyContent: "flex-start",
        // color: "inherit",
      }}
    >
      {links.map(link => (
        <Link
          component={RouterLink}
          variant='p'
          sx={{
            padding: 1,
            fontFamily: fonts.secondary,
            fontWeight: 600,
            color: "secondary.main",
          }}
        >
          {link.title}
        </Link>
      ))}
    </Box>
  );
}

function Contact() {
  return (
    <Box
      className='flexColumn'
      gap={2}
      sx={{ alignItems: "flex-start", width: 1, color: "inherit" }}
    >
      <Typography
        variant='h6'
        sx={{ fontFamily: fonts.display, color: "primary.main" }}
      >
        Contact:
      </Typography>
      <Link component={RouterLink} variant='p' color='secondary.main'>
        {companyData.email}
      </Link>
      <Link component={RouterLink} variant='p' color='secondary.main'>
        {companyData.phone}
      </Link>
    </Box>
  );
}

function Location() {
  return (
    <Box
      className='flexColumn'
      gap={2}
      sx={{ alignItems: "flex-start", width: 1, color: "inherit" }}
    >
      <Typography
        variant='h6'
        // fontWeight={400}
        sx={{ fontFamily: fonts.display, color: "primary.main" }}
      >
        Location:
      </Typography>
      <Typography variant='p'>{companyData.address}</Typography>
    </Box>
  );
}

function Title() {
  return (
    <Box className='flexColumn' gap={1}>
      <Typography
        variant='h4'
        textAlign='left'
        sx={{
          fontFamily: fonts.secondary,
          fontWeight: 700,
          width: 1,
          // color: "inherit",
          color: "primary.main",
        }}
      >
        Thomas Mitchell Clothiers
      </Typography>
      <Typography
        variant='h6'
        textAlign='left'
        sx={{
          fontFamily: fonts.display,
          // fontWeight: 600,
          width: 1,
          marginBottom: 6,
          color: "primary.main",
        }}
      >
        expert tailoring for personalized elegance
      </Typography>
    </Box>
  );
}

function Attribution() {
  return (
    <Box
      className='flexColumn'
      gap={2}
      sx={{ width: 1, border: 0, color: "inherit" }}
    >
      <Typography variant='h7' sx={{ fontSize: 12, fontFamily: fonts.primary }}>
        Copyright 2024. All right reserved
      </Typography>
      <Typography variant='h7' sx={{ fontSize: 10, fontFamily: fonts.primary }}>
        Images from stock website
      </Typography>
    </Box>
  );
}
