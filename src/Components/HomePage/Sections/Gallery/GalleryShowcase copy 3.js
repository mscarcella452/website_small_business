import { useTheme, useMediaQuery, Typography, Stack, Box } from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";
import { galleryData } from "./data.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function GalleryShowcase() {
  const theme = useTheme();
  const { subtitle, title, p, link } = galleryData;
  const { variants } = theme.typography;

  return (
    <>
      <Stack gap={4}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
            gap: { xxs: theme.spacing(8), md: theme.spacing(4) },
            alignItems: "flex-end",
            order: 1,
          }}
        >
          <Typography
            variant={"h1"}
            typography={"displayFont"}
            sx={{
              // fontWeight: "300",
              textAlign: "left",
            }}
          >
            {/* our lookbook */}
            {/* what is bespoke tailoring? */}
          </Typography>
          <ArrowLink variant={"h6"} typography='heading.link' sx={{ width: 1 }}>
            Explore Our Lookbook
          </ArrowLink>
        </Box>
        <Grid container spacing={theme.spacing(4)}>
          {galleryImages.map((image, index) => (
            <Grid xxs={12} md={6}>
              <Box
                sx={{
                  // height: 1,
                  display: {
                    xxs: [0].includes(index) ? "block" : "none",
                    md: [0, 1].includes(index) ? "block" : "none",
                  },
                  aspectRatio: 1,

                  width: 1,
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
                component={"img"}
                src={image}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default GalleryShowcase;

const galleryImages = [
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
];
