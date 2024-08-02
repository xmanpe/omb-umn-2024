import React, { useState, useRef } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useImage from "use-image";
import "./BingkaiPageRevisi.scss";

import FotoArtis from '../../images/bingkai resmi/fotoartis.png'

import BorderInformatika from "../../images/bingkai resmi/TEKNIK INFO/Informatika.png";
import BorderSistemInformasi from "../../images/bingkai resmi/TEKNIK INFO/SistemInformasi.png";
import BorderTeknikKomputer from "../../images/bingkai resmi/TEKNIK INFO/TeknikKomputer.png";
import BorderTeknikFisika from "../../images/bingkai resmi/TEKNIK INFO/TeknikFisika.png";
import BorderTeknikElektro from "../../images/bingkai resmi/TEKNIK INFO/TeknikElektro.png";
import BorderManajemen from "../../images/bingkai resmi/BISNIS DAN D3 PERHOTELAN/Manajemen.png";
import BorderAkuntansi from "../../images/bingkai resmi/BISNIS DAN D3 PERHOTELAN/Akuntansi.png";
import BorderPerhotelan from "../../images/bingkai resmi/BISNIS DAN D3 PERHOTELAN/Perhotelan.png";
import BorderKomunikasiStrategis from "../../images/bingkai resmi/ILKOM/StrategisKomunikasi.png";
import BorderJurnalistik from "../../images/bingkai resmi/ILKOM/Jurnalistik.png";
import BorderArsitektur from "../../images/bingkai resmi/SENI DAN DESAIN/Arsitektur.png";
import BorderDKV from "../../images/bingkai resmi/SENI DAN DESAIN/DKV.png";
import BorderFilm from "../../images/bingkai resmi/SENI DAN DESAIN/FilmAnimasi.png";

import Download from '../../images/icons/Interface/Download.svg'
import Copy from '../../images/icons/Edit/Copy.svg'
import Checked from '../../images/icons/Interface/Check.svg'

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";



