export const useGlobalStyles = () => ({
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
    marginBottom: 6,
  },
  heading_link: { marginTop: -4 },
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
    padding: { xxs: "2.5rem 0", mobile: "5rem 0", md: "7rem 0" },
    gap: { xxs: "2.5rem 0", mobile: "5rem", md: "7rem" },
  },
  divider_image_Wrapper: {
    width: 1,
    padding: { xxs: 0, mobile: "0 2rem", md: "0 2.5rem" },
  },
});
