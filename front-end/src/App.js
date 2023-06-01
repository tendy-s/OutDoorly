import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import SearchResults from "./pages/search-results";
import ParkDetails from "./pages/park-details";
import { getRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path={getRoutes().home} element={<Home />} />
          <Route path={getRoutes().searchResults} element={<SearchResults />} />
          <Route path={getRoutes().parkDetails} element={<ParkDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
