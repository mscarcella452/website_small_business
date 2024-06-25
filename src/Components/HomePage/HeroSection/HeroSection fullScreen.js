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

const dummyBackground =
  // "https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjEwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/cms/TS-suits-05.jpg";
  // "https://s3-media0.fl.yelpcdn.com/bphoto/A90OLObma55M8kgyMSJ9oA/o.jpg";
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

function HeroSection() {
  const { companyName, heading, btnTitle, backgroundImages } = heroSectionData;
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.up("md"));
  const largerScreen = useMediaQuery(theme.breakpoints.up("mobile"));

  const navbarHeight = largerScreen ? 70 : 70;

  const images = mdScreen ? Array(4).fill(null) : Array(3).fill(null);

  // Define reusable style constants
  const containerStyles = {
    minHeight: { xxs: "auto", sm: 400, md: "auto" },
    display: "grid",
    gap: { xxs: 1, mobile: 2, sm: 3, md: 4 },
    maxHeight: { xxs: "50vh", mobile: "none" },
  };

  const itemStyles = index => ({
    display: "grid",
    gridTemplateRows: { xxs: "1fr .25fr", mobile: "1fr .5fr" },
    // gridTemplateRows: index % 2 === 0 ? ".5fr 1fr" : "1fr .5fr",
    gridTemplateColumns: "1fr",
    gap: "inherit",
  });

  const imageStyles = img => ({
    background: `url(${img}) center ${navbarHeight}px / cover no-repeat fixed`,
    // backgroundPosition: `center ${navbarHeight}px`,

    backgroundSize: {
      xxs: "cover",
      // sm: "1600px auto",
    },
  });

  return (
    <Paper
      id='Home'
      elevation={0}
      variant='heroSection'
      sx={{
        // minHeight: `min(calc(100vh - ${navbarHeight}px), 750px)`,
        minHeight: {
          xxs: 600,
          mobile: `min(calc(100vh - ${navbarHeight}px), 860px)`,
        },
        // minHeight: `min(calc(100vh - ${navbarHeight}px), 860px)`,
        mt: `${navbarHeight}px`,
        // mt: "40px",

        p: { xxs: 0 },
        py: { xxs: 0, md: 0 },
        pt: { xxs: 0, md: 0 },
        // pb: { xxs: 0, md: 3 },
      }}
    >
      {/* <Container sx={{ width: 1, flexGrow: 1, border: 1 }}></Container> */}
      <Box
        // maxWidth='1400px'
        sx={{
          ...imageStyles(dummyBackground),
          alignSelf: "Center",
          width: 1,
          flexGrow: 1,

          // borderRadius: { xxs: 0, md: 2 },
          // overflow: "hidden",
          position: "relative",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          padding: { xxs: 4, sm: 6 },
          zIndex: 1,
          // transform: "scaleX(-1)",
          // transformOrigin: "center",
          "&:before": {
            content: "''",
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#000",
            opacity: 0.45, // Adjust opacity here
            mixBlendMode: "multiply", // or any other blend mode
          },
        }}
      >
        <Box
          className='flexRow'
          sx={{
            width: 1,
            // height: 1,
            // flexGrow: 1,
            // border: 1,
            maxWidth: { xxs: 1, mobile: "xs", sm: 350 },
            // transform: "scaleX(-1)",
            // transformOrigin: "center",

            // maxWidth: { xxs: 250, mobile: "xs", sm: "mobile" },

            gap: 3,
            display: "flex",

            // gridTemplateColumns: {
            //   xxs: "2.5px auto",
            //   mobile: " 2.5px auto",
            // },
            justifyContent: "flex-start",
            color: "background.primary",
          }}
        >
          {/* <Typography
            variant='h4'
            sx={{
              fontFamily: fonts.secondary,
              color: "inherit",
              fontWeight: 700,
            }}
          >
            {companyName}
          </Typography> */}
          <Divider
            sx={{
              height: 1,
              height: 1,
              width: "2.5px",
              minHeight: 70,
              backgroundColor: "background.primary",
              // display: { xxs: "none", mobile: "block" },
            }}
          />
          <Typography
            variant='h3'
            sx={{
              color: "inherit",
              fontWeight: 700,
              fontFamily: fonts.display,
              textTransform: "lowercase",
            }}
          >
            {/* {heading} */}
            beskpoke tailoring
          </Typography>
        </Box>
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
