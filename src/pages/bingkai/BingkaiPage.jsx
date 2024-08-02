import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useImage from "use-image";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./bingkaipage.scss";

//default border image
import BorderBingkaiINFO from "../../images/bingkai resmi/TEKNIK INFO/Twibbon Teknik-01.png";
import BorderBingkaiDKV from "../../images/bingkai resmi/SENI DAN DESAIN/Twibbon fsrd-01.png";
import BorderBingkaiMANE from "../../images/bingkai resmi/BISNIS DAN D3 PERHOTELAN/Twibbon Mene-01.png";
import BorderBingkaiILKOM from "../../images/bingkai resmi/ILKOM/Jurnalistik.png";

//jurusan lain border image
//teknik
import BorderBingkaiINFO2 from "../../images/bingkai resmi/TEKNIK INFO/Twibbon Teknik-02.png";
import BorderBingkaiINFO3 from "../../images/bingkai resmi/TEKNIK INFO/Twibbon Teknik-03.png";
import BorderBingkaiINFO4 from "../../images/bingkai resmi/TEKNIK INFO/Twibbon Teknik-04.png";
import BorderBingkaiINFO5 from "../../images/bingkai resmi/TEKNIK INFO/Twibbon Teknik-05.png";

//seni
import BorderBingkaiDKV2 from "../../images/bingkai resmi/SENI DAN DESAIN/Twibbon fsrd-02.png";
import BorderBingkaiDKV3 from "../../images/bingkai resmi/SENI DAN DESAIN/Twibbon fsrd-03.png";

//ilkom
import BorderBingkaiILKOM2 from "../../images/bingkai resmi/ILKOM/Strategi Komunikasi.png";

//bisnis
import BorderBingkaiMANE2 from "../../images/bingkai resmi/BISNIS DAN D3 PERHOTELAN/Twibbon Mene-02.png";
import BorderBingkaiMANE3 from "../../images/bingkai resmi/BISNIS DAN D3 PERHOTELAN/Twibbon Mene-03.png";

//svg
import arrowNext from '../../images/bingkai resmi/Button Next.svg'
import arrowBack from '../../images/bingkai resmi/Button PREV.svg'

