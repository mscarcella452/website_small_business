import React from "react";
import { Box } from "@mui/material";
import { HeroSection } from "../ReusableComponents";
import AppointmentScheduler from "./AppointmentScheduler";

const heroSectionData = {
  heading: "Contact Us",
  btnTitle: "Make An Appointment",
  backgroundImage:
    "https://alterations-express.com/wp-content/uploads/2021/09/4.png",
};

function ContactPage() {
  return (
    <Box
      backgroundColor='background.primary'
      sx={{ width: 1, height: 1, position: "relative", overflow: "hidden" }}
    >
      <HeroSection data={heroSectionData} />
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: "column",
          padding: { xxs: "2rem 0", mobile: "3rem 0", md: "4rem 0" },
          mb: "3rem",
          gap: { xxs: "2rem 0", mobile: "3rem 0", md: "4rem 0" },
        }}
      >
        {/* <AppointmentScheduler /> */}
      </Box>
    </Box>
  );
}

export default ContactPage;
