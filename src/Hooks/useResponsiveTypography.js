import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";

const variantMapping = {
  h1: ["h2", "h3", "h4", "h5", "h6", "body1"],
  h2: ["h3", "h4", "h5", "h6", "body1", "body2"],
  h3: ["h4", "h5", "h6", "body1", "body2", "caption"],
  h4: ["h5", "h6", "body1", "body2", "caption", "overline"],
  h5: ["h6", "body1", "body2", "caption", "overline", "p"],
  h6: ["body1", "body2", "caption", "overline", "p", "p"],
  body1: ["body2", "caption", "overline", "p", "p", "p"],
  body2: ["caption", "overline", "p", "p", "p", "p"],
};

//  customHeightBreakpoints: {
//     small: 450,
//     medium: 600,
//     large: 800,
//   },

// const breakpoints = {
//   values: {
//     xxs: 0,
//     xs: 376,
//     mobile: 500,
//     sm: 700,
//     md: 1000,
//     lg: 1200,
//     xl: 1536,
//   },
// };

const useResponsiveTypography = baseVariant => {
  const theme = useTheme();

  const width = {
    xs: `${theme.breakpoints.values.xs}px`,
    mobile: `${theme.breakpoints.values.mobile}px`,
    sm: `${theme.breakpoints.values.sm}px`,
    md: `${theme.breakpoints.values.md}px`,
    xl: `${theme.breakpoints.values.xl}px`,
  };

  const height = {
    sm: `${theme.customHeightBreakpoints.sm}px`,
    md: `${theme.customHeightBreakpoints.md}px`,
    lg: `${theme.customHeightBreakpoints.lg}px`,
  };

  const isSmallLandscape = useMediaQuery(
    `(max-height: ${height.sm}) and (max-width: ${width.sm})`
  );
  const isSmallPortrait = useMediaQuery(
    `(max-width: ${width.xs}) and (max-height: ${height.lg})`
  );
  const isMediumLandscape = useMediaQuery(
    `(max-height: ${height.sm}) and (min-width: ${width.sm}) and (max-width: ${width.md})`
  );
  const isMediumPortrait = useMediaQuery(
    `(max-width: ${width.mobile}) and (min-height: ${height.md}) `
  );
  const defaultScreen = useMediaQuery(
    `(min-width: ${width.mobile})  and (max-width: ${width.xl}) and (max-height: ${height.lg})`
  );

  const variants = variantMapping[baseVariant] || [baseVariant];

  if (isSmallLandscape) {
    return variants[3] || baseVariant;
  }
  if (isSmallPortrait) {
    return variants[2] || baseVariant;
  }
  if (isMediumLandscape) {
    return variants[2] || baseVariant;
  }
  if (isMediumPortrait) {
    return variants[0] || baseVariant;
  }
  if (defaultScreen) {
    return variants[0] || baseVariant;
  }
  // if (isMediumHeight) {
  //   return variants[2] || baseVariant;
  // }
  // if (isLargeHeight) {
  //   return variants[1] || baseVariant;
  // }
  // if (isExtraLargeHeight) {
  //   return variants[5] || baseVariant;
  // }
  return baseVariant;
};

export default useResponsiveTypography;
