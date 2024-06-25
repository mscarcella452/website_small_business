import { cloneElement } from "react";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import GoogleMap from "../../../HelperComponents/GoogleMap";
import ArrowLink from "../../../HelperComponents/ArrowLink";
import { useSectionSx } from "../../../Styles/useSectionSx";
import { useShowcaseSx } from "../../../Styles/useShowcaseSx";
import { useTheme } from "@mui/material";

const image =
  "https://i0.wp.com/tailoringclass.in/wp-content/uploads/2017/07/Advanced-Tailoirng-Classes.jpg";

function HoursInfo({
  typographyVariant,
  typographyProps,
  mappedContainerProps = { className: "flexRow" },
  abrievDay,
  ...rest
}) {
  return (
    <Box className='flexColumn' {...rest}>
      {companyData.hours.map((data, index) => (
        <Box key={index} {...mappedContainerProps} sx={{ gap: "inherit" }}>
          <Typography variant={typographyVariant} {...typographyProps}>
            {abrievDay ? data.abrievDay : data.day}:
          </Typography>

          {data.hours === "*appt. only" ? (
            <ArrowLink color='inherit'>{data.hours}</ArrowLink>
          ) : (
            <Typography variant={typographyVariant} {...typographyProps}>
              {data.hours}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}
function ContactInfo({ typographyVariant, typographyProps, ...rest }) {
  return (
    <Box className='flexColumn' {...rest}>
      {[companyData.email, companyData.phone].map(contact => (
        <Typography variant={typographyVariant} {...typographyProps}>
          {contact}
        </Typography>
      ))}
    </Box>
  );
}
function LocationInfo({ typographyVariant, typographyProps, ...rest }) {
  return (
    <Box className='flexColumn' {...rest}>
      <CompanyAddress variant={typographyVariant} {...typographyProps} />
    </Box>
  );
}

function CompanyInfo({ handleCloseMenu }) {
  const theme = useTheme();
  const infoComponents = [<HoursInfo />, <ContactInfo />, <LocationInfo />];
  const fontColor = "fontColor.light";

  const backgroundSx = {
    "&:before": {
      content: "''",
      position: "absolute",
      background: `linear-gradient(to top, ${theme.palette.background.secondary} 0%, rgba(255, 255, 255, 0) 300%), 
                 url(${image}) top center / cover no-repeat`,
      filter: "grayscale(100%)",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.55,
    },
  };

  return (
    <Box
      backgroundColor={"background.secondary"}
      sx={{
        height: 1,
        position: "relative",
        p: 2,
        gap: 5,
        ...backgroundSx,
      }}
    >
      <IconButton onClick={handleCloseMenu}>
        <CloseIcon sx={{ color: fontColor }} />
      </IconButton>
      <Container
        className='flexColumn'
        sx={{
          display: "flex",
          gap: "inherit",
          height: 1,
          justifyContent: "flex-start",
          p: 4,
          position: "relative",
        }}
      >
        <Box className='flexColumn' gap={1} sx={{ width: 1 }}>
          <Typography
            variant='h5'
            fontFamily={fonts.secondary}
            textAlign={"center"}
            color={fontColor}
            fontWeight={600}
          >
            {companyData.name}
          </Typography>
        </Box>
        <Box
          className='flexColumn'
          sx={{
            gap: 5,
            width: 1,
            padding: 2,
            maxHeight: 500,
            height: 1,
            justifyContent: "space-between",
          }}
        >
          {infoComponents.map((infoComponent, index) =>
            cloneElement(infoComponent, {
              gap: 2,
              alignItems: "flex-start",
              width: 1,
              key: index,
              color: fontColor,
              abrievDay: index === 0,
              typographyVariant: "p",
              typographyProps: {
                fontFamily: fonts.display,
                fontWeight: 500,
              },
            })
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default CompanyInfo;
