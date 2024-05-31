import React from "react";
import { Box } from "@mui/material";

const googleMapsUrl =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6049.1515314074095!2d-74.011579!3d40.70534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a13d9a40ab5%3A0x7b64c58a2544b7e1!2s1%20Broadway%2C%20New%20York%2C%20NY%2010004%2C%20USA!5e0!3m2!1sen!2sua!4v1712519451381!5m2!1sen!2sua";
function GoogleMap({ mapUrl = googleMapsUrl }) {
  return (
    <Box
      sx={{
        width: 1,
        // minHeight: "450px",
        height: 1,

        "& iframe": {
          width: 1,
          height: 1,
          border: "none",
        },
      }}
    >
      <iframe
        src={mapUrl}
        title='Google Maps'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      />
    </Box>
  );
}

export default GoogleMap;
