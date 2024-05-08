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
  primary: '"Raleway", sans-serif',
  secondary: '"Libre Baskerville", serif',
  display: '"Playfair Display", serif',
};

const appTheme = createTheme({
  palette: palette,

  breakpoints: breakpoints,

  components: {
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          // overflow: "hidden",
          // borderRadius: 0,
        },
      },
      variants: [
        {
          props: { variant: "section" },
          style: {
            borderRadius: 0,
            width: "100%",
            padding: "1rem",

            [sm]: { padding: "2rem" },
            [md]: { padding: "3rem" },
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      },
      variants: [
        // {
        //   props: { variant: "" },
        //   style: {
        //   },
        // },
      ],
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: fonts.secondary,
          fontWeight: 700,
          textTransform: "capitalize",
          fontSize: 16,
        },
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            padding: ".5rem 1rem",
            backgroundColor: "#3F5F85",
            color: "#fff",
            borderRadius: "0",
            gap: "1.5rem",
            transition: "transform .5s ease",
            "&:hover": {
              transform: "translateX(5%)",
              backgroundColor: "#5B88BF",
              "& .arrowIcon": {
                transform: "translateX(20%)",
                transition: "transform .5s ease",
              },
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
          height: "30px",
          aspectRatio: "1/1",
        },
      },
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          subTitle1: "h5",
          subTitle2: "p",
        },
      },
      styleOverrides: {
        // Name of the slot
        root: {
          fontFamily: fonts.primary,
        },
      },
      variants: [
        {
          props: { variant: "h1" },
          style: {
            fontFamily: fonts.display,
            // color: palette.primary.main,
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "center",
          },
        },
        {
          props: { variant: "h2" },
          style: {
            fontFamily: fonts.display,
            // color: palette.primary.main,
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "center",
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontFamily: fonts.secondary,
            textTransform: "capitalize",
            fontWeight: 600,
          },
        },
        {
          props: { variant: "h4" },
          style: {
            fontFamily: fonts.secondary,
            textTransform: "capitalize",
            fontWeight: 600,
          },
        },

        {
          props: { variant: "subTitle1" },
          style: {
            fontWeight: 600,
            textTransform: "uppercase",
            // color: palette.primary.main,
            fontFamily: fonts.primary,
            // color: "#424242",
            fontSize: "20px",
            [md]: { fontSize: "22px" },
          },
        },
        // {
        //   props: { variant: "subTitle2" },
        //   style: {
        //     lineHeight: 2,
        //     color: "#424242",
        //     fontSize: "18px",
        //     [md]: { fontSize: "20px" },
        //   },
        // },

        {
          props: { variant: "subTitle2" },
          style: {
            fontWeight: 300,
            lineHeight: 2,
            color: "#424242",
            fontSize: "16px",
            [md]: { fontSize: "18px" },
          },
        },

        {
          props: { variant: "p" },
          style: {
            textAlign: "left",
            fontWeight: 300,
            lineHeight: 2,
            color: "#424242",
          },
        },
      ],
    },
  },
});

export default appTheme;
