import { Paper, Box, Typography, Container, Stack } from "@mui/material";
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
    <Box sx={{ backgroundColor: "#fff" }}>
      <Stack variant='section' alignItems={"start"}>
        <Stack
          // variant='heading'
          // direction='row'
          sx={{
            border: 0,
            // minHeight: 350,
            alignItems: "center",
            gap: 5,
          }}
        >
          <Box sx={{ width: 1 }}>
            <Typography
              variant={"h2"}
              typography={"primaryFont"}
              sx={{
                fontWeight: 600,
                textAlign: "left",
                color: "#333",
              }}
            >
              Thomas Mitchell Clothiers
            </Typography>
          </Box>
          <Stack gap={"inherit"} maxWidth={"sm"} alignSelf='start'>
            <Typography
              variant={"h3"}
              typography={"primaryFont"}
              fontWeight={300}
            >
              {/* At Thomas Mitchell Clothiers, we combine tradition and precision
              to offer exceptional tailoring services tailored just for you.
              From bespoke suits to perfect alterations, we ensure every stitch
              meets your highest standards. Discover the perfect fit and elevate
              your style today. */}
              bespoke tailoring for timeless elegance.
            </Typography>
            <ArrowLink
              variant='h6'
              typography='secondaryFont'
              sx={{
                color: "#333",
                fontWeight: 700,
                alignSelf: { xxs: "flex-start", md: "flex-end" },
                width: 1,
              }}
            >
              {btnTitle}
            </ArrowLink>
          </Stack>
        </Stack>
      </Stack>
      <Box
        component={"img"}
        src={backgroundImage}
        // src={image.src}
        // alt={image.alt}
        sx={{
          width: 1,
          aspectRatio: 1.75,
          objectFit: "cover",
          objectPosition: "top center",
          minHeight: 400,
        }}
      />
    </Box>
  );
}

export default HeroSection;
