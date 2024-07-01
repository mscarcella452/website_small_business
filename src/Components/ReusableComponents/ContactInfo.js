import { Box, Typography } from "@mui/material";
import companyData from "../../data/CompanyData";

function ContactInfo({ labelProps, contactProps, ...rest }) {
  const labels = ["phone", "email", "address"];
  return (
    <>
      {[companyData.phone, companyData.email, companyData.address].map(
        (data, index) => (
          <Box
            key={index}
            className='flexRow'
            sx={{
              width: 1,
              justifyContent: "flex-end",
              overflowWrap: "break-word", // Ensures content wraps at any character, not just whitespaces
              wordBreak: "break-word", // Ensures long strings without spaces can break mid-word if needed
              gap: 1,
            }}
            {...rest}
          >
            <Typography variant='h6' typography='navMenu.label' {...labelProps}>
              {labels[index]}:
            </Typography>
            <Typography
              variant='h6'
              typography='navMenu.info'
              {...contactProps}
            >
              {data}
            </Typography>
          </Box>
        )
      )}
    </>
  );
}

export default ContactInfo;
