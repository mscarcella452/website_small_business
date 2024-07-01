import { useTheme } from "@mui/material";
import { companyData } from "../../../data";

const useNavMenuCarouselProps = () => {
  const theme = useTheme();

  const labelProps = {
    variant: "h4",
    color: "secondary.light",
    textAlign: "center",
  };
  const infoProps = {
    variant: "h5",
    color: "fontColor.light",
    textAlign: "center",
  };

  const companyHours = {
    className: "flexColumn",
    day: "day",
    dayProps: labelProps,
    hoursProps: infoProps,
    linkProps: infoProps,
  };
  const navLinks = {
    variant: "h2",
    activeColor: theme.palette.primary.main,
    color: "fontColor.light",
    links: companyData.navLinks,
    sx: { "&:hover": { color: "secondary.light" } },
  };
  const contactInfo = {
    className: "flexColumn",
    labelProps: labelProps,
    contactProps: infoProps,
  };

  return { companyHours, navLinks, contactInfo };
};

export default useNavMenuCarouselProps;
