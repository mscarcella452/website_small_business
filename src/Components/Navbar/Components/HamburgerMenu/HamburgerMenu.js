import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  Button,
  Paper,
  useTheme,
  Divider,
  useMediaQuery,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import DropdownButton from "../../../../HelperComponents/DropdownButton";
import CompanyAddress from "../../../../HelperComponents/CompanyAddress";
import {
  Info,
  HoursInfo,
} from "../../../../HelperComponents/CompanyInfo./Info";

import {
  mobilePortrait,
  mobileLandscape,
} from "../../../../Theme/mediaQueries";
import { Link as RouterLink } from "react-router-dom";
import companyData from "../../../../data/CompanyData";
import { fonts } from "../../../../Theme/ThemeContext";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import GoogleMap from "../../../../HelperComponents/GoogleMap";

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
    link: "Contact Us",
    to: "/#footer",
    variant: "primary",
    component: RouterLink,
  },

  // { link: "Contact", to: "#Contact" },
];

function HamburgerMenu({ children }) {
  const theme = useTheme();
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);

  return (
    <>
      <Container
        maxWidth='md'
        className='flexColumn'
        sx={{
          display: screenSizeThreshold ? "flex" : "grid",
          gridTemplateColumns: { xxs: "1fr", sm: "1fr 1fr" },
          width: 1,
          gap: { xxs: 2, xs: 3 },
          padding: theme.padding.menu,
        }}
      >
        <Box
          sx={{
            width: 1,
            height: 1,
            display: "flex",
            flexDirection: screenSizeThreshold ? "row" : "column",
            gap: 3,
            justifyContent: "space-between",
          }}
        >
          {links.map((link, index) => (
            <>
              <Link
                key={index}
                variant={"p"}
                href={link.to}
                typography='secondaryFont'
              >
                {link.link}
              </Link>
            </>
          ))}
        </Box>

        {!screenSizeThreshold && (
          <Box
            className='flexColumn'
            sx={{ gap: 3, width: 1, maxWidth: { xxs: 1, sm: "mobile" } }}
          >
            <Divider
              variant={"navbar_horizontal"}
              sx={{ display: { xxs: "block", sm: "none" } }}
            />

            <Info title='Hours:'>
              <HoursInfo />
            </Info>
            <Divider variant={"navbar_horizontal"} />
            <Box className='companyInfo_container'>
              <Typography
                variant='h5'
                typography='heading_lg'
                color='fontColor.dark'
                sx={{ borderColor: "#d2d2d2" }}
              >
                Location:
              </Typography>
              <CompanyAddress variant='p' typography='actionFont' />
            </Box>
          </Box>
        )}
      </Container>
    </>
  );
}

export default HamburgerMenu;

function AccordionMenu({ title, variant, typography, children, ...rest }) {
  const [expanded, setExpanded] = useState(false);

  // const handleChange = panel => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  const toggleAccordion = () => setExpanded(prev => !prev);

  return (
    <Accordion
      expanded={expanded}
      onChange={toggleAccordion}
      elevation={0}
      {...rest}
    >
      {/* <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        {title}
      </AccordionSummary> */}
      <DropdownButton
        onClick={toggleAccordion}
        variant={variant}
        typography={typography}
      >
        {title}
      </DropdownButton>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
