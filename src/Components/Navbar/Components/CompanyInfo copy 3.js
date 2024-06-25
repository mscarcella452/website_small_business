import { cloneElement } from "react";
import {
  Box,
  IconButton,
  Typography,
  Container,
  Paper,
  Divider,
  Link,
  Button,
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
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material";
import { ChevronLeftOutlined } from "@mui/icons-material";

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

const backgroundImage = "https://wallpapercave.com/wp/wp3751665.jpg";

function CompanyInfo({ handleCloseMenu }) {
  const theme = useTheme();
  const infoComponents = [<HoursInfo />, <ContactInfo />, <LocationInfo />];
  const fontColor = "fontColor.dark";

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
    <Container
      sx={{
        gap: 4,

        display: "grid",
        gridTemplateColumns: { xxs: "1fr", md: "1fr .5fr" },
        gridTemplateRows: { xxs: "auto 1fr", md: "1fr" },
        height: "auto",
        mb: "75px",
      }}
    >
      <Box
        className='flexColumn'
        sx={{
          gap: 8,
          // width: 1,

          // padding: 2,
          // maxHeight: 500,
          height: 1,

          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Box
          className='flexRow'
          sx={{
            width: 1,
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "background.secondary",
            p: 2,
            zIndex: 9,
            height: 75,
          }}
        >
          <ArrowLink
            className='flexRow'
            gap={1}
            component={Button}
            sx={{
              // justifySelf: "flex-end",
              alignSelf: "flex-end",
              borderRadius: 0,
              typography: "secondaryFont",
            }}
          >
            Back To Menu
          </ArrowLink>
        </Box>
        <Typography
          variant='h5'
          sx={{
            maxWidth: "mobile",

            fontFamily: '"Libre Baskerville", serif',
            fontFamily: fonts.secondary,
            // mb: -4,
            // lineHeight: 2,
          }}
        >
          Hours / Contact / Location:
        </Typography>
        {infoComponents.map((infoComponent, index) =>
          cloneElement(infoComponent, {
            gap: 2,
            alignItems: "flex-start",

            key: index,
            color: fontColor,
            abrievDay: index === 0,
            typographyVariant: "p",
            typographyProps: {
              fontFamily: '"Libre Baskerville", serif',
              fontWeight: 500,
            },
          })
        )}
      </Box>
      <Box
        className='flexColumn'
        sx={{
          gap: 2,
          alignItems: "flex-start",
          justifyContent: "flex-end",

          height: 1,
        }}
      >
        <Typography
          variant='p'
          sx={{
            maxWidth: "mobile",
            fontWeight: 300,
            // fontFamily: '"Libre Baskerville", serif',
            lineHeight: 2,
          }}
        >
          Experience our personalized service on your terms. Whether you're in
          need of a fitting or a consultation, our team is here to assist you.
        </Typography>
        <Box
          component='img'
          src={backgroundImage}
          sx={{
            objectFit: "cover",
            objectPostion: "top center",

            width: { xxs: 1, sm: "auto" },
            aspectRatio: { xxs: "auto", sm: 1.5 },
            height: { xxs: 1, sm: 300 },
            order: -1,
            // display: { xxs: "none", md: "block" },

            // height: 300,
          }}
          // alt={backgroundImage.alt}
          // sx={sx.hero_image_lg}
        />
        <Box className='flexColumn' gap={3} alignItems='flex-start'>
          <ArrowLink justifySelf='flex-end'>Contact</ArrowLink>
        </Box>
      </Box>
    </Container>
  );
}

export default CompanyInfo;
