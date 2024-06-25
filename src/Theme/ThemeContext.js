import { createTheme } from "@mui/material/styles";

import { palette } from "./palettes.js";

import breakpoints, {
  xxs,
  xs,
  mobile,
  sm,
  md,
  lg,
  mobilePortrait,
  mobileLandscape,
} from "./mediaQueries";

export const fonts = {
  contactInfo: '"Recursive", sans-serif',
  primary: '"Raleway", sans-serif',
  secondary: '"Ysabeau SC", sans-serif',
  playfair: '"Playfair Display", serif',
  display: '"Libre Caslon Display", serif',
  // contactInfo: '"Poppins", sans-serif"',
  // display: '"Raleway", sans-serif',
};

const appTheme = createTheme({
  palette: palette,

  navbar: {
    height: {
      xxs: "50px",
      mobile: "60px",
      md: "80px",
    },
    zIndex: 10,
    screenSizeThreshold: md,
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
      xxs: ".5rem",
      mobile: ".5rem 1rem",
      sm: ".5rem 2rem",
    },

    menu: {
      xxs: "60px 1rem 1rem 1rem",
      mobile: "70px 1.5rem 1.5rem 1.5rem",
      sm: "90px 2rem 2rem 2rem",
      md: "2rem",
    },
    // menu: {
    //   xxs: "1.5rem 1rem",
    //   mobile: "1.5rem",
    //   md: "2rem",
    // },
  },

  breakpoints: breakpoints,

  typography: {
    // fontFamily: "Roboto, Arial, sans-serif",

    primaryFont: { fontFamily: '"Raleway", sans-serif' },
    secondaryFont: { fontFamily: '"Ysabeau SC", sans-serif' },
    displayFont: { fontFamily: '"Libre Caslon Display", serif' },
    actionFont: { fontFamily: '"Libre Baskerville", serif' },
    playfair: { fontFamily: fonts.playfair },
    contactInfo: { fontFamily: fonts.contactInfo },

    heading_lg: {
      borderLeft: "double 5px",
      paddingLeft: "1rem",
      fontWeight: 700,
      fontFamily: '"Libre Caslon Display", serif',
    },
    menuButton: {
      fontFamily: '"Libre Baskerville", serif',
      textTransform: "none",
      fontWeight: 700,
      color: palette.fontColor.p,
      fontSize: "14px",
      [mobile]: { fontSize: "15px" },
      [sm]: { fontSize: "16px" },
      // [md]: { fontSize: "17px" },
      // [lg]: { fontSize: "18px" },
      "&:hover": {
        backgroundColor: "transparent",
        textDecoration: "underline",
      },
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          scrollMarginTop: "70px",
          borderRadius: 0,
          backgroundColor: "transparent",
          width: "100%",
        },
      },
      variants: [
        {
          props: { variant: "section" },
          style: {
            padding: "3rem 1rem",
            [mobile]: { padding: "3rem 1.5rem" },
            [sm]: { padding: "3rem 2rem" },
            [md]: { padding: "3rem" },
          },
        },
        {
          props: { variant: "footer" },
          style: {
            padding: "3rem 1rem",
            [sm]: { padding: "3rem 2rem" },
            [md]: { padding: "3rem" },
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        // root: {
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // },
      },
      variants: [
        {
          props: { variant: "navbar" },
          style: ({ theme }) => ({
            height: theme.navbar.height.xxs,
            backgroundColor: theme.palette.background.primary,
            zIndex: theme.navbar.zIndex,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            width: "100%",
            padding: theme.padding.navbar.xxs,

            [mobile]: {
              padding: theme.padding.navbar.mobile,
              height: theme.navbar.height.mobile,
            },
            [sm]: { padding: theme.padding.navbar.sm },
            [md]: { height: theme.navbar.height.md },
          }),
        },
        {
          props: { variant: "sectionContainer" },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1.5rem",
          },
        },
      ],
    },

    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: ({ theme, isActive }) => ({
          color: theme.palette.fontColor.p,
          cursor: "pointer",
          textDecoration: "none",
          fontWeight: 500,
          "&:hover": {
            textDecoration: "underline",
            color: theme.palette.primary.dark,
            transition: "color 1s ease",
          },
        }),
      },
      variants: [],
    },

    MuiDivider: {
      styleOverrides: {
        // Name of the slot
        root: {},
      },
      variants: [
        {
          props: { variant: "navbar_horizontal" },
          style: ({ theme }) => ({
            // color: theme.palette.fontColor.default,
            width: "100%",
            maxWidth: theme.breakpoints.mobile,
            height: "2.5px",
          }),
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        // Name of the slot

        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30px",

          aspectRatio: 1,
          [mobile]: { height: "40px" },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "navMenu" },
          style: {
            fontSize: 12,
            [xs]: { fontSize: 14 },
            // [mobile]: { fontSize: 15 },
            // [sm]: { fontSize: 16 },
            [md]: { fontSize: 18 },
          },
        },
      ],
    },
  },
});

export default appTheme;
