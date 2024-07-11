import { useTheme, useMediaQuery, Typography, Stack } from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";
import { galleryData } from "./data.js";

function GalleryShowcase() {
  const theme = useTheme();
  const { subtitle, title, p, link } = galleryData;
  const { variants } = theme.typography;

  return (
    <>
      <Stack variant='heading'>
        {/* <Typography
          variant={variants.heading.subtitle}
          typography={"heading.subtitle"}
        >
          {subtitle}
        </Typography> */}
        <Typography
          variant={variants.heading.title}
          typography={"heading.title"}
        >
          {title}
        </Typography>
        <Typography variant={variants.heading.p} typography={"heading.p"}>
          {p}
        </Typography>
        <ArrowLink variant={variants.heading.link} typography='heading.link'>
          {link}
        </ArrowLink>
      </Stack>
    </>
  );
}

export default GalleryShowcase;
