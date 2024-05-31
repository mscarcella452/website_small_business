import { useGlobalStyles } from "./useGlobalStyles";
import { useGlobalTypography } from "./useGlobalTypography";

export const useShowcaseSx = () => {
  const typographySx = useGlobalTypography();
  const globalSx = useGlobalStyles();

  return {
    variant: {
      subtitle: "h6",
      title: "h3",
      heading_p: "h6",
      link: "secondary",
    },
    sx: {
      showcase_box: {
        width: 1,
        display: "grid",
        gridTemplateColumns: { xxs: "1fr", md: "auto 1fr", lg: ".75fr 1fr" },
        gridTemplateRows: "1fr",
      },

      showcase_container: {
        ...globalSx.section_container,
        backgroundColor: "background.secondary",
        padding: { xxs: "5.5rem 2rem", mobile: "8rem 3rem", md: "10rem 3rem" },
      },

      subtitle: {
        ...typographySx.subtitle,
        ...globalSx.subtitle,
        // color: "primary.dark",
      },

      title: {
        ...typographySx.h3,
        ...globalSx.title,
        fontWeight: 400,
        textTransform: "lowercase",
        // color: "primary.dark",
      },

      heading_p: {
        ...typographySx.h6,
        ...globalSx.heading_p,
      },

      heading_link: {
        ...globalSx.heading_link,
      },

      background_image: {
        width: { xxs: 425, lg: 1 },
        height: 1,
        display: { xxs: "none", md: "block" },
        background: "top center  /  cover no-repeat",
      },
    },
  };
};
