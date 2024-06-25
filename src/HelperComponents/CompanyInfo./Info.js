import React from "react";
import companyData from "../../data/CompanyData";
import { Box, Typography, Divider } from "@mui/material";
import ArrowLink from "../ArrowLink";

export const Info = ({ title, children }) => (
  <Box className='companyInfo_container'>
    <Typography
      variant='h5'
      typography='heading_lg'
      color='fontColor.dark'
      sx={{ borderColor: "#d2d2d2" }}
    >
      {title}
    </Typography>
    {children}
  </Box>
);

export const HoursInfo = ({
  variant = "p",
  color = "fontColor.p",
  day = "abrievDay",
  flexDirection = "row",
}) => {
  const column = flexDirection === "column";
  const containerSx = column
    ? {
        gridTemplateRows: "1fr",
        gridTemplateColumns: "auto auto auto auto auto",
      }
    : null;
  return (
    <Box className='scheduale_container' sx={containerSx}>
      {companyData.hours.map((data, index) => (
        <>
          <Box
            className='daily_hours'
            key={index}
            sx={{ color: color }}
            // flexDirection={flexDirection}
          >
            <Typography variant={variant} typography={"actionFont"}>
              {data[day]}:
            </Typography>
            {data.hours === "*appt. only" ? (
              <ArrowLink
                color='inherit'
                variant={variant}
                typography={"secondaryFont"}
              >
                {data.hours}
              </ArrowLink>
            ) : (
              <Typography variant={variant} typography={"actionFont"}>
                {data.hours}
              </Typography>
            )}
          </Box>
          {column && (
            <Divider
              orientation='vertical'
              sx={{ height: 1, width: "2.5px" }}
            />
          )}
        </>
      ))}
    </Box>
  );
};
