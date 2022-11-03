import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact/Contact";
import "./index.css";
import Home from "./Pages/Home/home";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="first-stage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
