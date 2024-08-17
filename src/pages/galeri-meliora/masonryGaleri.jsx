import React, { useEffect } from "react";
import Masonry from "react-masonry-css";
import "./masonrygaleri.scss";

import foto1 from "../../images/meliora/foto/images-2.jpeg";
import foto2 from "../../images/meliora/foto/images-3.jpeg";
import foto3 from "../../images/meliora/foto/images.jpeg";
import foto4 from "../../images/meliora/foto/pexels-pixabay-15239.jpg";
import foto5 from "../../images/meliora/foto/images-2.jpeg";
import foto6 from "../../images/meliora/foto/images-3.jpeg";
import foto7 from "../../images/meliora/foto/images.jpeg";
import foto8 from "../../images/meliora/foto/pexels-pixabay-15239.jpg";
import foto9 from "../../images/meliora/foto/fixed-ratio.png.webp";
import foto10 from "../../images/meliora/foto/premium_photo-1701693533734-bc279bdd0c80.webp";

const photos = [
  foto1,
  foto4,
  foto2,
  foto3,
  foto4,
  foto6,
  foto4,
  foto8,
  foto9,
  foto5,
  foto2,
  foto3,
  foto4,
  foto4,
  foto2,
  foto3,
  foto4,
  foto6,
  foto4,
  foto8,
  foto9,
  foto5,
  foto2,
  foto10,
];

function masonryGaleri() {
  const breakpointColObj = {
    default: 5,
    1200: 4,
    810: 3,
    560: 2,
  };
  return (
    <Masonry
      breakpointCols={breakpointColObj}
      className="masonry-galeri"
      columnClassName="masonry-galeri-coloumn"
    >
      {photos.map((foto, index) => (
        <div className="masonry-galeri-item" key={index}>
          <img src={foto} alt="galeri" />
        </div>
      ))}
    </Masonry>
  );
}

export default masonryGaleri;
