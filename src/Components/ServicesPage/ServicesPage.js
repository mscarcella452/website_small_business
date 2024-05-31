import React from "react";
import { Box } from "@mui/material";

function ServicesPage() {
  return (
    <Box
      className='flexColumn'
      sx={{ height: "100vh", width: 1, backgroundColor: "red", color: "#fff" }}
    >
      <Box
        className='flexColumn'
        sx={{
          height: "300px",
          width: "800px",
          backgroundColor: "teal",
          color: "#fff",
        }}
      >
        ServicesPage
      </Box>
    </Box>
  );
}

export default ServicesPage;
