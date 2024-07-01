import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import LookbookPage from "./Components/LookbookPage/LookbookPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./HelperComponents/ScrollToTop";
import Hours from "./Components/HomePage/Sections/Hours/Hours";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/our-services' element={<ServicesPage />} />
        <Route path='/lookbook' element={<LookbookPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route
          path='/hours'
          element={
            <Box sx={{ marginTop: "70px", width: 1, height: 1 }}>
              <Hours />
            </Box>
          }
        />
        {/* <Route path='*' element={<NotFound />} /> ERROR PAGE!!!!! */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
