import {
  useTheme,
  useMediaQuery,
  Typography,
  Stack,
  Box,
  Button,
} from "@mui/material";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";
import { galleryData } from "./data.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function GalleryShowcase() {
  const theme = useTheme();
  const { subtitle, title, p, link } = galleryData;
  const { variants } = theme.typography;

  return (
    <>
      <Stack
        sx={{
          gap: { xxs: theme.spacing(8), md: theme.spacing(4) },
          maxWidth: { xxs: 1, md: "mobile" },
          alignSelf: { xxs: "center", md: "end" },
        }}
      >
        <Typography
          variant={"h1"}
          typography={"displayFont"}
          sx={{
            // fontWeight: "300",
            textAlign: "left",
            color: "background.primary",
          }}
        >
          our lookbook
          {/* what is bespoke tailoring? */}
        </Typography>

        <Typography
          variant={"p"}
          typography={"heading.p"}
          fontWeight={500}
          sx={{ color: "background.primary" }}
        >
          Explore our gallery and lookbook to see the exquisite craftsmanship
          and timeless elegance of our bespoke creations. Each piece is a
          testament to our dedication to quality and personalized service,
          tailored perfectly to our clients' unique styles and preferences.
        </Typography>
        <ArrowLink
          variant={"h6"}
          typography='heading.link'
          sx={{ color: "background.primary" }}
        >
          Explore Our Collection
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
