// React Imports
import { Link as RouterLink } from "react-router-dom";
// Material-UI Imports
import { Container, useMediaQuery, Link, useTheme } from "@mui/material";
// Local Imports
import { NavMenu } from "./NavMenu";
import { companyData } from "../../data";

function Navbar() {
  const theme = useTheme();
  const screenSizeThreshold = useMediaQuery(theme.navbar.screenSizeThreshold);

  return (
    <>
      <Container
        maxWidth={false}
        variant='navbar'
        sx={{ justifyContent: { xxs: "flex-start", mobile: "center" } }}
      >
        <Link
          component={RouterLink}
          to='/'
          variant={screenSizeThreshold ? "h3" : "h4"}
          typography='displayFont'
          sx={{
            fontWeight: 500,
            color: "secondary.main",
            textTransform: "lowercase",
          }}
        >
          {companyData.name}
        </Link>
      </Container>
      <NavMenu />
    </>
  );
}

export default Navbar;
