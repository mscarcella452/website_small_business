import { useGlobalStyles } from "./useGlobalStyles";
import { useGlobalTypography } from "./useGlobalTypography";

export const useSectionSx = () => {
  const typographySx = useGlobalTypography();
  const globalSx = useGlobalStyles();

  return {
    variant: {
      subtitle: "h6",
      title: "h3",
      heading_p: "h6",
      content_title: "h6",
      content_p: "p",
      link: "secondary",
    },
    sx: {
      section_container: {
        ...globalSx.section_container,
      },
      subtitle: {
        ...typographySx.subtitle,
        ...globalSx.subtitle,
      },

      title: {
        ...typographySx.h3,
        ...globalSx.title,
        fontWeight: 500,
        textTransform: "lowercase",
      },

      heading_p: {
        ...typographySx.h6,
        ...globalSx.heading_p,
      },

      contentGrid: {
        display: { xxs: "flex", md: "grid" },
        width: "100%",
        alignItems: "flex-end",
        gap: 6,
        gridTemplateColumns: "1fr 1fr",
        justifyItems: "center",
      },

      contentImage: {
        display: { xxs: "none", md: "block" },
        width: 1,
        // aspectRatio: 1.25,
        aspectRatio: 1.5,
        objectFit: "cover",
        objectPosition: "top center",
        boxShadow: 5,
        // borderRadius: "25px",
      },

      contentContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "1rem",
        width: "100%",
        maxWidth: "xs",
      },

      heading_link: {
        ...globalSx.heading_link,
      },
      content_title: {
        ...typographySx.h6,
      },
      content_p: {
        ...typographySx.p,
      },
    },
  };
};
