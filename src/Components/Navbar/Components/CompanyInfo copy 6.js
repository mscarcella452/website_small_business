import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Container,
  Paper,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import companyData from "../../../data/CompanyData";
import CompanyAddress from "../../../HelperComponents/CompanyAddress";
import { fonts } from "../../../Theme/ThemeContext";
import InfoIcon from "@mui/icons-material/Info";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import GoogleMap from "../../../HelperComponents/GoogleMap";
import ArrowLink from "../../../HelperComponents/ArrowLink";
import { useSectionSx } from "../../../Styles/useSectionSx";
import { useShowcaseSx } from "../../../Styles/useShowcaseSx";

const image =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

// const Hours = ({ abrievDay }) => {
//   const comapnyHours = companyData.hours.map(data => (
//     <Box className='flexColumn' gap={1} alignItems={"flex-start"}>
//       <Typography variant='p' fontWeight={350}>
//         {abrievDay ? data.abrievDay : data.day}:
//       </Typography>

//       <Typography variant='p' fontWeight={350}>
//         {data.hours}
//       </Typography>
//     </Box>
//   ));
//   return (
//     <>
//       <Typography
//         variant='h7'
//         fontFamily={fonts.primary}
//         textTransform={"lowercase"}
//         fontWeight={300}
//         mb={1}
//       >
//         Hours
//       </Typography>
//       {comapnyHours}
//     </>
//   );
// };

function HoursInfo({ abrievDay, ...rest }) {
  const { variant, sx } = useSectionSx();
  return (
    <Box className='flexColumn' {...rest}>
      {companyData.hours.map((data, index) => (
        <Box
          key={index}
          sx={{ ...sx.contentContainer, maxWidth: "lg", gap: 0 }}
        >
          <Typography variant={variant.content_p} sx={sx.content_p}>
            {abrievDay ? data.abrievDay : data.day}:
          </Typography>
          {data.hours === "*appt. only" ? (
            <ArrowLink>{data.hours}</ArrowLink>
          ) : (
            <Typography variant={variant.content_p} sx={sx.content_p}>
              {data.hours}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
function ContactInfo({ ...rest }) {
  const { variant, sx } = useSectionSx();
  return (
    <Box className='flexColumn' {...rest}>
      <Typography variant={variant.content_p} sx={sx.content_p}>
        {companyData.email}
      </Typography>
      <Typography variant={variant.content_p} sx={sx.content_p}>
        {companyData.phone}
      </Typography>
    </Box>
  );
}
function LocationInfo({ ...rest }) {
  const { variant, sx } = useSectionSx();
  return (
    <Box className='flexColumn' {...rest}>
      <CompanyAddress variant={variant.content_p} sx={sx.content_p} />
    </Box>
  );
}

const Contact = () => (
  <>
    <Typography
      variant='h7'
      fontFamily={fonts.primary}
      textTransform={"lowercase"}
      fontWeight={300}
      mb={1}
    >
      Contact
    </Typography>
    <Typography variant='p' fontWeight={350}>
      {companyData.email}
    </Typography>
    <Typography variant='p' fontWeight={350}>
      {companyData.phone}
    </Typography>
  </>
);

const Location = () => (
  <>
    <Typography
      variant='h7'
      fontFamily={fonts.primary}
      textTransform={"lowercase"}
      fontWeight={300}
      mb={1}
    >
      Location
    </Typography>
    <CompanyAddress variant='p' fontWeight={350} />
    {/* <Typography variant='p' fontWeight={350}>
      {companyData.address}
    </Typography> */}
  </>
);

// const infoData = [
//   { p: "Hours", content: <Hours /> },
//   { p: "Contact", content: <Contact /> },
//   { p: "Location", content: <CompanyAddress /> },
// ];

function CompanyInfo({ handleCloseMenu }) {
  //  const { subtitle, title, description, btnTitle, backgroundImage } =
  //    servicesData;

  const { variant, sx } = useSectionSx();

  return (
    <Box
      backgroundColor='background.primary'
      sx={{
        display: "Grid",
        gridTemplateRows: { xxs: "1fr auto", lg: "1fr auto" },
        height: 1,
        // gap: 5,
      }}
    >
      <Box
        className='flexRow'
        sx={{
          height: 1,
          width: 1,
          p: 1,
          justifyContent: "flex-end",
          alignItems: "flex-start",

          background: `url(${image}) top center / cover no-repeat`,
          position: "relative",
          "&:before": {
            // content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "#000",
            opacity: 0.3,
          },
        }}
      >
        {/* <IconButton onClick={handleCloseMenu}>
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton> */}
      </Box>

      <Container
        className='flexColumn'
        sx={{
          padding: 2,
          display: "flex",
          gap: 5,
          position: "relative",

          pt: 5,
        }}
      >
        {/* <IconButton
          onClick={handleCloseMenu}
          sx={{ position: "absolute", top: "1rem", right: "1rem" }}
        >
          <CloseIcon />
        </IconButton> */}
        <Box className='flexColumn' gap={1} sx={{ width: 1 }}>
          <Typography
            variant='h5'
            fontFamily={fonts.secondary}
            textAlign={"center"}
          >
            Thomas Mitchell Clothiers
          </Typography>
          {/* <Typography variant='p' fontFamily={fonts.display}>
            expert tailoring for personalized elegance
          </Typography> */}
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gridTemplateAreas: `"hours contact"
                            "hours location"`,
            width: 1,

            padding: 2,
          }}
        >
          <Box
            className='flexColumn'
            alignItems='flex-start'
            sx={{ gap: 2, gridArea: "hours", marginRight: "150px" }}
          >
            <Typography
              variant={variant.content_title}
              sx={{
                ...sx.content_title,
                fontWeight: 350,
                fontFamily: fonts.primary,
                // color: "#333",
                color: "#000",
                textTransform: "lowercase",
              }}
            >
              -hours-
            </Typography>
            <HoursInfo gap={2} abrievDay />
          </Box>

          <Box
            className='flexColumn'
            alignItems='flex-start'
            justifyContent='flex-start'
            sx={{ gap: 2, gridArea: "contact" }}
          >
            <Typography
              variant={variant.content_title}
              sx={{
                ...sx.content_title,
                fontWeight: 350,
                fontFamily: fonts.primary,
                // color: "#333",
                color: "#000",
                textTransform: "lowercase",
              }}
            >
              -Contact-
            </Typography>
            <ContactInfo gap={2} alignItems='flex-start' />
          </Box>
          <Box
            className='flexColumn'
            alignItems='flex-start'
            justifyContent='flex-end'
            sx={{ gap: 2, gridArea: "location" }}
          >
            <Typography
              variant={variant.content_title}
              sx={{
                ...sx.content_title,
                fontWeight: 350,
                fontFamily: fonts.primary,
                // color: "#333",
                color: "#000",
                textTransform: "lowercase",
              }}
            >
              -Location-
            </Typography>
            <LocationInfo gap={2} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default CompanyInfo;
