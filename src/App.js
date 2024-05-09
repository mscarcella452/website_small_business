import { ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import appTheme from "./Theme/ThemeContext";
import { Paper } from "@mui/material";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeroSection from "./Components/HomePage/HeroSection";

const responsiveTheme = responsiveFontSizes(appTheme);

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={responsiveTheme}>
        <Paper
          sx={{
            width: 1,
            height: 1,
            background: "transparent",
            position: "relative",
            height: 2000,
          }}
        >
          <Navbar />
          <HeroSection />
          <Footer />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
