import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import JadwalWawancara from "./pages/JadwalWawancara";
import Error from "./pages/Error";
import BottomNav from "./components/bottomnav/BottonNav";

function App() {
  return (
    <div className="omb">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hasil-seleksi" element={<JadwalWawancara />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <BottomNav /> */}
      </Router>
    </div>
  );
}

export default App;
