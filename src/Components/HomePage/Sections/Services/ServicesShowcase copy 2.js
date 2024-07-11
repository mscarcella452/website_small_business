import {
  Container,
  Typography,
  Box,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import { servicesData } from "./data";
import { useShowcaseSx } from "../../../../Styles/useShowcaseSx";
import ArrowLink from "../../../../HelperComponents/ArrowLink";

function ServicesShowcase() {
  const theme = useTheme();
  const { variants } = theme.typography;
  const { subtitle, title, description, btnTitle, backgroundImage } =
    servicesData;

  const { variant, sx } = useShowcaseSx();

  return (
    <Box
      // variant='showcase_container'
      sx={{
        backgroundColor: "lightgrey",
        display: "grid",
        gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
        // alignItems: "center",
      }}
    >
      <Box
        sx={{
          minHeight: 400,
          height: 1,
          width: 1,
          objectFit: "cover",
          objectPosition: "center center",
        }}
        component={"img"}
        src={backgroundImage}
      />

      <Stack variant='showcase_content' sx={{}}>
        <Typography variant={"h2"} typography={"displayFont"}>
          {title}
        </Typography>
        <Typography variant={"p"} typography={"subHeading.p"}>
          {description}
        </Typography>
        <ArrowLink variant={variants.heading.link} typography='heading.link'>
          {btnTitle}
        </ArrowLink>
      </Stack>
    </Box>
  );
}

export default ServicesShowcase;
