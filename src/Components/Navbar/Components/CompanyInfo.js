import { cloneElement, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Container,
  Paper,
  Divider,
  Link,
  Button,
  useMediaQuery,
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
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const image =
  "https://i0.wp.com/tailoringclass.in/wp-content/uploads/2017/07/Advanced-Tailoirng-Classes.jpg";

const backgroundImage = "https://wallpapercave.com/wp/wp3751665.jpg";

function CompanyInfo() {
  const theme = useTheme();

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
      zIndex: -1,
    },
  };

  return (
    <>
      <Container
        maxWidth='false'
        className='flexColumn'
        sx={{
          gap: 2,

          p: theme.padding.section,

          display: "flex",
          alignItems: "flex-start",
          // gridTemplateColumns: { xxs: "1fr", md: "auto 1fr", lg: "1fr 1fr" },
          // gridTemplateRows: { xxs: "auto 1fr", md: "1fr" },
          flexGrow: 1,
          gap: 2,
          height: 1,

          justifyContent: "space-between",
          maxHeight: 1024,

          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            width: 1,
            left: 0,
            right: 0,
            height: theme.navbar.height,
            backgroundColor: "background.primary",
          },
        }}
      >
        {/* <Typography
          variant='h5'
          typography='heading_lg'
          // colofontColor.darkr.light'
          sx={{ maxWidth: { xxs: "xs", lg: "mobile" } }}
        >
          hours / contact / location
        </Typography> */}
        {/* <Divider sx={{ width: 1, maxWidth: "xs", height: 2.5 }} /> */}
        <Box
          className='flexColumn'
          gap={2}
          width={1}
          sx={{
            maxWidth: "xs",
          }}
        >
          {/* <QueryBuilderIcon
            sx={{
              color: "fontColor.dark",
              alignSelf: "flex-start",
            }}
          /> */}
          {/* <Typography
            variant='h6'
            typography={"primaryFont"}
            sx={{ alignSelf: "flex-start" }}
          >
            Hours:
          </Typography> */}

          <Typography
            variant='h5'
            typography='heading_lg'
            color='fontColor.dark'
            sx={{
              alignSelf: "flex-start",
              mb: 1,
              borderColor: "#d2d2d2",
            }}
          >
            Hours:
          </Typography>

          {companyData.hours.map((data, index) => (
            <Box
              className='flexRow'
              key={index}
              sx={{ justifyContent: "space-between", width: 1, gap: 1 }}
            >
              <Typography variant='p' typography={"actionFont"}>
                {data.abrievDay}:
              </Typography>

              {data.hours === "*appt. only" ? (
                <ArrowLink
                  color='inherit'
                  variant='p'
                  typography={"secondaryFont"}
                >
                  {data.hours}
                </ArrowLink>
              ) : (
                <Typography variant='p' typography={"actionFont"}>
                  {data.hours}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
        {/* <Divider sx={{ width: 1, maxWidth: "xs", height: 2.5 }} />
      <Divider sx={{ width: 1, maxWidth: "xs", height: 2.5 }} /> */}
        <Box
          className='flexColumn'
          gap={2}
          width={1}
          sx={{
            maxWidth: "xs",
            alignItems: "flex-start",
            order: 1,
          }}
        >
          {/* <QueryBuilderIcon
            sx={{
              color: "fontColor.dark",
              alignSelf: "flex-start",
            }}
          /> */}

          <Typography
            variant='h5'
            typography='heading_lg'
            color='fontColor.dark'
            sx={{
              alignSelf: "flex-start",
              mb: 1,
              borderColor: "#d2d2d2",
            }}
          >
            Contact:
          </Typography>

          <Typography variant='p' typography={"actionFont"}>
            {companyData.email}
          </Typography>
          <Typography variant='p' typography={"actionFont"}>
            {companyData.phone}
          </Typography>
        </Box>
        {/* <Divider sx={{ width: 1, maxWidth: "xs", height: 2.5 }} />
      <Divider sx={{ width: 1, maxWidth: "xs", height: 2.5 }} /> */}
        <Box
          className='flexColumn'
          gap={2}
          width={1}
          sx={{
            maxWidth: "xs",
            order: -1,
          }}
        >
          {/* <QueryBuilderIcon
            sx={{
              color: "fontColor.dark",
              alignSelf: "flex-start",
            }}
          /> */}

          <Typography
            variant='h5'
            typography='heading_lg'
            color='fontColor.dark'
            sx={{
              alignSelf: "flex-start",
              mb: 1,
              borderColor: "#d2d2d2",
            }}
          >
            Location:
          </Typography>

          <CompanyAddress variant='h1p' typography={"actionFont"} />
          {/* <Typography variant='p' typography={"actionFont"}>
            {companyData.address}
          </Typography> */}
        </Box>
        {/* <Divider sx={{ width: 1, maxWidth: "xs", height: 2.5 }} /> */}
        {/* <Box
        className='flexColumn'
        sx={{
          gap: 2,
          alignItems: "flex-start",
          justifyContent: "flex-end",

          height: 1,
          display: "none",
        }}
      >
        <Typography
          variant='p'
          sx={{
            maxWidth: "mobile",
            fontWeight: 300,
            typography: "primaryFont",
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

            // width: { xxs: 1, sm: "auto" },
            // aspectRatio: { xxs: "auto", sm: 1.5 },
            // height: { xxs: 1, sm: 1 },
            width: 1,
            height: 1,
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
      </Box> */}
      </Container>
    </>
  );
}

export default CompanyInfo;
