// import React from 'react'
import { Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CompanyData from "../data/companyData";

function CompanyAddress({
  address = CompanyData.address,
  iconColor = "primary.main",
  ...rest
}) {
  return (
    <Typography
      // className='flexRow'
      // gap={1}
      // flexWrap={"wrap"}
      // aligjustifyItems='flex-start'
      {...rest}
    >
      {address}{" "}
      <LocationOnIcon sx={{ color: iconColor, fontSize: "inherit" }} />
    </Typography>
  );
}

export default CompanyAddress;
