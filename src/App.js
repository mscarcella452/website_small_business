import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import LookbookPage from "./Components/LookbookPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./HelperComponents/ScrollToTop";
import { Box } from "@mui/material";
import AboutPage from "./Components/AboutPage";
import { routes } from "./data";

// const routePaths = {
//   home: "/",
//   services: "/our-services",
//   lookbook: "/lookbook",
//   contact: "/contact",
// }

function App() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "background",
      }}
    >
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path={routes.home.path} element={<HomePage />} />
        <Route path={routes.about.path} element={<AboutPage />} />
        <Route path={routes.services.path} element={<ServicesPage />} />
        <Route path={routes.lookbook.path} element={<LookbookPage />} />
        <Route path={routes.contact.path} element={<ContactPage />} />

        {/* <Route path='*' element={<NotFound />} /> ERROR PAGE!!!!! */}
      </Routes>
      <Footer />
      {/* <Container maxWidth={false} sx={{ backgroundColor: "#fff" }}>
        <Stack variant='section'>
          <Footer />
        </Stack>
      </Container> */}
    </Box>
  );
}

export default App;
