import {
  Paper,
  Box,
  Typography,
  useMediaQuery,
  Link,
  Container,
  useTheme,
  Divider,
} from "@mui/material";
import { mobile, sm, md } from "../../../Theme/mediaQueries.js";
import { fonts } from "../../../Theme/ThemeContext.js";

import { heroSectionData } from "./data.js";
import CompanyAddress from "../../../HelperComponents/CompanyAddress.js";
import { useHeroSectionSx } from "../../../Styles/useHeroSectionSx.js";
import ArrowLink from "../../../HelperComponents/ArrowLink.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

const image =
  //   "https://s3-media0.fl.yelpcdn.com/bphoto/DIbnog6jGP-MGxKzwus6Ew/o.jpg";
  // "https://s.yimg.com/fz/api/res/1.2/E7z_w4.hpVOo9NEgGvLn9Q--~C/YXBwaWQ9c3JjaGRkO2g9OTIzO3E9ODA7dz0xMDAw/https://s.yimg.com/bj/6b28/6b2882eba10d26c82c61995ae3caab3b.jpg";
  // "https://decortips.com/wp-content/uploads/2019/12/tailor-shop-layout.jpg";
  // "https://i.pinimg.com/originals/cc/78/3f/cc783fcb7a3aaf8049ad104998e3c3ac.jpg";
  // "https://s3-media0.fl.yelpcdn.com/bphoto/A90OLObma55M8kgyMSJ9oA/o.jpg";
  // "https://i.pinimg.com/originals/0b/15/cb/0b15cb904a7cc76fb1bb7ebbdfd52ee3.jpg";
  "https://i.pinimg.com/originals/a6/71/77/a67177f120a8e8acac1b35ef6d391aae.jpg";
const imageArray = [
  "https://s3-media0.fl.yelpcdn.com/bphoto/DIbnog6jGP-MGxKzwus6Ew/o.jpg",
  "https://s.yimg.com/fz/api/res/1.2/E7z_w4.hpVOo9NEgGvLn9Q--~C/YXBwaWQ9c3JjaGRkO2g9OTIzO3E9ODA7dz0xMDAw/https://s.yimg.com/bj/6b28/6b2882eba10d26c82c61995ae3caab3b.jpg",
  "https://decortips.com/wp-content/uploads/2019/12/tailor-shop-layout.jpg",
  "https://i.pinimg.com/originals/cc/78/3f/cc783fcb7a3aaf8049ad104998e3c3ac.jpg",
  "https://s3-media0.fl.yelpcdn.com/bphoto/A90OLObma55M8kgyMSJ9oA/o.jpg",
  "https://i.pinimg.com/originals/0b/15/cb/0b15cb904a7cc76fb1bb7ebbdfd52ee3.jpg",
  "https://i.pinimg.com/originals/a6/71/77/a67177f120a8e8acac1b35ef6d391aae.jpg",
];

const imageSet = [
  "https://i.pinimg.com/originals/0b/15/cb/0b15cb904a7cc76fb1bb7ebbdfd52ee3.jpg",
  "https://i.pinimg.com/originals/a6/71/77/a67177f120a8e8acac1b35ef6d391aae.jpg",
];

