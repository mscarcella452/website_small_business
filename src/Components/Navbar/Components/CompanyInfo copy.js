import React from "react";
import { Box, IconButton, Typography, Container, Paper } from "@mui/material";
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
          sx={{ ...sx.contentContainer, maxWidth: "lg", gap: 1 }}
        >
          <Typography variant={variant.content_title} sx={sx.content_title}>
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
      <Box sx={{ ...sx.contentContainer, maxWidth: "lg", gap: 1 }}>
        <Typography variant={variant.content_title} sx={sx.content_title}>
          {companyData.email}
        </Typography>
        <Typography variant={variant.content_title} sx={sx.content_title}>
          {companyData.phone}
        </Typography>
      </Box>
    </Box>
  );
}
function LocationInfo({ ...rest }) {
  const { variant, sx } = useSectionSx();
  return (
    <Box className='flexColumn' {...rest}>
      <Box sx={{ ...sx.contentContainer, maxWidth: "lg", gap: 1 }}>
        <CompanyAddress variant={variant.content_title} sx={sx.content_title} />
      </Box>
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
//   { title: "Hours", content: <Hours /> },
//   { title: "Contact", content: <Contact /> },
//   { title: "Location", content: <CompanyAddress /> },
// ];

function CompanyInfo({ handleCloseMenu }) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateRows: "auto 1fr",
        backgroundColor: "background.primary",
        height: 1,
        width: 1,

        gap: 5,
        overflow: "scroll",
      }}
    >
      <Box
        className='flexRow'
        sx={{
          width: 1,
          height: 1,
          justifyContent: "flex-start",
          padding: ".5rem 1.5rem",
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant='h5'
          // sx={{ fontWeight: 300 }}
          fontFamily={fonts.secondary}
        >
          Thomas Mitchell Clothiers
        </Typography>
        <IconButton onClick={handleCloseMenu}>
          {/* <ChevronLeftIcon /> */}
          <CloseIcon />
          {/* <ArrowBackIosIcon /> */}
          {/* <ExpandMoreIcon /> */}
        </IconButton>
      </Box>

      <Box
        className='flexColumn'
        gap={8}
        sx={{
          width: 1,
          height: 1,

          // border: 1,

          display: "grid",
          gridTemplateRows: "auto 1fr",
          gridTemplateColumns: "1fr",
          // overflow: "auto",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          padding: 4,
        }}
      >
        {/* <Typography
          variant='h6'
          sx={{ padding: " 0 2rem" }}
          fontWeight={300}
          fontFamily={fonts.display}
        >
          expert tailoring for personalized elegance
        </Typography> */}
        {/* <Box className='flexColumn' gap={4}>
          {[<Hours abrievDay />, <Contact />, <Location />].map(info => (
            <Box
              className='flexColumn'
              gap={2}
              width={1}
              sx={{ alignItems: "flex-start", padding: " 0 2rem" }}
            >
              {info}
            </Box>
          ))}
        </Box> */}
        <Box
          gap={4}
          sx={{
            display: "Grid",
            gridTemplateColumns: "1fr 1fr",
            maxWidth: "sm",

            // padding: "0 2rem",
          }}
        >
          <Box className='flexColumn' alignItems='Flex-start' gap={4}>
            <Typography variant='h6'>Hours</Typography>
            <HoursInfo gap={4} abrievDay />
          </Box>

          <Box
            gap={4}
            className='flexColumn'
            alignItems={"flex-start"}
            justifyContent={"space-between"}
          >
            <Box className='flexColumn' alignItems='flex-start' gap={4}>
              <Typography variant='h6'>Contact</Typography>
              <ContactInfo
                gap={4}
                // alignItems={"flex-start"}
              />
            </Box>
            <Box className='flexColumn' alignItems='flex-start' gap={4}>
              <Typography variant='h6'>Location</Typography>
              <LocationInfo
                gap={4}
                // alignItems={"flex-start"}
              />
            </Box>
          </Box>
        </Box>
        {/* <Box sx={{ width: 1, height: 1 }}>
          <GoogleMap />
        </Box> */}
        {/* <Box
          className='flexRow'
          sx={{
            height: 1,
            width: 1,
          }}
        >
          <Box
            sx={{
              height: 1,
              width: 1,
              // border: 1,
              maxHeight: 800,
              background: `url(${image}) top center / cover no-repeat`,
            }}
          ></Box>
        </Box> */}
      </Box>
    </Box>
  );
}

export default CompanyInfo;
