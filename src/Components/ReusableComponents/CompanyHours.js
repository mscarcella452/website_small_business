import { Box, Typography, Stack } from "@mui/material";
import companyData from "../../data/CompanyData";
import ArrowLink from "../../HelperComponents/ArrowLink";

function CompanyHours({
  arrowLink,
  day = "abrievDay",
  dayProps,
  hoursProps,
  linkProps,
  ...rest
}) {
  return (
    <>
      {companyData.hours.map((data, index) => (
        <Stack
          key={index}
          sx={{
            width: 1,
            justifyContent: "flex-start",
            overflowWrap: "break-word", // Ensures content wraps at any character, not just whitespaces
            wordBreak: "break-word", // Ensures long strings without spaces can break mid-word if needed
            gap: 2,
          }}
          {...rest}
        >
          <Typography variant='h6' typography='navMenu.label' {...dayProps}>
            {data[day]}:
          </Typography>
          {!arrowLink ? (
            <Typography variant='h6' typography='navMenu.info' {...hoursProps}>
              {data.hours}
            </Typography>
          ) : data.hours === "*appt. only" ? (
            <ArrowLink
              variant='h6'
              typography='navMenu.arrowLink'
              {...linkProps}
            >
              {data.hours}
            </ArrowLink>
          ) : (
            <Typography variant='h6' typography='navMenu.info' {...hoursProps}>
              {data.hours}
            </Typography>
          )}
        </Stack>
      ))}
    </>
  );
}

export default CompanyHours;
