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
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function ServicesShowcase() {
  const theme = useTheme();
  const { variants } = theme.typography;
  const { subtitle, title, description, btnTitle, backgroundImage } =
    servicesData;

  const { variant, sx } = useShowcaseSx();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xxs: "1fr", lg: "1fr 1fr" },
        gridTemplateRows: { xxs: "auto 1fr", lg: "1fr" },
        gap: { xxs: theme.spacing(24), lg: theme.spacing(8) },

        // alignItems: "center",
      }}
    >
      <Box
        sx={{
          maxHeight: 600,
          // height: 400,
          // height: 1,
          aspectRatio: 1,
          width: 1,

          // order: { xxs: -1, lg: 1 },
          objectFit: "cover",
          objectPosition: "center center",
        }}
        component={"img"}
        src={backgroundImage}
      />
      {/* <Grid container spacing={theme.spacing()}>
        {[0, 1, 2, 3].map(image => (
          <Grid xxs={6}>
            <Box
              sx={{
                // minHeight: 400,
                // height: 400,
                // height: 1,
                aspectRatio: 1,
                width: 1,

                // order: { xxs: 1, md: -1 },
                objectFit: "cover",
                objectPosition: "center center",
              }}
              component={"img"}
              src={backgroundImage}
            />
          </Grid>
        ))}
      </Grid> */}

      <Stack
        sx={{
          gap: theme.spacing(4),
          // backgroundColor: "background.primary",
          // padding: theme.spacing(4),
          justifyContent: "center",
          // order: -1,
          // height: 1,
        }}
      >
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
