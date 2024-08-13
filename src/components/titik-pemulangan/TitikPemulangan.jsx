import React, { useState, useEffect } from "react";
import "./TitikPemulangan.scss";

// import images
import GateA from "../../images/titik-pemulangan/gate_a.png";
import GateB from "../../images/titik-pemulangan/gate_b.png";
import GateC from "../../images/titik-pemulangan/gate_c.png";
import ArrowDropdown from '../../images/Arrow/ArrowDropdown.svg';

//import components
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const TitikPemulangan = () => {
    const top = `Mobilitas Peserta`;
    const bottom = `Selamat datang di laman mobilitas peserta!`;

    const data = [
        {
            "desc": "Depan <i>Lobby</i> Utama Universitas Multimedia Nusantara",
            "kiri": GateA,
            "kanan": <iframe src="https://www.google.com/maps/embed?pb=!4v1722866108088!6m8!1m7!1sJUUdqo-Jp8RBQ1x5kvc6cw!2m2!1d-6.256146197084946!2d106.618540918073!3f195.4311436636625!4f7.591993859012021!5f0.7820865974627469" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            "note": "Informasi Tambahan: <i>Shuttle</i> bus berada di depan gerbang Universitas Multimedia Nusantara"
        },
        {
            "desc": "Samping Universitas Multimedia Nusantara (Sebrang Halte SDC)",
            "kiri": GateB,
            "kanan": <iframe src="https://www.google.com/maps/embed?pb=!4v1722866578357!6m8!1m7!1sMLbPUAjp_huq6Zp2aUke6g!2m2!1d-6.25761620339708!2d106.6170252608093!3f141.47483490088743!4f-5.319592550325538!5f0.7820865974627469" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            "note": ""
        },
        {
            "desc": "Belakang Universitas Multimedia Nusantara (Seberang Pradita <i>University</i>) ",
            "kiri": GateC,
            "kanan": <iframe src="https://www.google.com/maps/embed?pb=!4v1722866756964!6m8!1m7!1szNZEZmyFvxjpwR6GuPJ2iw!2m2!1d-6.259665610133069!2d106.6185660112301!3f20.97148893857417!4f-5.0300419540307075!5f0.7820865974627469" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>,
            "note": ""
        }
    ]

    const [selected, setSelected] = useState(0);
    const slides = ["Gerbang A","Gerbang B","Gerbang C"];
    const [showMobileDropdown, setShowMobileDropdown] = useState(false);

    const handleDropdownClick = () => {
        setShowMobileDropdown(!showMobileDropdown);
    }
    const handleUserClick = (index) => {
        setShowMobileDropdown(!showMobileDropdown);
        setSelected(index);
    }

    return (
        <>
            <section className="titik_pemulangan_section">
                <div className="tikum_title">
                    <h1>Titik Pemulangan</h1>
                    <div className='slider'>
                        {slides.map((slides,index)=>(
                            <button key={index}
                                    className={`slider-button ${selected === index ? 'active' : ''}`}
                                    onClick={() => setSelected(index)}>
                                {slides}
                            </button>
                        ))}
                    </div>
                    <div className='slider-wrapper-mobile'>
                        <div className='slider-mobile'>
                            {slides.map((slides,index)=>(
                                selected === index && 
                                <button key={index} className='slider-button-mobile-active' onClick={handleDropdownClick}>
                                    {slides}
                                    <img className={`arrow ${!showMobileDropdown ? 'up':'down'}`} src={ArrowDropdown} alt='drop'/>
                                </button>
                            ))}
                            {showMobileDropdown && 
                                <div className='dropdown-wrapper'>
                                    {slides.map((slides,index)=>(
                                        selected !== index &&
                                            <button key={index}
                                                    className={`slider-button-mobile`}
                                                    onClick={() => handleUserClick(index)}>
                                                {slides}
                                            </button>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="tikum_title">
                    <p dangerouslySetInnerHTML={{ __html: data[selected].desc }}></p>
                </div>
                <div className="tikum_content">
                    <div className="map-tikum">
                        <img src={data[selected].kiri} alt="Titik Kumpul" />
                    </div>
                    <div className="image-tikum">
                        {data[selected].kanan}
                    </div>
                </div>
                <div className="tikum_desc">
                    <p dangerouslySetInnerHTML={{ __html: data[selected].note }}></p>
                </div>
            </section>
        </>
    )
}

export default TitikPemulangan;