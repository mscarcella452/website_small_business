import { Container, Paper, Typography } from "@mui/material";
import { servicesGridData } from "./data";
import ServiceItem from "./Components/ServiceItem";

function ServicesGrid() {
  return (
    <Paper variant='section'>
      <Container
        maxWidth={false}
        sx={{
          gap: 8,
          display: "grid",
          gridTemplateColumns: {
            xxs: "1fr",
            md: "1fr 1fr",
          },
          alignItems: "flex-start",
          justifyItems: { xxs: "flex-start", md: "center" },
        }}
      >
        {servicesGridData.map(service => (
          <ServiceItem service={service} />
        ))}
      </Container>
    </Paper>
  );
}

export default ServicesGrid;
