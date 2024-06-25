export const useGlobalSx = () => ({
  section_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 3,
  },
  subtitle: {},
  title: {
    textTransform: "capitalize",
    maxWidth: { xxs: "mobile", md: "md" },
  },
  heading_p: {
    maxWidth: "md",
  },
  heading_link: { marginTop: 3 },
  page_container: {
    width: 1,
    height: 1,
    position: "relative",
    overflow: "hidden",
  },
  content_Wrapper: {
    width: 1,

    display: "flex",
    flexDirection: "column",
    // padding: { xxs: "2.5rem 0", mobile: "5rem 0", md: "7rem 0" },
    padding: { xxs: "2rem 0", mobile: "3rem 0", md: "4rem 0" },
    mb: "3rem",
    gap: { xxs: "2rem 0", mobile: "3rem 0", md: "4rem 0" },

    // gap: { xxs: "2.5rem 0", mobile: "5rem", md: "7rem" },
  },
  // content_Wrapper: {
  //   width: 1,

  //   display: "flex",
  //   flexDirection: "column",
  //   padding: { xxs: "2.5rem 0", mobile: "5rem 0", md: "7rem 0" },
  //   gap: { xxs: "2.5rem 0", mobile: "5rem", md: "7rem" },
  // },

  divider_image_Wrapper: {
    width: 1,

    // padding: { xxs: 0, mobile: "0 2rem", md: "0 2.5rem" },
    padding: { xxs: "0 1rem", mobile: "0 2rem", md: "0 2.5rem" },
  },
  divider_image: {
    objectFit: "cover",
    objectPosition: "top center",
    width: 1,
    aspectRatio: { xxs: 1, sm: 1.5 },
  },
  disableGutters: {
    paddingLeft: { xxs: 0 },
    paddingRight: { xxs: 0 },
  },
});
