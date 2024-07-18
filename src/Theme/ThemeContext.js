import { createTheme } from "@mui/material/styles";

import { palette, themeTypography } from "./Styles";

import { stackVariants } from "./Components/StackVariants";

import breakpoints from "./mediaQueries";

const appTheme = createTheme({
  palette: palette,

  navbar: {
    height: { xxs: "70px", mobile: "80px" },
    zIndex: 10,
  },

  screenSize: {
    lg: ({ breakpoints, customHeightBreakpoints }) =>
      `(min-width: ${breakpoints.values.lg}px) and (min-height: ${customHeightBreakpoints.md}px), (min-width: ${breakpoints.values.sm}px) and (min-height: ${customHeightBreakpoints.lg}px)`,
  },
  transitions: {
    navMenu: {
      box: {
        height: { true: "height .75s ease-out", false: "height 1.25s ease-in" },
        width: { true: "width .75s ease-out", false: "width 1.25s ease-in" },
      },
    },
  },

  padding: {
    section: {
      xxs: "3rem 1rem",
      mobile: "3rem 1.5rem",
      sm: "3rem 2rem",
      md: "3rem",
    },
    navbar: {
      xxs: "1rem",
      mobile: "1rem",
      sm: ".5rem 2rem",
      // xxs: ".5rem 1rem",
      // mobile: ".5rem 1rem",
      // sm: ".5rem 2rem",
    },

    menu: {
      xxs: "1.25rem 1rem",
      sm: "1.25rem",
      md: "2rem",
    },
  },

  breakpoints: breakpoints,

  customHeightBreakpoints: {
    sm: 450,
    md: 600,
    lg: 800,
  },

  mediaQueries: {
    isPhoneLandscape: "(max-height: 500px) and (orientation: landscape)",
  },

  typography: themeTypography,

  components: {
    MuiStack: {
      styleOverrides: {
        // Name of the slot
        root: {},
      },
      variants: [
        { props: { variant: "section" }, style: stackVariants.section },
        { props: { variant: "grid" }, style: stackVariants.grid },
        { props: { variant: "heading" }, style: stackVariants.heading },
        { props: { variant: "content" }, style: stackVariants.content },
        { props: { variant: "navMenu" }, style: stackVariants.navMenu },
        {
          props: { variant: "hero_content" },
          style: stackVariants.hero_content,
        },
        {
          props: { variant: "carousel_container" },
          style: stackVariants.carousel_container,
        },
        {
          props: { variant: "carousel_content" },
          style: stackVariants.carousel_content,
        },
      ],
    },

    MuiAppBar: {
      variants: [
        {
          props: { variant: "navbar" },
          style: ({ theme }) => ({
            backgroundColor: theme.palette.background.primary,
            boxShadow: 0,

            zIndex: theme.navbar.zIndex,
            height: theme.navbar.height.xxs,
            [theme.breakpoints.up("mobile")]: {
              height: theme.navbar.height.mobile,
            },
          }),
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          cursor: "pointer",
          color: theme.palette.dark.primary,
        }),
      },
      // variants: [
      //   {
      //     props: { variant: "lg" },
      //     style: ({ theme }) => ({
      //       width: "100%",
      //       maxWidth: theme.breakpoints.values.mobile,
      //     }),
      //   },
      // ],
    },

    MuiIconButton: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme }) => ({
          height: "30px",
          [theme.breakpoints.up("mobile")]: { height: "40px" },
          aspectRatio: 1,
        }),
      },
    },
  },
});

export default appTheme;
