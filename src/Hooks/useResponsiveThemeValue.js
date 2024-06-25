import { useMediaQuery, useTheme } from "@mui/material";
import { xs, mobile, sm, md, lg } from "../Theme/mediaQueries.js";

const useResponsiveThemeValue = objectKey => {
  const theme = useTheme();

  const isXsScreen = useMediaQuery(xs);
  const isMobileScreen = useMediaQuery(mobile);
  const isSmScreen = useMediaQuery(sm);
  const isMdScreen = useMediaQuery(md);
  const isLgScreen = useMediaQuery(lg);

  const keys = objectKey.split(".");
  const value = keys.reduce(
    (acc, key) => (acc && acc[key] !== undefined ? acc[key] : {}),
    theme
  );

  const conditions = [
    { check: isLgScreen, key: "lg" },
    { check: isMdScreen, key: "md" },
    { check: isSmScreen, key: "sm" },
    { check: isMobileScreen, key: "mobile" },
    { check: isXsScreen, key: "xs" },
  ];

  // Find matching condition and return corresponding value
  const activeCondition = conditions.find(
    condition => condition.check && value.hasOwnProperty(condition.key)
  );
  return activeCondition ? value[activeCondition.key] : value.xxs; // Default value
};

export default useResponsiveThemeValue;
