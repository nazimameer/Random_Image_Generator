import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import LandingPage from "./pages/LandingPage";
import Navigator from "./middleware/Navigator";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/home" element={<Navigator />} />
      <Route path="/home/:id" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
