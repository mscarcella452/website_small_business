import React from "react";
import { Paper, Box, Typography, Container, Divider } from "@mui/material";
// import { PageDiv, CompanyInfo } from "../../Helpers/HelperComponents";

const links = [
  { title: "About Us", link: "#AboutUs" },
  { title: "Services", link: "#Services" },
  { title: "Hours", link: "#Hours" },
  { title: "Contact Us", link: "#Contact Us" },
];

const companyInfo = [
  {
    title: "Location:",
    info: ["8721 M Central Avenue,", "Los Angeles, CA 90036"],
  },
  {
    title: "Contact:",
    info: ["hello@yourdomain.com", "+12 9 8765 4321"],
  },
  {
    title: "Hours:",
    info: ["Sun – Mon: *appt. only", "Tues: Closed", "Wed – Sat: 9am - 6pm"],
  },
];

function Footer() {
  return (
    <Paper variant='section'>
      <Container maxWidth={false} className='flexColumn' sx={{ gap: 5 }}>
        <Box
          gap={5}
          sx={{
            width: 1,
            display: "grid",
            gridTemplateColumns: {
              xxs: "1fr",
              sm: "1fr 1fr",
              md: "1fr  1fr  1fr",
            },
            "& > :last-child": {
              gridColumn: { xxs: "span 1", sm: "span 2", md: "span 1" }, // Make the last child span 2 columns
            },
            gridTemplateRows: "auto",
            justifyItems: "center",
          }}
        >
          <CompanyInfo />
        </Box>
        <Divider sx={{ width: 1, maxWidth: "md", height: 2 }} />
        <Box
          className='flexRow'
          gap={{ xxs: 5, mobile: 1 }}
          sx={{
            justifyContent: "space-between",
            flexDirection: { xxs: "column", mobile: "row" },
            width: 1,
            maxWidth: "sm",
          }}
        >
          {links.map(link => (
            <Typography
              variant='label'
              sx={{ textTransform: "uppercase", padding: 1 }}
            >
              {link.title}
            </Typography>
          ))}
        </Box>
        <Box className='flexColumn' gap={2} sx={{ width: 1, maxWidth: "sm" }}>
          <Typography variant='heading3' textAlign='center' marginBottom={1}>
            TMC
          </Typography>
          <Typography variant='label' fontSize={{ xxs: 12 }}>
            Copyright 2023. All right reserved
          </Typography>
          <Typography variant='label' fontSize={{ xxs: 12 }}>
            Images from stock website
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}

export default Footer;

export function CompanyInfo({ alignItems = "center" }) {
  return (
    <>
      {companyInfo.map(({ title, info }, index) => (
        <>
          <Box
            className='flexColumn'
            sx={{
              alignItems: alignItems,
              height: 1,

              // border: 1,
              // width: 1,
            }}
          >
            <Typography
              variant='subHeading'
              fontWeight={700}
              sx={{ marginBottom: 2 }}
            >
              {title}
            </Typography>
            <Box className='flexColumn' gap={1} sx={{ height: 1 }}>
              {info.map(information => (
                <Typography variant='p'>{information}</Typography>
              ))}
            </Box>
          </Box>

          {index !== 2 && (
            <Divider
              sx={{
                display: { xxs: "block", sm: "none" },
                width: 1,
                maxWidth: 100,
                height: 2,
              }}
            />
          )}
        </>
      ))}
    </>
  );
}
