import React from "react";
import { Box } from "@mui/material";

function LookbookPage() {
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
        LookbookPage
      </Box>
    </Box>
  );
}

export default LookbookPage;
