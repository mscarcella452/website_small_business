import React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { useGlobalSx } from "../../Styles/useGlobalSx";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { lookbookImages } from "./data";

function ImageGrid() {
  const sx = useGlobalSx();
  return (
    // <Paper variant='section'>
    <Grid container columns={{ xxs: 2, md: 3 }} spacing={4}>
      {lookbookImages.map((image, index) => (
        <Grid item xxs={1} sx={{ aspectRatio: 1 }}>
          <Box
            sx={{
              objectFit: "cover",
              objectPosition: "top center",
              width: 1,
              height: 1,
            }}
            component={"img"}
            src={image}
            // src={content.imgSrc}
            // alt={"About section background image."}
          />
        </Grid>
      ))}
    </Grid>
    // </Paper>
  );
}

export default ImageGrid;
