import { Stack, Link, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ArrowLink({ sx, children, ...rest }) {
  const theme = useTheme();
  return (
    <Link
      className={"flexRow"}
      component={RouterLink}
      underline='none'
      sx={{
        gap: theme.spacing(2),
        justifyContent: "start",
        width: 1,
        minWidth: 150,
        maxWidth: "mobile",
        borderBottom: 1.5,

        "&:hover": { "> :first-child": { flexGrow: 0 } },
        ...sx,
      }}
      {...rest} // Spread the rest of the props here
    >
      <Stack sx={{ flexGrow: 1, transition: "flex 1.5s ease" }}>
        {children}
      </Stack>
      <ArrowRightAltIcon color='inherit' />
    </Link>
  );
}

export default ArrowLink;