function HeroSection() {
  const mobilePortrait = !useMediaQuery(mobile);
  // const { backgroundImage, heading, btnTitle } = heroSectionData;

  // const { variant, sx } = useHeroSectionSx({ bottomGutter: false });
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const largerScreen = useMediaQuery(theme.breakpoints.up("mobile"));

  const images = mdScreen ? Array(4).fill(null) : Array(6).fill(null);

  console.log(images);

  return (
    <Paper
      id='Home'
      elevation={0}
      variant='heroSection'
      sx={{
        minHeight: `min(calc(100vh - 50px), 960px)`,
        // minHeight: { xxs: 600, mobile: `min(calc(100vh - 70px), 800px)` },
        mt: "50px",
        display: "grid",
        gridTemplateRows: "1fr auto",
        // gap: 6,
        // gap: { xxs: 5 },
        // border: 1,
        // backgroundColor: { xxs: "red", sm: "blue", md: "teal", lg: "purple" },
      }}
    >
      <Box
        container
        sx={{
          width: 1,
          height: 1,

          // maxHeight: 853,
          minHeight: 250,

          gap: { xxs: 2, sm: 3, md: 4 },
          // px: { xxs: 2, sm: 5 },
          display: "grid",
          gridTemplateColumns: `repeat(${images.length}, 1fr)`,

          gridTemplateRows: "1fr",

          // gridTemplateColumns: {
          //   xxs: "1fr",
          //   mobile: `repeat(${images.length}, 1fr)`,
          // },
          // gridTemplateRows: {
          //   xxs: `repeat(${images.length}, 1fr)`,
          //   mobile: "1fr",
          // },
        }}
      >
        {images.map((image1, index) => (
          <Box
            item
            xxs={1}
            sx={{
              display: "grid",

              gridTemplateRows: index % 2 === 0 ? ".5fr 1fr" : "1fr .5fr",

              gridTemplateColumns: "1fr",
              // gridTemplateRows: {
              //   xxs: "1fr",
              //   mobile: index % 2 === 0 ? ".5fr 1fr" : "1fr .5fr",
              // },
              // gridTemplateColumns: { xxs: "1fr 1fr", mobile: "1fr" },

              // background: `url(${image}) center -200px / cover no-repeat fixed`,
              // overflow: "hidden",
              gap: "inherit",
            }}
          >
            {[imageSet[1], imageSet[1]].map((img, index) => (
              <Box
                item
                xxs={1}
                sx={{
                  // display: "Grid",
                  gridTemplateRows: "1fr",

                  // gridTemplateRows: {
                  //   xxs: "1fr 1fr",
                  //   mobile: index % 2 === 0 ? "1fr" : "1fr",
                  // },

                  gridTemplateColumns: "1fr",
                  // gridTemplateColumns: { xxs: "1fr 1fr", mobile: "1fr" },

                  background: `url(${img}) 100% -150px / 1500px auto no-repeat fixed`,
                  backgroundPosition: {
                    xxs: "-800px -125px",
                    mobile: "200% -150px",
                  },
                  // background: `url(${img}) 100% -150px / 1500px auto no-repeat fixed`,
                  // background: `url(${img}) center -230px / 1800px auto no-repeat fixed`,
                  // overflow: "hidden",
                }}
              />
            ))}
          </Box>
        ))}
      </Box>
      <Container
        maxWidth={false}
        // disableGutters
        // variant='section'
        sx={{
          width: 1,

          display: "grid",
          gridTemplateColumns: { xxs: "1fr", lg: "1fr 1fr" },
          alignItems: "flex-end",
          height: 1,
          gap: 6,
          // border: 1,

          // display: "none",
        }}
      >
        <Box
          className='flexRow'
          sx={{
            width: 1,
            height: 1,
            // border: 1,
            maxWidth: { xxs: 250, mobile: "xs", sm: "mobile", md: "mobile" },

            gap: 3,
            display: "grid",
            gridTemplateColumns: { xxs: "1fr", mobile: "1fr 2.5px auto" },

            // flexDirection: { xxs: "column", mobile: "row" },
            // alignItems: { xxs: "flex-start", mobile: "center" },
          }}
        >
          <Typography
            variant='h4'
            sx={{
              fontFamily: '"Libre Baskerville", serif',
              // fontWeight: 600,
              // textTransform: "lowercase",
              fontFamily: fonts.secondary,
              color: "fontColor.p",
            }}
          >
            {/* Bespoke tailoring */}
            Thomas Mitchell Clothiers
          </Typography>
          <Divider
            sx={{
              height: 1,
              backgroundColor: "fontColor.p",
              display: { xxs: "none", mobile: "block" },
            }}
          />
          <Typography
            variant='h4'
            sx={{
              color: "fontColor.p",
              fontWeight: 600,

              fontFamily: fonts.display,
              textTransform: "lowercase",
              // fontFamily: '"Libre Baskerville", serif',
              // fontFamily: '"Libre Caslon Display", serif',
            }}
          >
            {/* bespoke tailoring. */}
            bespoke tailoring for timeless elegance.
          </Typography>
        </Box>

        <Box className='flexColumn' sx={{ width: 1 }}>
          <ArrowLink
            sx={{
              fontFamily: '"Libre Baskerville", serif',
              maxWidth: { xxs: 300, md: 450 },
              width: 1,
              alignSelf: { xxs: "flex-start", lg: "center" },
              color: "fontColor.p",
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
