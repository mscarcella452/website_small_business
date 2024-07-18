export const stackVariants = {
  // section ------------------------
  section: ({ theme }) => ({
    gap: theme.spacing(24),
    padding: `${theme.spacing(12)} ${theme.spacing(4)}`,
    [theme.breakpoints.up("sm")]: {
      padding: `${theme.spacing(12)} ${theme.spacing(8)}`,
    },
  }),

  // heading ------------------------
  heading: ({ theme }) => ({
    flexDirection: "column",
    gap: theme.spacing(8),
    alignItems: "center",
    "> *": { width: "100%" },
    [theme.breakpoints.up("md")]: {
      gap: theme.spacing(4),
      flexDirection: "row",
    },
  }),
  // grid ------------------------
  grid: ({ theme }) => ({
    flexDirection: "column",
    gap: theme.spacing(8),
    // alignItems: "center",
    [theme.breakpoints.up("md")]: {
      gap: theme.spacing(4),
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
  }),

  // content ------------------------
  content: ({ theme }) => ({
    justifyContent: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: theme.breakpoints.values.xs,
    },
    "& a:last-child": {
      width: "fit-content",
    },
  }),
  // hero_content ------------------------
  hero_content: ({ theme }) => ({
    gap: theme.spacing(4),
    alignSelf: "center",
    [theme.breakpoints.up("md")]: {
      maxWidth: theme.breakpoints.values.mobile,
      alignSelf: "end",
    },
    "& a:last-child": {
      marginTop: theme.spacing(8),
    },
  }),
  // navMenu------------------------
  navMenu: ({ theme }) => ({
    width: "100%",
    display: "grid",
    gridTemplateRows: "1fr auto",
    height: "100vh",
    justifySelf: "end",
    backgroundColor: theme.palette.background.primary,
    paddingTop: theme.navbar.height.xxs,
    [theme.breakpoints.up("mobile")]: {
      paddingTop: theme.navbar.height.mobile,
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: 0,
      gridTemplateRows: "60px 1fr 60px",
    },
  }),
  // carousel-container ------------------------
  carousel_container: {
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
  },
  // carousel-content ------------------------
  carousel_content: ({ theme }) => ({
    flex: "0 0 auto",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    padding: theme.spacing(1),
    [theme.breakpoints.only("xxs")]: { gap: theme.spacing(4) },
    [theme.breakpoints.up("xs")]: { gap: theme.spacing(6) },
    [`@media ${theme.mediaQueries.isPhoneLandscape}`]: {
      gap: theme.spacing(3),
    },
  }),
};
