import {
  Paper,
  Box,
  Typography,
  useMediaQuery,
  Link,
  Container,
} from "@mui/material";
import { mobile } from "../../../Theme/mediaQueries.js";
import { fonts } from "../../../Theme/ThemeContext.js";

import { heroSectionData } from "./data.js";
import CompanyAddress from "../../../HelperComponents/CompanyAddress.js";
import { useHeroSectionSx } from "../../../Styles/useHeroSectionSx.js";
import ArrowLink from "../../../HelperComponents/ArrowLink.js";
import Grid2 from "@mui/material/Unstable_Grid2"; // Ensure you have the correct import for Grid2

const image =
  "https://i.pinimg.com/originals/a6/71/77/a67177f120a8e8acac1b35ef6d391aae.jpg";

function HeroSection() {
  // const mobilePortrait = !useMediaQuery(mobile);
  const largerScreen = useMediaQuery(mobile);
  const { backgroundImage, heading, btnTitle } = heroSectionData;

  const { variant, sx } = useHeroSectionSx({ bottomGutter: false });

  const clip = "calc(100% - 350px)";

  return (
    <Paper
      id='Home'
      elevation={0}
      // variant='heroSection'
      sx={{
        mt: "70px",
        mb: 8,
        display: "grid",

        gridTemplateRows: "1fr auto",
        minHeight: `min(calc(100vh - 70px), 1100px)`,

        // minHeight: {
        //   xxs: "auto",
        //   md: `min(calc(100vh - 70px), 1100px)`,
        // },
        // border: 1,
        alignItems: "flex-start",
      }}
    >
      <Box
        sx={{
          width: 1,
          height: 1,
          // border: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gridTemplateRows: { xxs: "1fr 1fr 1fr", sm: "1fr" },
          // gap: { xxs: 2, sm: 4 },
          px: { xxs: 2, sm: 4 },
          gap: { xxs: 2, sm: 5 },

          maxHeight: 600,
        }}
      >
        {[image, image, image].map((img, index) => (
          <Box
            sx={{
              width: 1,
              height: 1,

              display: "grid",
              gridTemplateRows: {
                xxs: "1fr",
                sm: "1fr 1fr",
                md: "1fr 1fr 1fr",
              },
              gap: "inherit",
              // display: index === 0 && { xxs: "block", sm: "none", md: "block" },
              border: 1,
            }}
          >
            {[image, image, image].map((img, index) => (
              <Box
                sx={{
                  width: 1,
                  height: 1,

                  display: "grid",
                  gridTemplateColumns: {
                    xxs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr",
                  },
                  gap: "inherit",
                }}
              >
                {[image, image, image].map((img, index) => (
                  <Box
                    sx={{
                      width: 1,
                      height: 1,

                      background: `url(${img}) center -200px / cover no-repeat fixed`,
                      // boxShadow: 1,
                      // borderRadius: "50%",
                      transition: "all 1s ease",
                      "&:hover": { borderRadius: "50%" },
                    }}
                  />
                ))}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Paper
        variant='section'
        sx={{
          width: 1,
          // border: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr auto", lg: "1fr 1fr" },
          alignItems: "flex-end",
          height: 1,
          gap: 4,
        }}
      >
        <Box
          className='flexRow'
          sx={{
            width: 1,
            height: 1,
            // border: 1,
            maxWidth: { xxs: 1, sm: 650 },
            gap: 1,
            flexDirection: { xxs: "column", xs: "row" },
            alignItems: { xxs: "flex-start", xs: "center" },
          }}
        >
          <Typography
            variant='h3'
            sx={{
              fontFamily: '"Libre Baskerville", serif',
              fontWeight: 300,
              textTransform: "lowercase",
              color: "fontColor.p",
            }}
          >
            Bespoke tailoring
          </Typography>
          <Typography
            variant={largerScreen ? "h3" : "h3"}
            sx={{
              color: "fontColor.p",
              fontWeight: 200,

              fontFamily: fonts.display,
              textTransform: "lowercase",
            }}
          >
            for timeless elegance
          </Typography>
        </Box>

        <Box className='flexColumn' sx={{ width: 1 }}>
          <ArrowLink
            sx={{
              fontFamily: '"Libre Baskerville", serif',
              maxWidth: 400,
              width: 1,
              alignSelf: { xxs: "flex-start", md: "center" },
            }}
          >
            Request A Free Consulation
          </ArrowLink>
        </Box>
      </Paper>
    </Paper>
  );
}

export default HeroSection;

function ImageGrid({ image }) {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        // border: 1,
        display: "grid",
        gridTemplateColumns: { xxs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
        gridTemplateRows: { xxs: "1fr 1fr 1fr", sm: "1fr" },
        gap: { xxs: 2, sm: 4 },
        px: { xxs: 2, sm: 4 },

        // maxHeight: 600,
      }}
    >
      {[image, image, image].map((img, index) => (
        <Box
          sx={{
            width: 1,
            height: 1,
            background: `url(${img}) center -200px / cover no-repeat fixed`,
            // display: index === 0 && { xxs: "block", sm: "none", md: "block" },
          }}
        />
      ))}
    </Box>
  );
}