function BingkaiPage() {
  const top = "Bingkai Resmi";
  const bottom = "lorem ipsum";

  const [file, setFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [foto, setFoto] = useState(null);
  const [borderImageSrc, setBorderImageSrc] = useState(BorderBingkaiINFO);
  const [borderImage] = useImage(borderImageSrc);
  const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
  const [isEditing, setIsEditing] = useState(false);
  const pinchData = useRef({ dist: 0, scale: 1 });

  const [copied, setCopied] = useState(false);
  const textToCopy = `🪷
  Lotus Biru merajut kisah indah,
  Saya siap untuk awali langkah!\n
  Perkenalkan nama saya (nama), mahasiswa dari program studi (prodi), Universitas Multimedia Nusantara 2024. Saya bangga untuk mencetak sejarah baru dengan mengikuti Orientasi Mahasiswa Baru UMN 2024 dan menjadi bagian dari keluarga besar Universitas Multimedia Nusantara. \n
  Saya siap untuk tangguhkan ambisi dan menumbuhkan potensi bagi almamater, persada, dan sesama.\n
  #OMBUMN2024
  #TangguhBerambisiTumbuhBerpotensi`;

  const [sliderState, setSliderState] = useState(0);
  const slides = [
    { text: "Fakultas Teknik & Informatika", borders: [BorderBingkaiINFO, BorderBingkaiINFO2, BorderBingkaiINFO3, BorderBingkaiINFO4, BorderBingkaiINFO5] },
    { text: "Fakultas Seni & Desain", borders: [BorderBingkaiDKV, BorderBingkaiDKV2, BorderBingkaiDKV3] },
    { text: "Fakultas Ilmu Komunikasi", borders: [BorderBingkaiILKOM, BorderBingkaiILKOM2] },
    { text: "Fakultas Bisnis & D3 Perhotelan", borders: [BorderBingkaiMANE, BorderBingkaiMANE2, BorderBingkaiMANE3] }
  ];

  const [currentSlide, setCurrentSlide] = useState(slides[0]);
  const [borderIndex, setBorderIndex] = useState(0);
  const [dotIndex, setDotIndex] = useState(0);

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

  const nextBorderImage = () => {
    const newIndex = (borderIndex + 1) % currentSlide.borders.length;
    setBorderIndex(newIndex);
    setDotIndex(newIndex);
    changeBorderImage(currentSlide.borders[newIndex]);
  };

  const prevBorderImage = () => {
    const newIndex = (borderIndex - 1 + currentSlide.borders.length) % currentSlide.borders.length;
    setBorderIndex(newIndex);
    setDotIndex(newIndex);
    changeBorderImage(currentSlide.borders[newIndex]);
  };

  return (
    <div className="main-container">
      <Header top={top} bottom={bottom} />
      <div className="body-container">
        <div className="title">
          <h2>Awali pijakanmu melalui Bingkai Resmi OMB UMN 2024!</h2>
          <div className="teks-title">
            <p>
              Tunjukan semangat solidaritasmu di OMB UMN 2024, dengan mengunggah
              foto diri menggunakan bingkai resmi sesuai program studi
              masing-masing!
            </p>
          </div>
        </div>
        <div className='slider'>
          {slides.map((slide, index) => (
            <button
              key={index}
              className={`slider-button ${sliderState === index ? 'active' : ''}`}
              onClick={() => {
                setSliderState(index);
                setCurrentSlide(slide);
                setBorderIndex(0);
                setDotIndex(0);
                changeBorderImage(slide.borders[0]);
              }}
            >
              {slide.text}
            </button>
          ))}
        </div>
        <div className="content-container">
          <div className="content-1">
            <button onClick={prevBorderImage} className="carousel-control left">
              <img src={arrowBack} alt="" />
            </button>
            <div className="frame-container">
              <Stage
                className="stage-layer"
                width={window.innerWidth < 560 ? window.innerWidth * 0.9 : 500}
                height={window.innerWidth < 560 ? window.innerWidth * 0.9 : 500}
                onWheel={handleWheel}
                onTouchMove={handleTouchMove}
                onTouchStart={handleTouchStart}
                style={{
                  margin: "auto",
                  display: "block",
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
                      width={window.innerWidth < 560 ? window.innerWidth * 0.9 : 500}
                      height={window.innerWidth < 560 ? window.innerWidth * 0.9 : 500}
                      draggable={false}
                      listening={false}
                    />
                  )}
                </Layer>
              </Stage>
              <div className="area-2">
                <div className="mobile-arrow">
                  <button onClick={prevBorderImage} className="carousel-control2 left2">
                    <img src={arrowBack} alt="" />
                  </button>
                  <div className="dots-container">
                    {currentSlide.borders.map((_, index) => (
                      <div
                        key={index}
                        className={`dot ${dotIndex === index ? 'active' : ''}`}
                        onClick={() => {
                          setBorderIndex(index);
                          setDotIndex(index);
                          changeBorderImage(currentSlide.borders[index]);
                        }}
                      />
                    ))}
                  </div>
                  <button onClick={nextBorderImage} className="carousel-control2 right2">
                    <img src={arrowNext} alt="" />
                  </button>
                </div>

                <div className="note">
                  <p><i>Geser sesuai pilihan jurusan-mu!</i></p>
                </div>
                <div className="area-button">
                  <label class="upload-avatar-container">
                    <input class="upload-avatar" type="file" onChange={uploadFoto} />
                    <span>Unggah</span>
                  </label>
                  <button onClick={toggleEditMode} className="setting-foto">
                    {isEditing ? "Selesai Mengatur Foto" : "Atur Foto"}
                  </button>
                  <button className="download-button-br" onClick={download}>Unduh</button>
                </div>
              </div>
            </div>
            <button onClick={nextBorderImage} className="carousel-control right">
              <img src={arrowNext} alt="" />
            </button>
          </div>
          <div className="content-2">
            <div className="isi-content-2">
              <div dangerouslySetInnerHTML={{ __html: textToCopy.replace(/\n/g, '<br />') }} />
            </div>
            <CopyToClipboard text={textToCopy} onCopy={() => setCopied(true)}>
              <button className="copy-text">Salin Teks</button>
            </CopyToClipboard>
            {copied && <span style={{ color: 'green' }}>Tersalin!</span>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BingkaiPage;
