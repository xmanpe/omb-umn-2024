import React from 'react';
import { Link } from 'react-router-dom';
import './HeroWawancara.scss';

// import images
import Wave from '../../images/waves/Wave One.png';
import Background from '../../images/background/Cover.jpeg';
import BungaLotus from '../../images/Outline - Bunga Lotus Biru di Atas Air 1 1.png'

import BalwanaBg from '../../images/background/BALWANA.jpeg'
import BaskaraBg from '../../images/background/BASKARA.jpeg'
import CaksanaBg from '../../images/background/CAKSANA.jpeg'
import GajendraBg from '../../images/background/GAJENDRA.jpeg'
import LavanyaBg from '../../images/background/LAVANYA.jpeg'
import NayanikaBg from '../../images/background/Wiskira.jpeg'
import SakhaBg from '../../images/background/SAKHA.jpeg'
import SarkaraBg from '../../images/background/SARKARA.jpeg'
import BimasenaBg from '../../images/background/BIMASENA.jpeg'

import Acara  from '../../images/Logo Divisi OMB 2024/Balwana Large.png'
import Desain from '../../images/Logo Divisi OMB 2024/Lavanya Large.png';
import Dokum from '../../images/Logo Divisi OMB 2024/Baskara Large.png';
import Keamanan from '../../images/Logo Divisi OMB 2024/Bimasena Large.png';
import Konsum from '../../images/Logo Divisi OMB 2024/Sarkara Large.png';
import Perkap from '../../images/Logo Divisi OMB 2024/Gajendra Large.png';
import Pic from '../../images/Logo Divisi OMB 2024/Sakha Large.png';
import Pr from '../../images/Logo Divisi OMB 2024/Caksana Large.png';
import Web from '../../images/Logo Divisi OMB 2024/Nayanika Large.png';

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.png';
import Warning from '../../images/Warning/Circle_Warning_White.svg';

const divisionBackgrounds = {
    BALWANA: BalwanaBg,
    SARKARA: SarkaraBg,
    LAVANYA: LavanyaBg,
    NAYANIKA: NayanikaBg,
    CAKSANA: CaksanaBg,
    SAKHA: SakhaBg,
    BASKARA: BaskaraBg,
    GAJENDRA: GajendraBg,
    BIMASENA: BimasenaBg,
};

const divisionColors = {
    BALWANA: [178, 34, 34],
    SARKARA: [221, 184, 146],
    LAVANYA: [93, 216, 213],
    NAYANIKA: [253, 221, 72],
    CAKSANA: [178, 176, 176],
    SAKHA: [239, 158, 187],
    BASKARA: [246, 138, 38],
    GAJENDRA: [56, 21, 77],
    BIMASENA: [0, 0, 0]
};

