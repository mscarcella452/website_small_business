import { Paper, Box, Container, Typography } from "@mui/material";
import { useSectionSx } from "../../../Styles/useSectionSx";

import BespokeAccordion from "./Components/BespokeAccordion";
import { bespokeData } from "./data";

function BespokeServices() {
  const { description, accordionPanels } = bespokeData;
  const { variant, sx } = useSectionSx();
  return (
    <Paper variant='section' className='flexColumn' sx={{ gap: 8 }}>
      <Container maxWidth={false} sx={sx.section_container}>
        <Typography variant={variant.heading_p} sx={sx.heading_p}>
          {description}
        </Typography>
      </Container>

      <Container maxWidth={"lg"} sx={sx.section_container}>
        <BespokeAccordion
          panels={accordionPanels}
          maxWidth={{ xxs: 1, sm: "sm" }}
        />
      </Container>
    </Paper>
  );
}

{
  /* <ServicesGrid /> */
}
export default BespokeServices;
