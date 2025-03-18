import React from "react";
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

function masonryGaleri() {
  return (
    <div className="galeri-main">
      <div className="wide">
        <img src={foto1}></img>
      </div>
      <div className="big">
        <img src={foto2}></img>
      </div>
      <div>
        <img src={foto3}></img>
      </div>
      <div>
        <img src={foto4}></img>
      </div>
      <div>
        <img src={foto5}></img>
      </div>
      <div className="wide">
        <img src={foto6}></img>
      </div>
      <div>
        <img src={foto7}></img>
      </div>
      <div className="tall">
        <img src={foto8}></img>
      </div>
      <div className="tall">
        <img src={foto9}></img>
      </div>
      <div>
        <img src={foto10}></img>
      </div>
      <div>
        <img src={foto1}></img>
      </div>
      <div>
        <img src={foto2}></img>
      </div>
      <div>
        <img src={foto3}></img>
      </div>
      <div className="big">
        <img src={foto4}></img>
      </div>
      <div className="wide">
        <img src={foto5}></img>
      </div>
      <div>
        <img src={foto6}></img>
      </div>
      <div>
        <img src={foto7}></img>
      </div>
      <div>
        <img src={foto8}></img>
      </div>
      <div className="wide">
        <img src={foto9}></img>
      </div>
      <div>
        <img src={foto10}></img>
      </div>
      <div>
        <img src={foto1}></img>
      </div>
      <div>
        <img src={foto2}></img>
      </div>
      <div className="tall">
        <img src={foto5}></img>
      </div>
      <div className="tall">
        <img src={foto6}></img>
      </div>
      <div>
        <img src={foto3}></img>
      </div>
      <div>
        <img src={foto4}></img>
      </div>
    </div>
  );
}

export default masonryGaleri;