const HeroWawancara = () => {
    let theLogo
    const selectedDivisi = JSON.parse(localStorage.getItem('selectedDivisi'));
    const divisionName = selectedDivisi?.name || "Error";
    const [color1, color2, color3] = divisionColors[divisionName] || [0, 0, 0];
    const backgroundImg = divisionBackgrounds[divisionName] || Background;

    if (selectedDivisi?.name === "BALWANA") theLogo = Acara;
    if (selectedDivisi?.name === "LAVANYA") theLogo = Desain;
    if (selectedDivisi?.name === "BASKARA") theLogo = Dokum;
    if (selectedDivisi?.name === "BIMASENA") theLogo = Keamanan;
    if (selectedDivisi?.name === "SARKARA") theLogo = Konsum;
    if (selectedDivisi?.name === "GAJENDRA") theLogo = Perkap;
    if (selectedDivisi?.name === "SAKHA") theLogo = Pic;
    if (selectedDivisi?.name === "CAKSANA") theLogo = Pr;
    if (selectedDivisi?.name === "NAYANIKA") theLogo = Web;

    const divisionNotes = {
        // BALWANA: {
        //     text: "<ul><li>Calon anggota Balwana diharapkan hadir 15 menit lebih awal, yaitu pukul 17:15 WIB.</li><li>Jangan lupa untuk membawa alat tulis dan buku catatan saat PENUGASAN.</li><li>Wawancara menggunakan sistem FIFO (<i>First In First Out</i>); untuk itu, jangan lupa untuk tulis nama pada kertas yang sudah disediakan di pintu ruangan.</li</ul>"
        // },
        BALWANA: {
            text: "<ul><li>Calon anggota Balwana diharapkan hadir 15 menit lebih awal, yaitu pukul 17:15 WIB.</li><li>Jangan lupa juga untuk membawa alat tulis dan buku catatan.</li></ul>"
        },
        SAKHA: {
            text: "Jadwal wawancara untuk calon panitia divisi Sakha telah ditentukan. Mohon perhatikan dengan saksama nama lengkap dan waktu wawancara!"
        },
        BASKARA: {
            text: "<ul><li>Calon panitia diharapkan hadir 20 menit lebih awal, yaitu pukul 17:40 WIB.</li><li>Wawancara menggunakan sistem FIFO (<i>First In First Out</i>); untuk itu, jangan lupa untuk tulis nama pada kertas yang sudah disediakan di pintu ruangan.</li></ul>"
        },
        NAYANIKA: {
            text: "<ul><li>Terdapat perubahan jadwal wawancara. Mohon diperhatikan dengan saksama waktunya.</li><li>Calon panitia diharapkan hadir 20 menit lebih awal, yaitu pukul 17:40 WIB.</li><li>Wawancara menggunakan sistem FIFO (<i>First In First Out</i>); untuk itu, jangan lupa untuk tulis nama pada kertas yang sudah disediakan di pintu ruangan.</li></ul>"
        },
        SARKARA: {
            text: "<ul><li>Calon panitia diharapkan hadir 20 menit lebih awal, yaitu pukul 18:10 WIB.</li><li>Wawancara menggunakan sistem FIFO (<i>First In First Out</i>); untuk itu, jangan lupa untuk tulis nama pada kertas yang sudah disediakan di pintu ruangan.</li></ul>"
        },
        CAKSANA: {
            text: "<ul><li>Terdapat perubahan jadwal wawancara. Mohon diperhatikan dengan saksama waktunya.</li><li>Calon panitia diharapkan hadir 20 menit lebih awal, yaitu pukul 18:10 WIB.</li><li>Wawancara menggunakan sistem FIFO (<i>First In First Out</i>); untuk itu, jangan lupa untuk tulis nama pada kertas yang sudah disediakan di pintu ruangan.</li></ul>"
        },
    };
    
    const defaultText = "<ul><li>Silakan bergabung ke dalam grup LINE divisi yang dikirimkan melalui <i>email</i> kalian.</li><li>Sebelum bergabung, pastikan <i>display name</i> kalian merupakan nama asli dan menggunakan <i>profile picture</i> dengan foto diri yang terkini dan wajah terlihat dengan jelas. </li></ul>";

    return (
        <section className="hero-wawancara_section"
            style={{
                background: `linear-gradient(97deg, rgba(84, 0, 184, 0.90) 0%, rgba(${color1}, ${color2}, ${color3}, 0.90) 100%), url('${backgroundImg}') lightgray 50% / cover no-repeat`
            }}>
            <img className='bunga-lotus' src={BungaLotus} alt="" />
            <div className='hero-wawancara_content'>
                <Link to={{ pathname: '/' }} style={{textDecoration: "none"}}>
                    <div className='back_button' onClick={() => window.history.back()}>
                        <img src={ArrowRight} alt="Left Arrow" />
                        <p>Kembali</p>
                    </div>
                </Link>
                <div className='title_divisi'>
                    <div className='left_thing'>
                        <img src={theLogo} alt="" />
                        <div className='literally_title'>
                            <p>{divisionName === "BALWANA" ? "Hasil Seleksi" : "Hasil Seleksi"}</p>
                            <h1>Divisi {divisionName}</h1>
                        </div>
                    </div>
                    <div className='right_thing'>
                        {/* <img src={Warning} alt="" /> */}
                        {/* <p dangerouslySetInnerHTML={{ __html: divisionNotes[divisionName]?.text || defaultText }}></p> */}
                        <p dangerouslySetInnerHTML={{ __html: defaultText }}></p>
                    </div>
                </div>
            </div>
            <img className='wave' src={Wave} alt="The Wave" />
        </section>
    );
}

export default HeroWawancara;
