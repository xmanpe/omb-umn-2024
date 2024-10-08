import React, { useState, useEffect, useRef } from 'react';
import './FilosofiLogo.scss';

import LogoFull from '../../images/FilosofiLogo/logo_full.png'
import LogoTulisan from '../../images/FilosofiLogo/logo_tulisan.png'
import LogoBunga from '../../images/FilosofiLogo/logo_bunga.png'
import LogoWarna from '../../images/FilosofiLogo/logo_warna_biru.png'
import LogoFakultas from '../../images/FilosofiLogo/logo_fakultas.png'
import DoubleArrow from '../../images/icons/Double Arrow.svg'
import BungaFill from '../../images/supergrafis/bunga_atas_air_1_fill.svg'
import Kunang from '../../images/supergrafis/kunang_kiri_fill.svg'

const FilosofiLogo = () => {
    const textFilosofi = [
        {
            "judul": "",
            "text": "<h3>Klik salah satu bagian logo OMB UMN 2024!</h3>",
        },
        {
            "judul": "4 Warna Fakultas",
            "text": "<p>Warna pada benang sari melambangkan keempat fakultas di Universitas Multimedia Nusantara, yaitu:</p><ul><li><span class='color_ilkom'>Fakultas Ilmu Komunikasi</></span>: Komunikasi Strategis, Jurnalistik</li><li><span class='color_bisnis'>Fakultas Bisnis</></span>: Akuntansi, Manajemen, dan D3 Perhotelan</li><li><span class='color_seni'>Fakultas Seni dan Desain</></span>: Desain Komunikasi Visual, Film dan Animasi, Arsitektur</li><li><span class='color_teknik'>Fakultas Teknik dan Informatika</></span>: Teknik Komputer, Teknik Elektro, Teknik Fisika, Informatika, Sistem Informasi</li></ul>"
        },
        {
            "judul": "Bunga Lotus Biru",
            "text": "<p>Logo OMB UMN 2024 mengusung Lotus Biru.</p></br><p>Lotus Biru merupakan simbol keindahan, kebijaksanaan, kepercayaan diri, dan pengetahuan yang menggambarkan pengelolaan potensi diri serta memiliki makna yang selaras dengan nilai-nilai dan tujuan dari OMB UMN 2024. Logo Lotus Biru sendiri menggambarkan orientasi mahasiswa yang bersifat internasional, menjadi wadah pengembangan potensi dengan bijak dan berdampak positif bagi sesama. Proses mekarnya melambangkan seseorang akan terus belajar (<i>long life learner</i>) sesuai dengan visi UMN.</p>",
        },
        {
            "judul": "Warna UMN",
            "text": "<p>Warna biru yang digunakan sebagai warna bunga Lotus Biru mulai dari kelopak bunga, daun, dan bunga itu sendiri disimbolisasikan sebagai UMN. Hal tersebut memiliki arti bahwa UMN telah menjadi <b>tempat utama untuk menopang mahasiswanya sehingga bisa menghasilkan lulusan yang berkualitas dan terpelajar melalui proses belajar yang terakreditasi.</b></p>",
        },
        {
            "judul": "OMB UMN 2024",
            "text": '<p>Logo OMB UMN 2024 menggunakan elemen dari habitat Lotus Biru dengan bentuk huruf yang menyambung, sesuai dengan konsep "<b>Tidak Ada Tentang Kita, Tanpa Kita.</b>" Bentuk ini melambangkan kerja sama dan kolaborasi untuk menciptakan sejarah baru.</p><p>Huruf "<b>M</b>" yang terhubung ke "<b>O</b>" dan "<b>B</b>" melambangkan “mahasiswa” yang berakar kuat dan berambisi. Huruf-huruf ini saling berkesinambungan dan menggambarkan air sebagai habitat Lotus Biru. Filosofinya, prinsip dasar yang kuat memungkinkan perkembangan signifikan seperti mekarnya Lotus Biru, yang memperkuat identitas OMB UMN 2024.</p>'
        }
    ];

    const allImage = [
        LogoFull,
        LogoFakultas,
        LogoBunga,
        LogoWarna,
        LogoTulisan
    ]

    const [loopNumber, setLoopNumber] = useState(0);
    const [loopImage, setLoopImage] = useState(null);
    const [currentText, setCurrentText] = useState(0);
    const [currentLogo, setCurrentLogo] = useState(null);
    const boxLogoRef = useRef(null);

    const changeLogo = (logo, number) => {
        setCurrentLogo(logo);
        setCurrentText(number);
    };

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (boxLogoRef.current) {
    //             const rect = boxLogoRef.current.getBoundingClientRect();
    //             if (rect.top >= 0) {
    //                 boxLogoRef.current.classList.add('sticky-shadow');
    //             } else {
    //                 boxLogoRef.current.classList.remove('sticky-shadow');
    //             }
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    return (
        <section className="filosofi_logo_section" id="filosofi_logo_section">
            <img src={BungaFill} className="bunga_fill" />
            <img src={Kunang} className="kunang" />
            <h2 className="judul">Penjelasan Logo</h2>
            <div className="content">
                <div className="box_logo" ref={boxLogoRef}>
                    { currentLogo ? <img src={currentLogo} /> : <img src={allImage[loopNumber]} />}
                    <div className="hitbox_fakultas" onClick={() => changeLogo(LogoFakultas, 1)}></div>
                    <div className="hitbox_bunga" onClick={() => changeLogo(LogoBunga, 2)}></div>
                    <div className="hitbox_warna" onClick={() => changeLogo(LogoWarna, 3)}></div>
                    <div className="hitbox_tulisan" onClick={() => changeLogo(LogoTulisan, 4)}></div>
                </div>
                <img className='the-arrow' src={DoubleArrow} alt="arrow" />
                <div className="box_text">
                    { textFilosofi[currentText].judul && <h2>{textFilosofi[currentText].judul}</h2> }
                    <div className="text" dangerouslySetInnerHTML={{__html: textFilosofi[currentText].text}}></div>
                </div>
            </div>
        </section>
    );
}

export default FilosofiLogo;
