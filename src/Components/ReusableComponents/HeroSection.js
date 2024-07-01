import { Paper, Box, Typography, Container } from "@mui/material";
import { ArrowLink } from "../../HelperComponents";
import { useResponsiveThemeValue } from "../../Hooks";

function HeroSection({ data }) {
  const { heading, btnTitle, backgroundImage } = data;
  const navbarHeight = useResponsiveThemeValue("navbar.height");

  const containerMinHeight = {
    xxs: `min(calc(100vh - ${navbarHeight}), 400px)`,
    mobile: `min(calc(100vh - ${navbarHeight}), 628px)`,
    md: `min(calc(100vh - ${navbarHeight}), 618px)`,
  };

  return (
    <Box
      id='Home'
      sx={{
        display: "flex",
        minHeight: containerMinHeight,
        mt: navbarHeight,
        p: { xxs: 0, md: "0 2rem 2rem 2rem" },
        backgroundColor: "background.primary",
      }}
    >
      <Paper
        variant='section'
        className='flexColumn'
        sx={{
          flexGrow: 1,
          background: `url(${backgroundImage}) center ${navbarHeight} / cover no-repeat fixed`,
          backgroundColor: "fontColor.p",
          backgroundBlendMode: "overlay",
          justifyContent: "flex-end",
          borderRadius: { xxs: 0, md: 1 },
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          variant
          sx={{
            display: "grid",
            gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
            alignItems: "flex-end",
            gap: 6,
          }}
        >
          <Typography
            variant='h3'
            typography='heading_lg'
            color='fontColor.light'
            sx={{ maxWidth: { xxs: "xs", lg: "mobile" } }}
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
            }}
          >
            {btnTitle}
          </ArrowLink>
        </Container>
      </Paper>
    </Box>
  );
}

export default HeroSection;
