// import React from "react";

import { Link, useTheme } from "@mui/material";
import { NavLink } from "react-router-dom";

function NavLinks({ links, activeColor, ...rest }) {
  const theme = useTheme();

  const active_color = activeColor ? activeColor : theme.palette.primary.main;
  return (
    <>
      {links.map((link, index) => (
        <Link
          variant='h3'
          key={index}
          to={link.to}
          component={NavLink}
          typography='navMenu.navLink'
          style={({ isActive }) => ({
            color: isActive && active_color,
          })}
          {...rest}
        >
          {link.link}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;
