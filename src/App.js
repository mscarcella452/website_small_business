import { ThemeProvider } from "@mui/material/styles";
import appTheme from "./Theme/ThemeContext";

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={appTheme}>My app</ThemeProvider>
    </div>
  );
}

export default App;
