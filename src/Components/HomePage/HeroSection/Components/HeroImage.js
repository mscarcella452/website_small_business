import React from "react";
import { Box } from "@mui/material";

const containerStyles = {
  minHeight: { xxs: "auto", sm: 400, md: "auto" },
  display: "grid",
  gap: { xxs: 1, mobile: 2, sm: 3, md: 4 },
};

const itemStyles = index => ({
  display: "grid",
  gridTemplateRows: { xxs: "1fr .25fr", mobile: "1fr .5fr" },
  // gridTemplateRows: index % 2 === 0 ? ".5fr 1fr" : "1fr .5fr",
  gridTemplateColumns: "1fr",
  gap: "inherit",
});

const imageStyles = img => ({
  background: `url(${img}) no-repeat fixed`,
  backgroundPosition: {
    // xxs: "right -100px",
    xxs: "right -160px",
    sm: "-150px -150px",
  },
  backgroundSize: {
    xxs: "cover",
    sm: "1500px auto",
  },
});

function HeroImage() {
  return (
    <Box
      sx={{
        ...containerStyles,
        gridTemplateColumns: `repeat(${images.length}, 1fr)`,
      }}
    >
      {images.map((image1, index) => (
        <Box key={index} item xxs={1} sx={itemStyles(index)}>
          {[imageSet[0], imageSet[1]].map((img, idx) => (
            <Box key={idx} sx={imageStyles(img)} />
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default HeroImage;
