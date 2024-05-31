import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import LookbookPage from "./Components/LookbookPage/LookbookPage";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./HelperComponents/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/our-services' element={<ServicesPage />} />
        <Route path='/lookbook' element={<LookbookPage />} />
        {/* <Route path='*' element={<NotFound />} /> ERROR PAGE!!!!! */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
