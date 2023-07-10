import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import LandingPage from "./pages/LandingPage";
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
