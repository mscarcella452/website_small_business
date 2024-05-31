// import React from 'react'
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CompanyData from "../data/CompanyData";

function CompanyAddress({
  address = CompanyData.address,
  iconColor = "primary.main",
  ...rest
}) {
  return (
    <Typography {...rest}>
      {address}
      {""}
      <LocationOnIcon sx={{ color: iconColor }} />
    </Typography>
  );
}

export default CompanyAddress;
