import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BrowseBones from "./pages/BrowseBones";
import WrongBook from "./pages/WrongBook";
import Exam from "./pages/Exam";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<BrowseBones />} />
        <Route path="/wrongbook" element={<WrongBook />} />
        <Route path="/exam" element={<Exam />} />
      </Routes>
    </Router>
  );
}
export default App;