function BingkaiPage() {
    const top = `Bingkai Resmi`;
    const bottom = `Awali pijakanmu melalui Bingkai Resmi OMB UMN 2024!`;
    const veryBottom = `Yuk, unggah foto diri menggunakan bingkai resmi sesuai program studi masing-masing!`

    const [step, setStep] = useState(1);
    const [name, setName] = useState("");
    const [major, setMajor] = useState("");
    const [file, setFile] = useState(null);
    const [foto, setFoto] = useState(null);
    const [borderImageSrc, setBorderImageSrc] = useState("");
    const [borderImage] = useImage(borderImageSrc);
    const [transform, setTransform] = useState({ scale: 1, x: 0, y: 0 });
    const [isEditing, setIsEditing] = useState(false);
    const pinchData = useRef({ dist: 0, scale: 1 });
    const [copied, setCopied] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const majors = [
        { value: "informatika", label: "Informatika", border: BorderInformatika, faculty: "Fakultas Teknik & Informatika" },
        { value: "sistem_informasi", label: "Sistem Informasi", border: BorderSistemInformasi, faculty: "Fakultas Teknik & Informatika" },
        { value: "teknik_komputer", label: "Teknik Komputer", border: BorderTeknikKomputer, faculty: "Fakultas Teknik & Informatika" },
        { value: "teknik_fisika", label: "Teknik Fisika", border: BorderTeknikFisika, faculty: "Fakultas Teknik & Informatika" },
        { value: "teknik_elektro", label: "Teknik Elektro", border: BorderTeknikElektro, faculty: "Fakultas Teknik & Informatika" },
        { value: "manajemen", label: "Manajemen", border: BorderManajemen, faculty: "Fakultas Bisnis & D3 Perhotelan" },
        { value: "akuntansi", label: "Akuntansi", border: BorderAkuntansi, faculty: "Fakultas Bisnis & D3 Perhotelan" },
        { value: "perhotelan", label: "D3 Perhotelan", border: BorderPerhotelan, faculty: "Fakultas Bisnis & D3 Perhotelan" },
        { value: "komunikasi_strategis", label: "Komunikasi Strategis", border: BorderKomunikasiStrategis, faculty: "Fakultas Ilmu Komunikasi" },
        { value: "jurnalistik", label: "Jurnalistik", border: BorderJurnalistik, faculty: "Fakultas Ilmu Komunikasi" },
        { value: "arsitektur", label: "Arsitektur", border: BorderArsitektur, faculty: "Fakultas Seni & Desain" },
        { value: "dkv", label: "DKV", border: BorderDKV, faculty: "Fakultas Seni & Desain" },
        { value: "film", label: "Film", border: BorderFilm, faculty: "Fakultas Seni & Desain" },
    ];

    const CustomFileInput = ({ onChange, selectedFile }) => {
        const fileInputRef = useRef(null);
      
        const handleClick = () => {
          fileInputRef.current.click();
        };
      
        return (
            <div className="custom-file-input">
                <button onClick={handleClick} className="upload-button">
                {selectedFile ? 'Ganti foto' : 'Unggah foto'}
                </button>
                <input
                ref={fileInputRef}
                type="file"
                onChange={onChange}
                style={{ display: 'none' }}
                accept="image/*"
                />
                {selectedFile && (
                <div className="file-preview">
                    <img src={URL.createObjectURL(selectedFile)} alt="Preview" />
                    <span>{selectedFile.name}</span>
                </div>
                )}
            </div>
        );
    };

    const uploadFoto = (e) => {
        const uploadAvatar = e.target.files[0];
        if (uploadAvatar) {
            setSelectedFile(uploadAvatar);
            const url = URL.createObjectURL(uploadAvatar);
            setFile(url);
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
        const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
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
        setIsEditing((prev) => !prev);
    };

    const download = () => {
        const uri = document.querySelector("canvas").toDataURL("image/png");
        const link = document.createElement("a");
        link.href = uri;
        link.download = `${name}_bingkai.png`;
        link.click();
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleNextStep = () => {
        if (step === 1 && name && major && file) {
            setStep(2);
            const selectedMajor = majors.find(m => m.value === major);
            setBorderImageSrc(selectedMajor.border);
        } else if (step === 2) {
            setStep(3);
        }
    };

    const handleCopyText = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const stripHtml = (html) => {
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || "";
      }

    const textToCopy = `
        🪷<br>
        Lotus Biru merajut kisah indah,<br>
        Saya siap untuk awali langkah!
        <br><br>
        Perkenalkan nama saya ${name}, mahasiswa dari program studi ${majors.find(m => m.value === major)?.label} Universitas Multimedia Nusantara 2024. Saya bangga untuk mencetak sejarah baru dengan mengikuti Orientasi Mahasiswa Baru UMN 2024 dan menjadi bagian dari keluarga besar Universitas Multimedia Nusantara.
        <br><br>
        Saya siap untuk tangguhkan ambisi dan menumbuhkan potensi bagi almamater, persada, dan sesama.
        <br><br>
        #OMBUMN2024
        #TangguhBerambisiTumbuhBerpotensi`;

    return (
        <>
        <Header
            top={top}
            bottom={bottom}
            veryBottom={veryBottom}
        />
        <div className="bingkaiResmi_section">
            <div className="progress-bar">
                <div className={`step ${step >= 1 ? 'active' : ''}`}>Data Diri</div>
                <div className={`step ${step >= 2 ? 'active' : ''}`}>Atur Bingkai</div>
                <div className={`step ${step >= 3 ? 'active' : ''}`}>Siap OMB!</div>
            </div>

            {step === 1 && (
                <div className="step-1">
                    <div className="image-kiri">
                        <img src={FotoArtis} alt="Kevin Ken" />
                    </div>
                    <div className="konten-kanan">
                        <h1>Data Diri</h1>
                        <div className="the-form">
                            <div className="the-input">
                                <p>Nama</p>
                                <input
                                    type="text"
                                    placeholder="Masukkan nama"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="the-input">
                                <p>Program Studi</p>
                                <select value={major} onChange={(e) => setMajor(e.target.value)}>
                                    <option value="">Pilih program studi</option>
                                    {majors.map((m) => (
                                    <option key={m.value} value={m.value}>{m.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="the-input">
                                <p>Foto untuk Bingkai</p>
                                <CustomFileInput onChange={uploadFoto} selectedFile={selectedFile} />
                            </div>
                        </div>
                        <br />
                        <div className='cta_button'>
                            <button onClick={handleNextStep} disabled={!name || !major || !file}>Tahap selanjutnya
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="step-2">
                    <h1>Atur Bingkai</h1>
                    <Stage
                        width={500}
                        height={500}
                        onWheel={handleWheel}
                        onTouchMove={handleTouchMove}
                        onTouchStart={handleTouchStart}
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
                            width={500}
                            height={500}
                            listening={false}
                            />
                        )}
                        </Layer>
                    </Stage>
                    <div className='cta_button'>
                        <button onClick={toggleEditMode}>{isEditing ? "Selesai edit" : "Edit foto"}
                        </button>
                    </div>
                    {isEditing && <span className="note-kecil"><p>Pastikan posisi foto sejajar dengan bingkai!</p></span>}
                    <hr />
                    <div className="button-wrapper">
                        <div className='cta_button'>
                            <button className="dinamika-button" onClick={handlePreviousStep}>Kembali
                            </button>
                        </div>
                        <div className='cta_button'>
                            <button onClick={handleNextStep}>Tahap selanjutnya
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {step === 3 && (
                <div className="step-3">
                    <h1>Siap OMB!</h1>
                    <div className="the-literally-content">
                        <Stage width={500} height={500}>
                            <Layer>
                            {foto && (
                                <KonvaImage
                                image={foto}
                                x={transform.x}
                                y={transform.y}
                                scaleX={transform.scale}
                                scaleY={transform.scale}
                                />
                            )}
                            {borderImage && (
                                <KonvaImage
                                image={borderImage}
                                width={500}
                                height={500}
                                />
                            )}
                            </Layer>
                        </Stage>
                        <div className="text-to-copy">
                            <p dangerouslySetInnerHTML={{ __html: textToCopy }} />
                            <br />
                            <div className="button-wrapper-fixed">
                                <div className='cta_button'>
                                    <button onClick={download}>Unduh foto
                                        <img src={Download} alt="download" />
                                    </button>
                                </div>
                                <div className='cta_button'>
                                    <CopyToClipboard text={stripHtml(textToCopy)} onCopy={handleCopyText}>
                                        <button>{copied ? 'Teks tersalin!' : <span>Salin teks</span>}
                                        <img src={Copy} alt="copypaste" />
                                        </button>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="button-wrapper">
                        <div className='cta_button'>
                            <button className="dinamika-button" onClick={handlePreviousStep}>Kembali
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <Footer />
        </>
    );
}

export default BingkaiPage;