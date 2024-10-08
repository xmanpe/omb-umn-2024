import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import JadwalWawancara from "./pages/JadwalWawancara";
import PesertaMengulang from "./pages/PesertaMengulang";
import TentangOMB from "./pages/TentangOMB";
import Error from "./pages/Error";
import BottomNav from "./components/bottomnav/BottomNav";
import AtributPeserta from "./pages/atribut-peserta/AtributPeserta";
import PelaksanaanRevisi from "./pages/pelaksanaan/PelaksanaanRevisi";
import RembakaAnindita from "./pages/rembaka-anindita/RembakaAnindita";
import Mobilitas from "./pages/mobilitas/Mobilitas";
import Linimasa from "./pages/Linimasa";
import DivisiOMB from "./pages/DivisiOMB";
import MarsOMB from "./pages/MarsOMB";
import Faq from "./pages/Faq";
import BingkaiPageRevisi from "./pages/bingkai/BingkaiPageRevisi";
import Penugasan from "./pages/penugasan/Penugasan";

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
          <Route path="/mobilitas-peserta" element={<Mobilitas />} />
          <Route path="/divisi" element={<DivisiOMB />} />
          <Route path="/linimasa" element={<Linimasa />} />
          <Route path="/mars" element={<MarsOMB />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/bingkai-resmi" element={<BingkaiPageRevisi />} />
          <Route path="/aksi-sosial" element={<Penugasan />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
