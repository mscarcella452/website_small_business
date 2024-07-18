import palette from "./palette";
import fonts from "./fonts";

const themeTypography = {
  primaryFont: { fontFamily: fonts.primary },
  secondaryFont: { fontFamily: fonts.secondary },
  displayFont: { fontFamily: fonts.display },

  variants: {
    hereoSection: { heading: "h3" },
    heading: { subtitle: "p", title: "h3", p: "h6", link: "p" },
    subHeading: { title: "h6", p: "p", link: "p" },
  },

  navbar: {
    companyname: {
      fontWeight: 400,
      color: palette.dark.primary,
      textTransform: "uppercase",
      flexWrap: "wrap",
      fontFamily: fonts.primary,
    },
  },

  footer: {
    attribution: {
      fontFamily: fonts.primary,
      textAlign: "center",
      fontWeight: 450,
    },
  },

  companyInfo: {
    fontFamily: fonts.primary,
    fontWeight: 350,
    color: "inherit",
  },
  navLinks: {
    fontFamily: fonts.primary,
    textTransform: "uppercase",
    fontWeight: 400,
    color: "inherit",
  },

  title: {
    fontFamily: fonts.display,
    color: palette.dark.primary,
    fontWeight: 500,
    textTransform: "lowercase",
  },

  subtitle: {
    fontFamily: fonts.primary,
    fontWeight: 400,
    color: palette.dark.primary,
    textTransform: "lowercase",
  },

  p: {
    fontFamily: fonts.primary,
    fontWeight: 400,
    color: palette.dark.secondary,
    lineHeight: 2,
  },

  arrowLink: {
    fontFamily: fonts.secondary,
    color: palette.dark.primary,
    fontWeight: 600,
    textTransform: "lowercase",
  },
};

export default themeTypography;
