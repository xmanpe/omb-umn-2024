import React, { useState, useEffect } from 'react';
import './FilosofiLogo.scss';

// import logo
import LogoFull from '../../images/FilosofiLogo/logo_full.png'
import LogoTulisan from '../../images/FilosofiLogo/logo_tulisan.png'
import LogoBunga from '../../images/FilosofiLogo/logo_bunga.png'
import LogoWarna from '../../images/FilosofiLogo/logo_warna_biru.png'
import LogoFakultas from '../../images/FilosofiLogo/logo_fakultas.png'

// import supergrafis
import BungaFill from '../../images/supergrafis/bunga_atas_air_1_fill.svg'
import Kunang from '../../images/supergrafis/kunang_kiri_fill.svg'

const FilosofiLogo = () => {
    const textFilosofi = [
        {
            "judul": "",
            "text": "<h3><b>Klik salah satu bagian</b></h3><h3><b>Logo OMB UMN 2024</b></h3>",
        },
        {
            "judul": "4 Warna Fakultas",
            "text": "<p>Warna pada benang sari melambangkan keempat fakultas di Universitas Multimedia Nusantara, yaitu:</p><ul><li><span class='color_ilkom'><b>Fakultas Ilmu Komunikasi</b></span>: Komunikasi Strategis, Jurnalistik</li><li><span class='color_bisnis'><b>Fakultas Bisnis</b></span>: Akuntansi, Manajemen, 3D Perhotelan</li><li><span class='color_seni'><b>Fakultas Seni dan Desain</b></span>: Desain Komunikasi Visual, Film dan Animasi, Arsitektur</li><li><span class='color_teknik'><b>Fakultas Teknik dan Informatika</b></span>: Teknik Komputer, Teknik Elektro, Teknik Fisika, Informatika, Sistem Informasi</li></ul>"
        },
        {
            "judul": "Bunga Lotus Biru",
            "text": "<p>Logo OMB UMN 2024 mengusung Lotus Biru.</p><p>Lotus Biru merupakan simbol keindahan, kebijaksanaan, kepercayaan diri, dan pengetahuan yang menggambarkan pengelolaan potensi diri serta memiliki makna yang selaras dengan nilai-nilai dan tujuan dari OMB UMN 2024. Logo Lotus Biru sendiri menggambarkan orientasi mahasiswa yang bersifat internasional, menjadi wadah pengembangan potensi dengan bijak dan berdampak positif bagi sesama. Proses mekarnya melambangkan seseorang akan terus belajar (long life learner) sesuai dengan visi UMN.</p>",
        },
        {
            "judul": "Warna UMN",
            "text": "<p>Warna biru pada kelopak bunga Lotus Biru dan daun yang sesuai dengan warna Universitas Multimedia Nusantara (UMN) sebagai wadah bagi para mahasiswa baru melalui pembelajarannya yang terakreditasi untuk menghasilkan lulusan yang berkualitas dan terpelajar.</p>",
        },
        {
            "judul": "OMB UMN 2024",
            "text": "<p><b>Huruf “M”</b> mempresentasikan “mahasiswa” terhubung ke <b>huruf “O” dan “B”</b> menunjukkan akar yang kuat serta ambisi untuk terus tumbuh dan mengembangkan potensi melalui OMB.</p><p><b>Bentuk yang menyambung</b> sesuai dengan konsep OMB UMN 2024, yaitu “Tidak Ada Tentang Kita, Tanpa Kita” dan melambangkan kerja sama dan kolaborasi untuk menciptakan sejarah baru bersama.</p>"
        }
    ];

    const allImage = [
        LogoFull,
        LogoFakultas,
        LogoBunga,
        LogoWarna,
        LogoTulisan
    ]
    // full
    // fakultas
    // bunga
    // warna
    // tulisan

    const [loopNumber, setLoopNumber] = useState(0);
    const [loopImage, setLoopImage] = useState(null);

    const [currentText, setCurrentText] = useState(0);
    const [currentLogo, setCurrentLogo] = useState(null);

    const changeLogo = (logo, number) => {
        setCurrentLogo(logo);
        setCurrentText(number)
    }

    useEffect(() => {
        const intervalLogo = setInterval(() => {
            setLoopNumber(loopNumber + 1);
            if(loopNumber == 4) {
                setLoopNumber(0);
            }
        }, 3000);
    
        return () => {
            clearInterval(intervalLogo);
        };
    }, [loopNumber]);

    return (
        <section className="filosofi_logo_section" id="filosofi_logo_section">
            <img src={BungaFill} className="bunga_fill" />
            <img src={Kunang} className="kunang" />

            <h2 className="judul">Logo OMB UMN 2024</h2>
            <div className="content">
                <div className="box_logo">
                    { currentLogo ? <img src={currentLogo} /> : <img src={allImage[loopNumber]} />}
                    <div className="hitbox_fakultas" onClick={() => changeLogo(LogoFakultas, 1)}></div>
                    <div className="hitbox_bunga" onClick={() => changeLogo(LogoBunga, 2)}></div>
                    <div className="hitbox_warna" onClick={() => changeLogo(LogoWarna, 3)}></div>
                    <div className="hitbox_tulisan" onClick={() => changeLogo(LogoTulisan, 4)}></div>
                </div>
                <div className="box_text">
                    <h2>{textFilosofi[currentText].judul}</h2>
                    <div className="text" dangerouslySetInnerHTML={{__html: textFilosofi[currentText].text}}></div>
                </div>
            </div>
        </section>
    );
}

export default FilosofiLogo;
