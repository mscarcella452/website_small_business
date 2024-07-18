import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { routes } from "../../data";

const routeArray = Object.values(routes).map(({ path, link }) => ({
  path,
  link,
}));

function NavLinks({ activeColor = "inherit", ...rest }) {
  return (
    <>
      {routeArray.map((link, index) => (
        <Link
          variant='p'
          typography='navLinks'
          underline='none'
          key={index}
          to={link.path}
          component={NavLink}
          style={({ isActive }) => ({
            color: isActive && activeColor,
            cursor: isActive ? "default" : "pointer",
          })}
          sx={{ "&:hover": { color: activeColor } }}
          {...rest}
        >
          {link.link}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
