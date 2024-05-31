import { fonts } from "../Theme/ThemeContext";

export const useGlobalTypography = () => ({
  h2: {
    fontFamily: fonts.display,
    color: " #262626",
    fontWeight: 700,
  },

  h3: {
    fontFamily: fonts.display,
    color: "#262626",
    fontWeight: 700,
  },

  h6: {
    fontFamily: fonts.primary,
    fontWeight: 300,
    color: "#20201F",
    lineHeight: 2,
  },

  subtitle: {
    fontFamily: fonts.secondary,
    fontWeight: 300,
  },

  p: {
    textAlign: "left",
    lineHeight: 2,
    color: "#424242",
    fontFamily: fonts.primary,
  },
});
