import React from "react";
import { Box } from "@mui/material";
import { InlineWidget } from "react-calendly";
import { PopupWidget } from "react-calendly";

const AppointmentScheduler = () => (
  <Box className='inline-widget'>
    <InlineWidget url='https://calendly.com/smallbusinesswebsite159' />
  </Box>
);

export default AppointmentScheduler;

{
  /* <Box className='popup-widget'>
  <PopupWidget
    url='https://calendly.com/smallbusinesswebsite159'
    rootElement={document.getElementById("root")}
    text='Make An Appointment'
    textColor='#ffffff'
    color='#319795'
  />
</Box> */
}
