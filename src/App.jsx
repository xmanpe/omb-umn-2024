import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import JadwalWawancara from "./pages/JadwalWawancara";
import PesertaMengulang from "./pages/PesertaMengulang";
import Pelaksanaan from "./pages/pelaksanaan/Pelaksanaan";
import TentangOMB from "./pages/tentang-omb/TentangOMB";
import Error from "./pages/Error";
import BottomNav from "./components/bottomnav/BottonNav";
import AtributPeserta from "./pages/atribut-peserta/AtributPeserta"

import PelaksanaanRevisi from "./pages/pelaksanaan/PelaksanaanRevisi";
import RembakaAnindita from "./pages/rembaka-anindita/RembakaAnindita";

function App() {
  return (
    <div className="omb">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hasil-seleksi" element={<JadwalWawancara />} />
          <Route path="/daftar-peserta" element={<PesertaMengulang />} />
          <Route path="/pelaksanaan" element={<PelaksanaanRevisi />} />
          <Route path="/tentang-omb" element={<TentangOMB />} />
          <Route path="/atribut-peserta" element={<AtributPeserta />} />
          <Route path="/rembaka-anindita" element={<RembakaAnindita />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
