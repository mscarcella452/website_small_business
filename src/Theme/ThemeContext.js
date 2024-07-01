import { createTheme } from "@mui/material/styles";

import palette from "./palettes";

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
  workSans: '"Work Sans", sans-serif',
  // contactInfo: '"Poppins", sans-serif"',
  // display: '"Raleway", sans-serif',
};

const appTheme = createTheme({
  palette: palette,

  navbar: {
    height: {
      xxs: "70px",
      sm: "80px",
      md: "90px",

      // xxs: "50px",
      // mobile: "60px",,
      // md: "80px",
    },
    zIndex: 10,
    screenSizeThreshold: md,
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

  icon: {
    height: "30px",
    [mobile]: { height: "40px" },
    aspectRatio: "1/1",
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

  typography: {
    // fontFamily: "Roboto, Arial, sans-serif",

    primaryFont: { fontFamily: '"Raleway", sans-serif' },
    secondaryFont: { fontFamily: '"Ysabeau SC", sans-serif' },
    displayFont: { fontFamily: '"Libre Caslon Display", serif' },
    actionFont: { fontFamily: '"Libre Baskerville", serif' },
    playfair: { fontFamily: fonts.playfair },
    contactInfo: { fontFamily: fonts.contactInfo },
    workSans: { fontFamily: fonts.workSans },
    navMenu: {
      info: {
        fontFamily: fonts.workSans,
        fontWeight: 500,
        // textTransform: "uppercase",
      },
      label: {
        fontFamily: fonts.display,
        fontWeight: 700,
        textTransform: "lowercase",
      },
      arrowLink: {
        fontFamily: fonts.secondary,
        fontWeight: 500,
        // textTransform: "uppercase",
      },
      navLink: {
        fontFamily: fonts.display,
        textTransform: "lowercase",
        fontWeight: 700,
        // "&:hover": {
        //   transform: "scale(1.15)",
        // },
      },
    },

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
            },
            [sm]: {
              padding: theme.padding.navbar.sm,
              height: theme.navbar.height.sm,
            },
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
        root: {
          cursor: "pointer",
          textDecoration: "none",
        },
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
          [mobile]: { height: "40px" },
          aspectRatio: 1,
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "navMenu" },
          style: {
            fontSize: 10,

            [xs]: { fontSize: 14 },
            [mobile]: { fontSize: 16 },
            [sm]: { fontSize: 18 },
            [md]: { fontSize: 20 },
          },
        },
      ],
      // variants: [
      //   {
      //     props: { variant: "navLinks" },
      //     style: {
      //       fontSize: 12,

      //       // [mobile]: { fontSize: 15 },
      //       // [sm]: { fontSize: 16 },
      //       [md]: { fontSize: 55 },
      //     },
      //   },
      // ],
    },
  },
});

export default appTheme;
