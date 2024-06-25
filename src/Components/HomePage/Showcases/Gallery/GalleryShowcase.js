import { Box, Container, Typography, Paper } from "@mui/material";
import { useShowcaseSx } from "../../../../Styles/useShowcaseSx.js";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";
import { galleryData } from "./data.js";

function GalleryShowcase() {
  const { subtitle, title, description, btnTitle, backgroundImage } =
    galleryData;

  const { variant, sx } = useShowcaseSx();

  return (
    <Paper variant='showcase'>
      <Box sx={sx.showcase_box}>
        <Box
          sx={{
            ...sx.background_image,
            backgroundImage: `url(${backgroundImage})`,
          }}
        />
        <Container sx={sx.showcase_container}>
          <Typography variant={variant.subtitle} sx={sx.subtitle}>
            {subtitle}
          </Typography>
          <Typography variant={variant.title} sx={sx.title}>
            {title}
          </Typography>
          <Typography variant={variant.heading_p} sx={sx.heading_p}>
            {description}
          </Typography>
          <ArrowLink sx={sx.heading_link}>{btnTitle}</ArrowLink>
        </Container>
      </Box>
    </Paper>
  );
}

export default GalleryShowcase;
