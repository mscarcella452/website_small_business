import { Typography, Stack, useTheme } from "@mui/material";
import { heroSectionData } from "./data.js";
import { useResponsiveThemeValue } from "../../../../Hooks";
import { ArrowLink } from "../../../../HelperComponents";

function HeroSection({ data = heroSectionData }) {
  const theme = useTheme();
  const { heading, link, backgroundImage } = data;
  const navbarHeight = useResponsiveThemeValue("navbar.height");

  const containerMinHeight = {
    // xxs: `min(calc(100vh - ${navbarHeight}), 400px)`,

    // mobile: `min(calc(100vh - ${navbarHeight}), 628px)`,
    // mobile: `min(calc(100vh - ${navbarHeight}), 500px)`,
    xxs: `min(calc(100vh - ${navbarHeight}), 628px)`,
  };

  return (
    <Stack
      sx={{
        backgroundColor: "background",
        minHeight: containerMinHeight,
        mt: navbarHeight,
        p: { xxs: 2, md: 4 },
        pt: { xxs: 0, md: 0 },
      }}
    >
      <Stack
        sx={{
          flexGrow: 1,
          // background: `url(${backgroundImage}) top center / cover no-repeat`,
          background: `url(${backgroundImage}) center ${navbarHeight} / cover no-repeat fixed`,
          backgroundColor: "dark.secondary",
          backgroundBlendMode: "overlay",
          justifyContent: "end",

          p: theme.spacing(5),
        }}
      >
        <Stack variant='grid' alignItems={{ xxs: "start", md: "end" }}>
          <Typography
            variant='h2'
            typography='title'
            color='light.primary'
            fontWeight={700}
            sx={{ maxWidth: { xxs: "xs", sm: "mobile" } }}
          >
            {heading}
          </Typography>

          <ArrowLink
            to={link.path}
            variant='h5'
            typography='arrowLink'
            sx={{
              color: "light.primary",
              fontWeight: 700,
              justifySelf: { xxs: "start", md: "end" },
            }}
          >
            {link.title}
          </ArrowLink>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HeroSection;
