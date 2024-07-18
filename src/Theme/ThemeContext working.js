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
  // primary: '"Raleway", sans-serif',
  primary: '"Work Sans", sans-serif',
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

    variants: {
      hereoSection: { heading: "h3" },
      heading: { subtitle: "p", title: "h3", p: "h6", link: "p" },
      subHeading: { title: "h6", p: "p", link: "p" },
    },

    heroSection: {
      heading: {
        borderLeft: "double 5px",
        paddingLeft: "1rem",
        fontWeight: 700,
        fontFamily: fonts.display,
      },
    },

    heading: {
      subtitle: {
        fontFamily: fonts.primary,
        fontWeight: 500,
        textTransform: "capitalize",
        color: "#262626",

        // color: palette.primary.main,
      },
      title: {
        fontFamily: fonts.display,
        // color: "#262626",
        color: "#20201F",
        // color: palette.primary.main,
        fontWeight: 500,
        textTransform: "lowercase",

        // maxWidth: { xxs: "mobile", md: "md" },
      },
      p: {
        fontFamily: fonts.primary,
        fontWeight: 250,
        color: "#20201F",
        lineHeight: 2,
      },
      link: {
        fontFamily: fonts.secondary,
        color: "#262626",
        fontWeight: 500,
        // marginTop: "3rem",
      },
    },

    subHeading: {
      title: {
        fontFamily: fonts.workSans,
        fontWeight: 300,
        color: "#20201F",
        textTransform: "lowercase",
      },
      p: {
        fontFamily: fonts.primary,
        fontWeight: 250,
        color: "#424242",
        lineHeight: 2,
      },
      link: {
        fontFamily: fonts.secondary,
        color: "#262626",
        fontWeight: 500,
      },
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
      variants: [],
    },
    MuiContainer: {
      styleOverrides: {},
      variants: [
        {
          props: { variant: "navbar" },
          style: ({ theme }) => ({
            height: theme.navbar.height.xxs,
            backgroundColor: theme.palette.background.primary,
            zIndex: theme.navbar.zIndex,

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
          props: { variant: "page" },
          style: {
            width: "100%",
            height: "100%",
            position: "relative",
            // overflow: "hidden",
            background: "gold",
          },
        },
        {
          props: { variant: "section" },
          style: ({ theme }) => ({
            gap: theme.spacing(16),
            // background: "red",
            display: "flex",
            flexDirection: "column",
          }),
        },
      ],
    },

    MuiStack: {
      styleOverrides: {
        // Name of the slot
        root: {},
      },
      variants: [
        {
          props: { variant: "section" },
          style: ({ theme }) => ({
            paddingTop: theme.spacing(12),
            paddingBottom: theme.spacing(12),
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            gap: theme.spacing(24),
            [theme.breakpoints.up("sm")]: {
              paddingLeft: theme.spacing(8),
              paddingRight: theme.spacing(8),
            },
          }),
        },
        {
          props: { variant: "navbar" },
          style: ({ theme }) => {
            const lg = theme.breakpoints.up("lg");
            return {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              justifyContent: "center",
              height: theme.navbar.height.xxs,
              // backgroundColor: theme.palette.background.primary,
              backgroundColor: "red",
              zIndex: theme.navbar.zIndex,
              padding: theme.padding.navbar.xxs,
              [lg]: { background: "green" },
            };
          },
        },
        // {
        //   props: { variant: "navbar" },
        //   style: ({ theme }) => ({
        //     position: "fixed",
        //     top: 0,
        //     left: 0,
        //     right: 0,
        //     justifyContent: "center",
        //     height: theme.navbar.height.xxs,
        //     // backgroundColor: theme.palette.background.primary,
        //     backgroundColor: "#fff",
        //     zIndex: theme.navbar.zIndex,
        //     padding: theme.padding.navbar.xxs,
        //     [theme.breakpoints.up("mobile")]: {
        //       padding: theme.padding.navbar.mobile,
        //     },
        //     [theme.breakpoints.up("sm")]: {
        //       padding: theme.padding.navbar.sm,
        //       height: theme.navbar.height.sm,
        //     },
        //     [theme.breakpoints.up("md")]: {
        //       height: theme.navbar.height.md,
        //     },
        //   }),
        // },

        {
          props: { variant: "heading" },
          style: ({ theme }) => ({
            flexDirection: "column",
            gap: theme.spacing(8),
            [theme.breakpoints.up("md")]: {
              gap: theme.spacing(4),
              flexDirection: "row",
            },
            alignItems: "flex-start",
            "> *": { width: "100%" },
          }),
        },

        {
          props: { variant: "content" },
          style: ({ theme }) => ({
            justifyContent: "center",
            gap: theme.spacing(2),

            [theme.breakpoints.up("md")]: {
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: theme.breakpoints.values.xs,
            },
          }),
        },
      ],
    },

    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: { cursor: "pointer", textDecoration: "none" },
      },
      variants: [],
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
