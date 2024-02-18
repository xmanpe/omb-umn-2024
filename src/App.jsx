import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import JadwalWawancara from "./pages/JadwalWawancara";
import Error from "./pages/Error";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: "/jadwal-wawancara",
        element: <JadwalWawancara />,
        errorElement: <Error />
      },
    ]
  )
  return (
    // <div className="omb">
    //   <Router>
    //     <Routes>
    //       <Route exact path="/" element={<Home />} />
    //       <Route exact path="/jadwal-wawancara" element={<JadwalWawancara />} />
    //       <Route exact path="*" element={<Error />} />
    //     </Routes>
    //   </Router>
    // </div>
    
    <div className="omb">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
