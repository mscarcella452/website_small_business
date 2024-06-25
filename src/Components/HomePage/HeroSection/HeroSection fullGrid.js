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
import { mobile, sm, md, mobilePortrait } from "../../../Theme/mediaQueries.js";
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

const backgroundImages = [
  "https://i.pinimg.com/originals/0b/15/cb/0b15cb904a7cc76fb1bb7ebbdfd52ee3.jpg",
  "https://i.pinimg.com/originals/a6/71/77/a67177f120a8e8acac1b35ef6d391aae.jpg",
];

function HeroSection() {
  const { companyName, heading, btnTitle } = heroSectionData;
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const largerScreen = useMediaQuery(theme.breakpoints.up("mobile"));

  const navbarHeight = largerScreen ? 100 : 70;

  const images = mdScreen ? Array(3).fill(null) : Array(3).fill(null);

  // Define reusable style constants
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
      sm: "-50px -200px",
    },
    backgroundSize: {
      // xxs: "cover",
      xxs: "1550px auto",
    },
  });

  const dummyBackground =
    "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

  return (
    <Paper
      id='Home'
      elevation={0}
      variant='heroSection'
      sx={{
        // minHeight: `min(calc(100vh - ${navbarHeight}px), 750px)`,
        minHeight: `min(calc(100vh - ${navbarHeight}px), 660px)`,
        mt: `${navbarHeight}px`,
        pt: { xxs: 0 },

        display: "grid",
        // backgroundColor: { xxs: "red", sm: "blue", md: "teal", lg: "purple" },
        gridTemplateColumns: {
          xxs: "auto  1fr 1fr",
          sm: "auto 1fr 1fr",
          md: "auto .5fr 1fr",
          lg: "auto 1fr 1fr",
        },

        gap: { xxs: 0 },
        // gap: { xxs: 1, mobile: 2, sm: 3, md: 4 },
        // gridTemplateRows: "1fr auto",
      }}
    >
      <Box
        sx={{
          width: 1,
          height: 1,

          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "inherit",
          borderRadius: "5px 0 0 5px",
          overflow: "hidden",
        }}
      >
        <Box sx={imageStyles(imageSet[1])} />
        <Box sx={{ ...imageStyles(imageSet[1]), borderRadius: "0 0 0 5px" }} />
        <Box
          className='flexColumn'
          sx={{
            width: 1,
            height: 1,
            maxWidth: { xxs: 1, mobile: 300, sm: "xs", md: "mobile" },
            borderRadius: "0 5px 0",

            // maxWidth: { xxs: 250, mobile: "xs", sm: "mobile" },

            gap: 3,
            display: "grid",
            // paddingRight: 3,

            gridTemplateColumns: {
              xxs: "1fr 2.5px auto",

              sm: "1fr 2.5px auto",
            },
          }}
        >
          <Typography
            variant={"h4"}
            sx={{
              fontFamily: fonts.secondary,
              color: "fontColor.p",
            }}
          >
            {companyName}
          </Typography>
          <Divider
            sx={{
              height: 0.75,
              backgroundColor: "fontColor.p",
            }}
          />
          <Typography
            variant='h4'
            sx={{
              color: "fontColor.p",
              fontWeight: 600,
              fontFamily: fonts.display,
              textTransform: "lowercase",
            }}
          >
            {heading}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: 1,
          height: 1,

          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "inherit",
          borderRadius: "0 0 0 5px",
          overflow: "hidden",
          // display: { xxs: "none", sm: "grid" },
        }}
      >
        <Box sx={imageStyles(imageSet[1])} />
        <Box sx={imageStyles(imageSet[1])} />
        <Box sx={imageStyles(imageSet[1])} />
      </Box>
      <Box
        sx={{
          width: 1,
          height: 1,

          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "inherit",
          borderRadius: "0 5px 5px  0",
          overflow: "hidden",
        }}
      >
        <Box sx={imageStyles(imageSet[1])} />
        <Box sx={imageStyles(imageSet[1])} />
        <Box sx={imageStyles(imageSet[1])} />
      </Box>
    </Paper>
  );
}

export default HeroSection;

{
  /* <Box
          container
          sx={{
            minHeight: 250,
            gap: { xxs: 2, sm: 3, md: 4 },
            display: "grid",
            gridTemplateColumns: `repeat(${images.length}, 1fr)`,
            gridTemplateRows: "1fr",
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
                gap: "inherit",
              }}
            >
              {[imageSet[1], imageSet[1]].map((img, index) => (
                <Box
                  sx={{
                    background: `url(${img}) 100% -150px / 1500px auto no-repeat fixed`,
                    backgroundPosition: {
                      xxs: "-800px -125px",
                      mobile: "200% -150px",
                    },
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
        </Container> */
}
