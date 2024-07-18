import { Typography, Stack } from "@mui/material";
import companyData from "../../data/companyData";

function CompanyInfo({
  type = "contact",
  hideLabel = false,
  labelKey = "full",
  variant = "p",
  ...rest
}) {
  const data = { contact: companyData.contact, hours: companyData.hours };

  return (
    <>
      {data[type].map(({ label, info, linkProps }, index) => (
        <Stack
          key={index}
          sx={{
            overflowWrap: "break-word", // Ensures content wraps at any character, not just whitespaces
            wordBreak: "break-word", // Ensures long strings without spaces can break mid-word if needed
            gap: { xxs: 1, xs: 2 },
          }}
          {...rest}
        >
          {!hideLabel && (
            <Typography variant={variant} typography='companyInfo'>
              {type === "hours" ? label[labelKey] : label}
            </Typography>
          )}
          {/* when type === contact, the componet is a link */}
          <Typography variant={variant} typography='companyInfo' {...linkProps}>
            {info}
          </Typography>
        </Stack>
      ))}
    </>
  );
}

export default CompanyInfo;
