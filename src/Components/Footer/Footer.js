import React from "react";
import {
  Paper,
  Box,
  Typography,
  Container,
  Divider,
  Link,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { fonts } from "../../Theme/ThemeContext";
import { companyData } from "../../data";
import { CompanyHours, ContactInfo } from "../ReusableComponents";

import CompanyAddress from "../../HelperComponents/CompanyAddress";
import ArrowLink from "../../HelperComponents/ArrowLink";
import { Link as RouterLink } from "react-router-dom";

// import { PageDiv, CompanyInfo } from "../../Helpers/HelperComponents";

const links = [
  { title: "Home", link: "#AboutUs" },
  { title: "About Us", link: "#AboutUs" },
  { title: "Services", link: "#Services" },
  { title: "Lookbook", link: "#Lookbook" },
  { title: "Contact Us", link: "#Contact Us" },
];

function Footer() {
  const theme = useTheme();
  const isAtLeastSm = useMediaQuery(theme.breakpoints.up("sm"));
  const info = [
    <ContactInfo
      labelProps={{ display: "none" }}
      contactProps={{
        typography: "heading.p",
        fontWeight: "500",
        variant: "p",
        color: "#999999",
        // sx: { fontSize: 14 },
      }}
    />,
    <CompanyHours
      direction='row'
      day={isAtLeastSm ? "day" : "abrievDay"}
      dayProps={{
        typography: "heading.p",
        fontWeight: "500",
        variant: "p",
        color: "#999999",
        // sx: { fontSize: 14 },
      }}
      hoursProps={{
        typography: "heading.p",
        fontWeight: "500",
        variant: "p",
        color: "#999999",
        // sx: { fontSize: 14 },
      }}
    />,
  ];
  return (
    <Stack
      variant='section'
      sx={{
        gap: 10,
        pb: 4,
        // padding: {
        //   xxs: "1rem",
        //   sm: " 2rem",
        // },
        backgroundColor: "#202020",
        // backgroundColor: "#fff",
        color: "#fff",
      }}
    >
      <Stack direction={{ xxs: "column", sm: "row" }} gap='inherit'>
        <Stack sx={{ gap: 2, flex: 1 }}>
          <Stack gap={"inherit"} mb={4}>
            <Typography
              variant={"h5"}
              typography='secondaryFont'
              textTransform={"uppercase"}
              fontWeight={700}
            >
              Thomas Mitchell Clothiers
            </Typography>
            {/* <Typography
              variant={"h6"}
              typography='primaryFont'
              fontWeight={300}
            >
              bespoke tailoring for timeless elegance.
            </Typography> */}
          </Stack>
          <Stack direction={{ xxs: "column", lg: "row" }} gap={6}>
            {info.map(component => (
              <Stack gap={1} width={1}>
                {component}
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack gap={3}>
          {links.map(link => (
            <Typography
              variant={"h6"}
              typography='secondaryFont'
              textAlign={{ xxs: "center", sm: "left" }}
              fontWeight={700}
            >
              {link.title}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack alignItems='center' gap={2}>
        <Typography
          variant='h7'
          color='#999999'
          sx={{ fontSize: 12, typography: "primaryFont", textAlign: "center" }}
        >
          Copyright 2024. All right reserved
        </Typography>
        <Typography
          variant='h7'
          color='#999999'
          sx={{ fontSize: 10, typography: "primaryFont", textAlign: "center" }}
        >
          Images from stock website
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Footer;

function Attribution({ ...rest }) {
  return (
    <Stack gap={2} {...rest}>
      <Typography
        variant='h7'
        sx={{ fontSize: 12, fontFamily: fonts.primary, textAlign: "center" }}
      >
        Copyright 2024. All right reserved
      </Typography>
      <Typography
        variant='h7'
        sx={{ fontSize: 10, fontFamily: fonts.primary, textAlign: "center" }}
      >
        Images from stock website
      </Typography>
    </Stack>
  );
}
