import {
  Paper,
  Box,
  Typography,
  useMediaQuery,
  Link,
  Container,
  useTheme,
} from "@mui/material";
import { mobile, sm, md } from "../../../Theme/mediaQueries.js";
import { fonts } from "../../../Theme/ThemeContext.js";

import { heroSectionData } from "./data.js";
import CompanyAddress from "../../../HelperComponents/CompanyAddress.js";
import { useHeroSectionSx } from "../../../Styles/useHeroSectionSx.js";
import ArrowLink from "../../../HelperComponents/ArrowLink.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const image =
  "https://i.pinimg.com/originals/a6/71/77/a67177f120a8e8acac1b35ef6d391aae.jpg";

function HeroSection() {
  const mobilePortrait = !useMediaQuery(mobile);
  // const { backgroundImage, heading, btnTitle } = heroSectionData;

  // const { variant, sx } = useHeroSectionSx({ bottomGutter: false });
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const largerScreen = useMediaQuery(theme.breakpoints.up("mobile"));

  const images = mdScreen ? Array(4).fill(null) : Array(2).fill(null);

  console.log(images);

  return (
    <Paper
      id='Home'
      elevation={0}
      variant='heroSection'
      sx={{
        mt: "70px",

        // mb: 8,
        display: "grid",

        gridTemplateRows: "1fr auto",
        minHeight: { xxs: 600, md: `min(calc(100vh - 70px), 800px)` },
        // border: 1,
        gap: 6,

        // minHeight: {
        //   xxs: "auto",
        //   md: `min(calc(100vh - 70px), 1100px)`,
        // },
        // border: 1,
        alignItems: "flex-start",
        // backgroundColor: { xxs: "red", sm: "blue", md: "teal", lg: "purple" },
      }}
    >
      <Box
        container
        sx={{
          width: 1,
          height: 1,
          // border: 1,

          // maxHeight: 500,
          gap: { xxs: 2, sm: 3, md: 3 },
          // px: { xxs: 2, sm: 5 },
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr",
            mobile: `repeat(${images.length}, 1fr)`,
          },
          gridTemplateRows: {
            xxs: `repeat(${images.length}, 1fr)`,
            mobile: "1fr",
          },
        }}
      >
        {images.map((img, index) => (
          <Box
            item
            xxs={1}
            sx={{
              display: "grid",
              gridTemplateRows: { xxs: "1fr", mobile: "1fr" },
              gridTemplateColumns: {
                xxs: "1fr 1fr",
                mobile: "1fr 1fr",
              },

              // border: 1,
              // background: `url(${image}) center -200px / cover no-repeat fixed`,
              // overflow: "hidden",
              gap: 3,
            }}
          >
            {["", ""].map((img, index) => (
              <Box
                item
                xxs={1}
                sx={{
                  display: "Grid",
                  gridTemplateRows: {
                    xxs: "1fr 1fr",
                    mobile: index % 2 === 0 ? ".75fr 0" : "1fr 0",
                  },
                  // background: "Red",

                  gridTemplateColumns: { xxs: "1fr 1fr", mobile: "1fr" },

                  gap: "inherit",
                  // borderRadius: {
                  //   xxs: 3,
                  //   // mobile: index % 2 === 0 ? 3 : 0,
                  // },
                  // border: 1,
                  // overflow: "hidden",

                  // background: `url(${image}) center -200px / cover no-repeat fixed`,
                  // overflow: "hidden",
                }}
              >
                {["", ""].map((img, index) => (
                  <Box
                    item
                    xxs={1}
                    sx={{
                      background: `url(${image}) center -200px / cover no-repeat fixed`,
                      // boxShadow: 2,
                      // border: 1,
                      // borderRadius: index % 2 === 0 ? "5px" : 0,
                      // boxShadow: index % 2 === 0 ? 10 : 0,
                      opacity: index % 2 === 0 ? 1 : 0,

                      // overflow: "hidden",
                    }}
                  ></Box>
                ))}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <Container
        disableGutters
        // variant='section'
        sx={{
          width: 1,
          // border: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr .75fr", lg: "1fr 1fr" },
          alignItems: "flex-end",
          height: 1,
          gap: 6,
        }}
      >
        <Box
          className='flexRow'
          sx={{
            width: 1,
            height: 1,
            // border: 1,
            maxWidth: { xxs: 1, sm: "mobile", md: 650 },
            // border: 1,
            gap: 1,
            flexDirection: { xxs: "column", mobile: "row" },
            alignItems: { xxs: "flex-start", mobile: "center" },
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
            variant={"h3"}
            sx={{
              color: "fontColor.p",
              fontWeight: 200,

              width: 1,

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
      </Container>
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
