import Header from "./components/Header";
import Banner from "./components/Banner";
import Capsules from "./components/Capsules";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/capsules" element={<Capsules />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
