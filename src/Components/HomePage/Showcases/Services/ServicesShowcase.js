import { Container, Typography, Box } from "@mui/material";
import { servicesData } from "./data";
import { useShowcaseSx } from "../../../../Styles/useShowcaseSx";
import ArrowLink from "../../../../HelperComponents/ArrowLink";

function ServicesShowcase() {
  const { subtitle, title, description, btnTitle, backgroundImage } =
    servicesData;

  const { variant, sx } = useShowcaseSx();

  return (
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

        <ArrowLink>{btnTitle}</ArrowLink>
      </Container>
    </Box>
  );
}

export default ServicesShowcase;
