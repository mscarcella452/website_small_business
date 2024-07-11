// import React from "react";
import { Box, Typography, useTheme, Stack, useMediaQuery } from "@mui/material";
import { contactData } from "./data.js";
import ArrowLink from "../../../../HelperComponents/ArrowLink.js";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import { ContactInfo, CompanyHours } from "../../../ReusableComponents";

function ContactUs() {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up("md"));
  const isAtLeastSm = useMediaQuery(theme.breakpoints.up("sm"));
  const { heading, content, image } = contactData;
  const { heading: hv, subHeading: shv } = theme.typography.variants;

  const info = [
    {
      title: "Our Hours",
      component: (
        <CompanyHours
          direction='row'
          day={isAtLeastSm ? "day" : "abrievDay"}
          // sx={{
          //   // border: 0,
          //   justifyContent: "end",
          //   gap: 2,
          //   // // border: 1,
          //   // maxWidth: "xs",
          //   // width: 1,
          //   // alignSelf: "center",
          // }}
          dayProps={{
            typography: "heading.p",
            fontWeight: "350",
            variant: "p",
          }}
          hoursProps={{
            typography: "heading.p",
            fontWeight: "350",
            variant: "p",
          }}
        />
      ),
    },
    {
      title: "Contact Info",
      component: (
        <ContactInfo
          labelProps={{ display: "none" }}
          contactProps={{
            typography: "heading.p",
            fontWeight: "350",
            variant: "p",
            // textAlign: "right",
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Grid
        container
        columns={{ xxs: 1, md: 1 }}
        spacing={{
          xxs: theme.spacing(6),
          // sm: theme.spacing(6),
          md: theme.spacing(8),
          lg: theme.spacing(24),
        }}
        // sx={{ maxWidth: "lg", alignSelf: "center" }}
      >
        {info.map(({ title, component }, index) => (
          <Grid xxs={1}>
            <Stack
              direction='row'
              key={index}
              sx={{
                gap: 5,
                // textAlign: "center",
                // maxWidth: "mobile",
                margin: "auto",
                // backgroundColor: "background.primary",
                // padding: 4,
                // borderRadius: 2,

                height: 1,

                // border: 1,
                // maxWidth: "mobile",
                // justifyContent: "center",
              }}
            >
              <Box
                // className='content_img'
                component={"img"}
                src={contactImages[index]}
                // alt={image.alt}
                sx={{
                  // border: 1,
                  height: 400,
                  aspectRatio: 1.25,
                  objectFit: "cover",
                  objectPosition: "top center",
                  order: 1,
                }}
              />
              {/* <Typography
                variant={"h4"}
                typography='heading.title'
                sx={{ textAlign: index === 1 && "right" }}
                // sx={{ color: "#fff" }}
              >
                {title}
              </Typography> */}
              <Stack
                sx={{
                  // backgroundImage: `url(${contactImages[index]})`,
                  // backgroundPosition: "top center",
                  // backgroundSize: "cover",
                  // backgroundColor: "secondary.main",
                  // backgroundBlendMode: "overlay",
                  width: 1,
                  // aspectRatio: 1.5,
                  // textAlign: index === 1 && "right",
                  // order: -1,
                  justifyContent: "center",
                  // textAlign: "center",
                  // height: 400,
                  // padding: 2,
                  // color: "background.secondary",
                }}
                gap={3}
              >
                <Typography
                  variant={"h2"}
                  typography='heading.title'
                  sx={{
                    // textAlign: index === 1 && "right",
                    // color: "background.secondary",
                    fontWeight: 500,
                  }}
                  // sx={{ color: "#fff" }}
                >
                  {title}
                </Typography>
                {component}
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack variant='heading'>
        <Typography
          variant={"h2"}
          typography={"displayFont"}
          sx={{
            // fontWeight: "300",
            textAlign: "left",
          }}
        >
          {/* your consultation awaits */}
          get in touch
        </Typography>
        <Typography variant={"p"} typography={"heading.p"}>
          Reach out to us for bespoke tailoring consultations, fittings, or any
          inquiries. Our team at Thomas Mitchell Clothiers is dedicated to
          providing personalized service and ensuring that every detail of your
          experience is exceptional.
        </Typography>
      </Stack>
      <ArrowLink
        variant={"h6"}
        typography='heading.link'
        alignSelf='start'
        sx={{ width: 1, maxWidth: "xs" }}
      >
        Contact Us
      </ArrowLink>
    </>
  );
}

export default ContactUs;

const contactImages = [
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
  "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
];
