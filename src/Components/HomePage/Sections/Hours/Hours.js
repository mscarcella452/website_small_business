// import React from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { hoursData } from "./data";
import CompanyAddress from "../../../../HelperComponents/CompanyAddress";
import ArrowLink from "../../../../HelperComponents/ArrowLink";
import { useSectionSx } from "../../../../Styles/useSectionSx";
import companyData from "../../../../data/CompanyData";
import { CompanyHours } from "../../../ReusableComponents";

function Hours() {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up("md"));
  const { heading, content, image } = hoursData;
  const { heading: hv, subHeading: shv } = theme.typography.variants;

  return (
    <>
      <Stack variant='heading'>
        {heading.text.map(({ variant, typography, text }) => (
          <Typography variant={hv[variant]} typography={typography}>
            {text}
          </Typography>
        ))}
      </Stack>
      <Stack direction='row'>
        <Stack variant='content'>
          <Typography variant={shv.title} typography='subHeading.title'>
            {content.title}
          </Typography>
          <Typography variant={shv.p} typography='subHeading.p'>
            {content.description}
          </Typography>
          <ArrowLink variant={shv.link} typography='subHeading.link'>
            {content.link}
          </ArrowLink>
        </Stack>

        {showImage && (
          <Box
            className='content_img'
            component={"img"}
            src={image.src}
            alt={image.alt}
          />
        )}
      </Stack>
    </>
  );
}

export default Hours;
