import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DropdownButton = ({ children, transformState, sx, ...rest }) => {
  return (
    <Button
      disableRipple
      sx={{
        typography: "menuButton",

        ...sx,
      }}
      {...rest}
      endIcon={
        <ExpandMoreIcon
          sx={{
            transform: transformState ? "rotate(270deg)" : "rotate(0deg)",
            transition: "transform .5s ease",
          }}
        />
      }
    >
      {children}
    </Button>
  );
};

export default DropdownButton;
