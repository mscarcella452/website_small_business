import { makeStyles } from "@mui/styles";
import { mobileLandscape } from "../../../../Theme/mediaQueries";

const HeroSectionBackgroundImg = "https://wallpapercave.com/wp/wp3751665.jpg";

export const useHeroSectionStyles = makeStyles(theme => {
  const mobile = theme.breakpoints.up("mobile");
  const sm = theme.breakpoints.up("sm");
  const md = theme.breakpoints.up("md");
  const lg = theme.breakpoints.up("lg");

  return {
    // heroSection

    heroSection: {
      position: "relative",
      marginTop: "70px",
      // marginBottom: "70px",
      width: "100%",
      zIndex: 2,
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr",
      alignItems: "center",
      [mobile]: { gridTemplateColumns: "auto 1fr" },
      "&::before": {
        content: "''",
        position: "absolute",
        top: -70,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        backgroundColor: theme.palette.primary.dark, // Default background color
        [mobile]: {
          backgroundColor: theme.palette.background.primary,
        },
      },
    },
    // backgroundImageContainer
    backgroundImageContainer: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      bottom: 0,

      [mobile]: {
        position: "relative",
        width: 175,
      },
      [sm]: {
        width: 250,
      },
      [md]: {
        width: 400,
      },
      [lg]: {
        width: 480,
      },

      "&:before": {
        content: "''",
        zIndex: -1,
        top: "-70px",
        width: "100%",
        bottom: 0,
        position: "absolute",
        background: `url(${HeroSectionBackgroundImg}) 0 0  /  auto no-repeat fixed`,
        backgroundBlendMode: "multiply", // Blend mode for combining background color with image
        backgroundColor: theme.palette.primary.light, // Apply your desired background color with opacity
        opacity: 0.15,
        backgroundPosition: "-990px -165px",
        backgroundSize: "auto 885px",
        [mobileLandscape]: {
          backgroundPositionY: "center",
          backgroundAttachment: "scroll",
          backgroundPosition: "-790px 0",
          backgroundSize: "auto 715px",
        },
        [mobile]: {
          opacity: 1,
          backgroundPosition: "-790px 0px",
          backgroundSize: "auto 715px",

          [mobileLandscape]: { backgroundAttachment: "scroll" },
        },
        [sm]: {
          [mobileLandscape]: { backgroundPositionY: "0" },
        },
        [md]: {
          // backgroundPosition: "-990px center",
          // backgroundSize: "auto 885px",
          [mobileLandscape]: { backgroundAttachment: "fixed" },
        },
        [lg]: {
          // backgroundPositionY: "-70px",
          [mobileLandscape]: { backgroundAttachment: "fixed" },
        },
      },
    },
    contentContainer: {
      padding: "2rem",
      gap: "1.5rem",
      display: "grid",
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr auto",
      alignItems: "center",
      width: "100%",
      height: "100%",
      [md]: {
        gridTemplateColumns: "auto 1fr",
        gridTemplateRows: "1fr",
        padding: "3rem 3rem 3rem 0",
        gap: "2rem",
      },
    },
    hiddenOnMobile: {
      display: "none",
      [mobile]: {
        display: "block",
      },
    },
    fullWidth: {
      width: "100%",
    },

    imageWrapper: {
      display: "none",
      position: "relative",
      [mobile]: { width: "100%", height: "100%", display: "flex" },
      [sm]: { height: "100%", minHeight: "250px" },
      [md]: { width: "175px" },
      [lg]: { width: "250px" },
      border: 1,
    },
    image: {
      height: "100%",
      width: "100%",
      position: "absolute",
      right: "auto",
      left: 0,
      objectFit: "cover",
      objectPosition: "top center",
      [mobile]: { width: "100%", height: "100%", display: "flex" },
      [sm]: { height: "100%" },
      [md]: { right: 0, left: "auto", width: "350px" },
      [lg]: { width: "500px" },
    },
  };
});
