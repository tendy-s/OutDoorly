import "@fontsource/poppins";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/400-italic.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SearchResults from "./pages/search-results";
import ParkDetails from "./pages/park-details";
import { getRoutes } from "./routes";
import { NavigationBar } from "./components/NavigationBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
  button: {
    fontFamily: ["Poppins", "serif"].join(","),
    fontSize: 16,
    fontWeight: 500,
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <div className="App">
          <Routes>
            <Route path={getRoutes().home} element={<Home />} />
            <Route
              path={getRoutes().searchResults}
              element={<SearchResults />}
            />
            <Route path={getRoutes().parkDetails} element={<ParkDetails />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
