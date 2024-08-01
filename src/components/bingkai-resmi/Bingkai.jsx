import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

import "./bingkai.scss";

import BorderBingkaiOrange from "../../images/bingkai resmi/bingkai orange.png";
import BorderBingkaiBlack from "../../images/bingkai resmi/bingkai hitam.png";
import BorderBingkaiGrey from "../../images/bingkai resmi/bingkai grey.png";
import BorderBingkaiYellow from "../../images/bingkai resmi/bingkai yellow.png";

function Bingkai() {
  const [file, setFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [foto, setFoto] = useState(null);
  const [borderImageSrc, setBorderImageSrc] = useState(BorderBingkaiOrange);
  const [borderImage] = useImage(borderImageSrc);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const pinchData = useRef({ dist: 0, scale: 1 });

  const uploadFoto = (e) => {
    const uploadAvatar = e.target.files[0];
    if (uploadAvatar) {
      const url = URL.createObjectURL(uploadAvatar);
      setFile(url);
      setFileName(uploadAvatar.name);
      const img = new window.Image();
      img.src = url;
      img.onload = () => setFoto(img);
    }
  };

  const handleDragEnd = (e) => {
    setTransform((prev) => ({
      ...prev,
      x: e.target.x(),
      y: e.target.y(),
    }));
  };

  const handleWheel = (e) => {
    if (!isEditing) return;
    e.evt.preventDefault();
    const scaleBy = 1.05;
    setTransform((prev) => {
      const oldScale = prev.scale;
      const newScale =
        e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;

      const stage = e.target.getStage();
      const pointer = stage.getPointerPosition();
      const mousePointTo = {
        x: (pointer.x - stage.x()) / oldScale,
        y: (pointer.y - stage.y()) / oldScale,
      };

      return {
        scale: newScale,
        x: pointer.x - mousePointTo.x * newScale,
        y: pointer.y - mousePointTo.y * newScale,
      };
    });
  };

  const handleTouchStart = (e) => {
    if (e.evt.touches.length === 2) {
      const touch1 = e.evt.touches[0];
      const touch2 = e.evt.touches[1];
      const dist = Math.sqrt(
        Math.pow(touch1.clientX - touch2.clientX, 2) +
          Math.pow(touch1.clientY - touch2.clientY, 2)
      );
      pinchData.current.dist = dist;
      pinchData.current.scale = transform.scale;
    }
  };

  const handleTouchMove = (e) => {
    if (!isEditing || e.evt.touches.length !== 2) return;
    e.evt.preventDefault();
    const touch1 = e.evt.touches[0];
    const touch2 = e.evt.touches[1];
    const dist = Math.sqrt(
      Math.pow(touch1.clientX - touch2.clientX, 2) +
        Math.pow(touch1.clientY - touch2.clientY, 2)
    );

    const stage = e.target.getStage();
    const pointer = stage.getPointerPosition();
    const scaleFactor = dist / pinchData.current.dist;
    const newScale = pinchData.current.scale * scaleFactor;

    const mousePointTo = {
      x: (pointer.x - stage.x()) / transform.scale,
      y: (pointer.y - stage.y()) / transform.scale,
    };

    setTransform({
      scale: newScale,
      x: pointer.x - mousePointTo.x * newScale,
      y: pointer.y - mousePointTo.y * newScale,
    });
  };

  const toggleEditMode = () => {
    if (!foto) {
      alert("Upload foto");
      return;
    }
    setIsEditing((prev) => !prev);
  };

  const download = () => {
    if (!foto) {
      alert("dibilang upload dulu bang");
      return;
    }
    const uri = document.querySelector("canvas").toDataURL("image/png");
    const link = document.createElement("a");
    link.href = uri;
    link.download = filename;
    link.click();
  };

  const changeBorderImage = (borderSrc) => {
    setBorderImageSrc(borderSrc);
  };

  return (
    <div className="container-bingkai">
      <h3>Siapkah kamu mengukir :</h3>
      <button onClick={() => changeBorderImage(BorderBingkaiOrange)}>
        Border Orange
      </button>
      <button onClick={() => changeBorderImage(BorderBingkaiBlack)}>
        Border Black
      </button>
      <button onClick={() => changeBorderImage(BorderBingkaiGrey)}>
        Border Grey
      </button>
      <button onClick={() => changeBorderImage(BorderBingkaiYellow)}>
        Border Yellow
      </button>

      <div className="content-container">
        <div className="content-1">
          <input type="file" onChange={uploadFoto} />
          <div className="frame-container">
            <Stage
              width={600}
              height={600}
              onWheel={handleWheel}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchStart}
              style={{
                margin: "auto",
                display: "block",
                width: "100%",
                height: "auto",
                opacity: isEditing ? 0.9 : 1,
                transition: "opacity 0.3s",
              }}
            >
              <Layer>
                {foto && (
                  <KonvaImage
                    image={foto}
                    x={transform.x}
                    y={transform.y}
                    scaleX={transform.scale}
                    scaleY={transform.scale}
                    draggable={isEditing}
                    onDragEnd={handleDragEnd}
                  />
                )}
                {borderImage && (
                  <KonvaImage
                    image={borderImage}
                    x={0}
                    y={0}
                    width={600}
                    height={600}
                    draggable={false}
                    listening={false}
                  />
                )}
              </Layer>
            </Stage>
          </div>
        </div>
        <div className="content-2">
          <p>
            Lotus Biru mengilhami petualangan baru,
            <br />
            Saya siap mencetak sejarah baru! <br />
            …<br />
            Halo semuanya!
            <br />
            <br />
            Perkenalkan nama saya (nama lengkap), mahasiswa program studi (nama
            program studi), Universitas Multimedia Nusantara (UMN) 2024. Saya
            bangga turut serta mencetak sejarah baru dengan mengikuti Orientasi
            Mahasiswa Baru (OMB) UMN dan menjadi bagian dari keluarga besar
            Universitas Multimedia Nusantara. Saya siap menamankan ambisi untuk
            menumbuhkan potensi bagi almamater, persada, dan sesama. <br />
            <br />
            #OMBUMN2024 <br />
            #TangguhBerambisiTumbuhBerpotensi
          </p>
        </div>
      </div>
      <button onClick={toggleEditMode}>
        {isEditing ? "Selesai Mengatur Foto" : "Atur Foto"}
      </button>
      <button onClick={download}>Download Bingkai Profile</button>
    </div>
  );
}

export default Bingkai;
