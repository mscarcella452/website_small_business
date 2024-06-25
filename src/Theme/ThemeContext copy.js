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
  // primary: '"Recursive", sans-serif',
  primary: '"Raleway", sans-serif',
  secondary: '"Ysabeau SC", sans-serif',
  // display: '"Playfair Display", serif',
  display: '"Libre Caslon Display", serif',
  // display: '"Raleway", sans-serif',
};

console.log(breakpoints);

const appTheme = createTheme({
  palette: palette,

  custom: {
    navbarHeight: {
      xxs: "70px",
      md: "80px",
    },
    sectionPadding: {
      xxs: "3rem 1rem",
      sm: "3rem 2rem",
      md: "3rem",
    },
  },

  breakpoints: breakpoints,

  typography: {
    // fontFamily: "Roboto, Arial, sans-serif",

    primaryFont: { fontFamily: '"Raleway", sans-serif' },
    secondaryFont: { fontFamily: '"Ysabeau SC", sans-serif' },
    displayFont: { fontFamily: '"Libre Caslon Display", serif' },
    actionFont: { fontFamily: '"Libre Baskerville", serif' },
    heading_Lg: {
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
      [md]: { fontSize: "17px" },
      [lg]: { fontSize: "18px" },
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
          props: { variant: "heroSection" },
          style: {
            display: "flex",
            flexDirection: "column",

            marginTop: "70px",
            gap: "3rem",
            padding: "3rem 1rem",
            [sm]: { padding: "3rem 2rem" },
            [md]: { padding: "3rem" },
            // [lg]: { gap: "3rem" },
          },
        },
        {
          props: { variant: "section" },
          style: {
            padding: "3rem 1rem",
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
        {
          props: { variant: "showcase" },
          style: {
            padding: "3rem 0",
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
          style: {
            // height: navbarHeight,
            position: "fixed",
            top: 0,
            width: 1,
            zIndex: 10,
            padding: { xxs: ".5rem", mobile: ".5rem 1rem", sm: ".5rem 2rem" },
            backgroundColor: "background.primary",
          },
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
        {
          props: { variant: "showcaseContainer" },
          style: {
            // backgroundColor: palette.primary.main,
            backgroundColor: "#BAA686",
            // backgroundColor: "#fff",

            // backgroundColor: palette.background.primary,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            gap: "1.5rem",
            padding: "2.5rem 0",
            // [mobile]: { padding: "5rem 0" },

            // [md]: {
            //   gridTemplateColumns: "auto 1fr",
            //   padding: 0,
            // },
            padding: "5.5rem 2rem",
            [mobile]: { padding: "8rem 3rem" },
            [md]: { padding: "10rem 3rem" },
            // padding: "3rem 1rem",
            // [sm]: { padding: "3rem 2rem" },
            // [md]: { padding: "3rem" },
          },
        },
      ],
    },

    // MuiButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",

    //       // fontWeight: 700,
    //       textTransform: "none",
    //       // fontSize: 16,
    //       color: "#333",
    //       // [sm]: { fontSize: 16 },
    //     },
    //   },
    //   variants: [
    //     {
    //       props: { variant: "primary" },
    //       style: {
    //         fontFamily: fonts.secondary,
    //         padding: "14px 24px",
    //         // backgroundColor: "#3F5F85",
    //         backgroundColor: palette.secondary.main,
    //         color: "#000",
    //         borderRadius: "0",
    //         gap: "1.5rem",
    //         transition: "transform .5s ease",
    //         "&:hover": {
    //           transform: "translateX(5%)",
    //           backgroundColor: "#5B88BF",
    //         },
    //       },
    //     },
    //     {
    //       props: { variant: "secondary" },
    //       style: {
    //         fontFamily: fonts.secondary,
    //         padding: ".5rem",
    //         marginTop: "-.5rem",
    //         marginLeft: "-.5rem",

    //         alignSelf: "flex-start",
    //         transition: "all .5s ease",
    //         position: "relative",
    //         zIndex: 1,
    //         "&:before": {
    //           content: "''",
    //           position: "absolute",
    //           left: "-.5rem",
    //           bottom: "0",
    //           // top: ".5rem",
    //           height: "45%",
    //           // right: ".5rem",

    //           zIndex: -1,
    //           width: 0,

    //           backgroundColor: palette.secondary.main,
    //           opacity: 0,
    //           transition: "inherit",
    //         },
    //         "&:after": {
    //           content: "''",
    //           position: "absolute",
    //           right: ".5rem",
    //           bottom: ".5rem",
    //           // top: ".5rem",
    //           height: "100%",
    //           // right: ".5rem",

    //           width: "calc(100% - 1rem)",

    //           borderBottom: "1px solid",
    //           // opacity: 0,
    //           transition: "inherit",
    //         },
    //         "&:hover": {
    //           // transform: "translateX(10%)",
    //           backgroundColor: "transparent",
    //           "&:before": {
    //             width: "100%",
    //             opacity: 0.5,
    //           },
    //           "&:after": {
    //             width: 0,
    //             opacity: 0,
    //           },

    //           // "& .arrowIcon": {
    //           //   transform: "translateX(20%)",
    //           //   transition: "all .5s ease",
    //           // },
    //         },
    //       },
    //     },
    //   ],
    // },
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: {
          color: palette.fontColor.p,
          cursor: "pointer",
          textDecoration: "none",
        },
      },
      variants: [
        {
          props: { variant: "navbar" },
          style: {
            textDecoration: "none",

            fontFamily: fonts.secondary,
            "&:hover": {
              textDecoration: "underline",
              opacity: 0.75,
            },
          },
        },
        {
          props: { variant: "primary" },
          style: {
            fontFamily: fonts.secondary,
            borderRadius: "2px",
            padding: "10px 12px",
            textDecoration: "none",
            // backgroundColor: palette.secondary.main,
            backgroundColor: "#D6CAB7",
            transition: "transform .5s ease",
            fontWeight: 500,
            "&:hover": {
              transform: "translateX(5%)",
              backgroundColor: "#BAA686",
            },
          },
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
          height: "35px",
          aspectRatio: 1,
          [mobile]: { height: "45px" },
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // subtitle: "h6",
          // subTitle1: "h5",
          // subTitle2: "p",
        },
      },
      styleOverrides: {
        // Name of the slot
        root: {
          // fontFamily: fonts.primary,
          // color: "#A9BCB8",
        },
      },
      variants: [
        // {
        //   props: { variant: "h1" },
        //   style: {
        //     fontFamily: fonts.display,
        //     // color: palette.primary.main,
        //     fontWeight: 500,
        //     // textTransform: "uppercase",
        //     // textAlign: "center",
        //   },
        // },
        // {
        //   props: { variant: "h2" },
        //   style: {
        //     fontFamily: fonts.display,
        //     color: " #262626",
        //     fontWeight: 700,
        //   },
        // },
        // {
        //   props: { variant: "h3" },
        //   style: {
        //     fontFamily: fonts.display,
        //     // color: palette.primary.main,
        //     color: "#262626",
        //     fontWeight: 700,
        //   },
        // },
        // {
        //   props: { variant: "h3" },
        //   style: {
        //     fontFamily: fonts.primary,
        //     // textTransform: "capitalize",
        //     fontWeight: 400,
        //   },
        // },
        // {
        //   props: { variant: "h4" },
        //   style: {
        //     fontFamily: fonts.primary,
        //     fontWeight: 400,
        //   },
        // },
        // {
        //   props: { variant: "h5" },
        //   style: {
        //     fontFamily: fonts.display,
        //     // textTransform: "capitalize",
        //     fontWeight: 400,
        //   },
        // },
        // {
        //   props: { variant: "h6" },
        //   // style: {
        //   //   fontFamily: fonts.primary,
        //   //   fontWeight: 300,
        //   //   color: "#20201F"
        //   //   lineHeight: 2,
        //   // },
        // },
        // {
        //   props: { variant: "h7" },
        //   style: {
        //     fontFamily: fonts.primary,
        //     fontWeight: 300,
        //     // color: "#424242",
        //   },
        // },
        // {
        //   props: { variant: "subtitle" },
        //   style: {
        //     fontFamily: fonts.primary,
        //     fontWeight: 300,
        //     fontSize: "18px",
        //     [md]: { fontSize: "20px" },
        //     // color: palette.primary.main,
        //   },
        // },
        // // {
        // //   props: { variant: "subTitle2" },
        // //   style: {
        // //     lineHeight: 2,
        // //     color: "#424242",
        // //     fontSize: "18px",
        // //     [md]: { fontSize: "20px" },
        // //   },
        // // },
        // {
        //   props: { variant: "subTitle2" },
        //   style: {
        //     fontWeight: 400,
        //     lineHeight: 2,
        //     color: "#424242",
        //     fontSize: "16px",
        //     [md]: { fontSize: "18px" },
        //   },
        // },
        // {
        //   props: { variant: "p" },
        //   style: {
        //     textAlign: "left",
        //     lineHeight: 2,
        //     // color: "#424242",
        //     // color: "#A9BCB8",
        //     fontFamily: fonts.primary,
        //     color: "red",
        //   },
        // },
      ],
    },
  },
});

export default appTheme;
