import { useTheme, Typography, Stack } from "@mui/material";
import { ArrowLink } from "../../../../HelperComponents/index.js";
import { galleryData } from "./data.js";

function GalleryShowcase() {
  const theme = useTheme();
  const { title, p, link } = galleryData;

  return (
    <>
      <Stack variant='hero_content' color='light.primary'>
        <Typography variant='h1' typography='title' sx={{ color: "inherit" }}>
          {title}
        </Typography>
        <Typography
          variant='p'
          typography='p'
          sx={{ color: "inherit", fontWeight: 500 }}
        >
          {p}
        </Typography>

        <ArrowLink
          variant='h6'
          typography='arrowLink'
          sx={{ color: "inherit" }}
        >
          {link}
        </ArrowLink>
      </Stack>
    </>
  );
}

export default GalleryShowcase;

const galleryImages = [
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
  // "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
];
