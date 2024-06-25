import { fonts } from "../Theme/ThemeContext";
import { useMediaQuery } from "@mui/material";
import { md } from "../Theme/mediaQueries";

export const useHeroSectionSx = ({ bottomGutter } = {}) => ({
  variant: {
    heading: "h1",
    subHeading: "h5",
  },
  sx: {
    hero_wrapper: {
      display: "flex",
      flexDirection: "column",
      marginTop: "70px",
      px: { xxs: 2, mobile: 4, md: 5 },
      pt: { xxs: 2, mobile: 4, md: 5 },
      pb: bottomGutter ? { xxs: 2, mobile: 4, md: 5 } : 0,
      // pb: bottomGutter ? { xxs: "3.5rem", mobile: "7rem", md: "9.5rem" } : 0,
      gap: { xxs: 4, md: 5, lg: 6 },
    },

    hero_image_lg: {
      objectFit: "cover",
      objectPosition: "top center",
      width: 1,
      aspectRatio: { xxs: 1, md: 1.5 },
      // order: -1,
    },
    hero_image: {
      objectFit: "cover",
      objectPosition: "top center",
      width: 1,
      aspectRatio: { xxs: 1, md: 2.5 },
      order: 1,
    },
    contentContainer: {
      display: "flex",
      flexDirection: "column",
      height: 1,
      width: 1,
      gap: "inherit",
      alignItems: "flex-start",
    },
    heading: {
      fontWeight: 100,
      color: "#262626",
      maxWidth: { xxs: 350, mobile: 1, sm: "md" },
      // margin: { xxs: 0, sm: "2rem 0", md: "3rem 0" },
      fontFamily: fonts.display,
      textTransform: "lowercase",
    },
    subHeading: {
      // marginBottom: { xxs: 4, md: 0 },
      fontFamily: fonts.secondary,
      color: "#262626",
    },
    address: {
      marginBottom: { xxs: 4, md: 0 },
      textAlign: { xxs: "center", sm: "left" },
    },
    hero_link: {
      fontSize: 14,
      display: { xxs: "block", md: "none" },
      width: { xxs: 1, sm: "fit-content" },
      textAlign: "center",
    },
  },
});
