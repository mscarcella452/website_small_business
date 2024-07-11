import { Paper, Box, Typography, Container, Stack } from "@mui/material";
import { ArrowLink } from "../../HelperComponents";
import { useResponsiveThemeValue } from "../../Hooks";

function HeroSection({ data }) {
  const { heading, btnTitle, backgroundImage } = data;
  const navbarHeight = useResponsiveThemeValue("navbar.height");

  const containerMinHeight = {
    xxs: `min(calc(100vh - ${navbarHeight}), 400px)`,
    // mobile: `min(calc(100vh - ${navbarHeight}), 628px)`,
    // mobile: `min(calc(100vh - ${navbarHeight}), 500px)`,
    mobile: `min(calc(100vh - ${navbarHeight}), 628px)`,
  };

  return (
    <Stack
      sx={{
        minHeight: containerMinHeight,
        mt: navbarHeight,
        p: { xxs: 2, md: 4 },
        pt: { xxs: 0, md: 0 },

        backgroundColor: "#FFF",
      }}
    >
      <Stack
        variant='section'
        sx={{
          flexGrow: 1,
          background: `url(${backgroundImage}) top center / cover no-repeat`,
          // background: `url(${backgroundImage}) center ${navbarHeight} / cover no-repeat fixed`,
          backgroundColor: "fontColor.p",
          backgroundBlendMode: "overlay",
          justifyContent: "end",
          py: "50px",
        }}
      >
        {/* <Stack gap={4}> */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
            alignItems: "flex-end",
            gap: 6,
          }}
        >
          <Typography
            variant='h2'
            typography='heroSection.heading'
            color='fontColor.light'
            sx={{ maxWidth: { xxs: "xs", sm: "mobile" } }}
          >
            {heading}
          </Typography>

          <ArrowLink
            variant='h5'
            typography='secondaryFont'
            sx={{
              color: "fontColor.light",
              fontWeight: 700,
              justifySelf: { xxs: "flex-start", md: "flex-end" },
              maxWidth: "mobile",
              width: 1,
            }}
          >
            {btnTitle}
          </ArrowLink>
        </Box>
      </Stack>
    </Stack>
  );
}

export default HeroSection;
