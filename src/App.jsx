import React from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home";
import JadwalWawancara from "./pages/JadwalWawancara";
import Error from "./pages/Error";
import BottomNav from "./components/bottomnav/BottonNav";

function App() {
  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: "/",
  //       element: <Home />,
  //       errorElement: <Error />,
  //     },
  //     {
  //       path: "/jadwal-wawancara",
  //       element: <JadwalWawancara />,
  //       errorElement: <Error />,
  //     },
  //   ]
  // );

  return (
    // <div className="omb">
    //   <RouterProvider router={router} />
    //   <BottomNav />
    // </div>
    <div className="omb">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jadwal-wawancara" element={<JadwalWawancara />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <BottomNav />
      </Router>
    </div>
  );
}

export default App;
