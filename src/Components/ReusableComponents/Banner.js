import { Stack, Box } from "@mui/material";
import { useResponsiveThemeValue } from "../../Hooks";

const heroImages = [
  "https://images.squarespace-cdn.com/content/v1/5d817829ddc5014885c73bf0/1653873566958-GU365UOTX2CE7ZO0U4JB/TK_MTM_5_0522.JPG?format=1500w",
  "https://images.squarespace-cdn.com/content/v1/5d817829ddc5014885c73bf0/1653873627473-3RR0QIUHIEAF1MCM7ICW/TK_BS_8_0522.JPG?format=1500w",
];

function Banner({ images = heroImages }) {
  const navbarHeight = useResponsiveThemeValue("navbar.height");

  const containerMinHeight = {
    xxs: `min(calc(100vh - ${navbarHeight}), 400px)`,
    md: `min(calc(100vh - ${navbarHeight}), 550px)`,
    lg: `min(calc(100vh - ${navbarHeight}), 628px)`,
  };

  return (
    <>
      <Stack
        sx={{
          backgroundColor: "background",
          minHeight: containerMinHeight,
          mt: navbarHeight,
          p: { xxs: 2, md: 4 },
          pt: { xxs: 0, md: 0 },
        }}
      >
        <Stack variant='grid' sx={{ flexGrow: 1 }}>
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                display: index === 1 ? { xxs: "none", md: "block" } : "block",
                height: 1,
                width: 1,
                flexGrow: 1,
                background: `url(${image}) top center / cover no-repeat`,
              }}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
}

export default Banner;
