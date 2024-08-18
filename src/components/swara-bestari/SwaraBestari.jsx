import React, { useState, useEffect } from 'react';
import './SwaraBestari.scss';

// import modal
import Modal from '../cards/ann card/information modal/InformationModalSB';

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'
import ArrowRightBoomerang from '../../images/icons/Navigation/right-arrow-boomerang.svg'

// import images
import Stacks from '../../images/Stacks.png'
import Wave from '../../images/waves/Wave Two.png'
import SecondWave from '../../images/waves/Wave Three.png'
import Kupu from '../../images/ananta/kupu.png'
import SwaraBestariLogo from '../../images/swara bestari/Swara Bestari Logo.png'
import Grain from '../../images/Grain Texture.png'

const SwaraBestari = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
        {showModal && <Modal onClose={toggleModal} />}
        <section id='swara-bestari' className="swara-bestari_section">
            <img className='grain' src={Grain} alt="grain" />
            <img className='wave_swara-bestari_top' src={SecondWave}alt="Wave" />
            <div className='swara-bestari_content'>
                <div className='the_content'>
                    <div className='left'>
                        <img src={SwaraBestariLogo} alt="official logo" />
                    </div>
                    <div className='right'>
                        <div className='the_title'>
                            {/* <h1>PROLOG : Bangun Support System dalam Diri melalui Lingkungan Positif</h1> */}
                            <iframe className='mini-player' src="https://open.spotify.com/embed/episode/73lUN5vsl9ue9nwOSCUpt9?utm_source=generator" width="100%" height="100%" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <p>Dalam EPILOG, Sobat PENA diajak untuk mengeksplorasi berbagai kegiatan yang sesuai dengan minat, sehingga bakat dapat diasah dan dikembangkan. Jangan lewatkan kesempatan untuk mendapatkan inspirasi dalam mengembangkan potensi diri!</p>
                        </div>
                        <div className='cta_button'>
                        <button onClick={toggleModal}>Tentang Swara Bestari
                            <img src={ArrowRight} alt="Arrow Icon" />
                        </button>
                        </div>
                    </div>
                </div>
                {/* <div className='meliora-card'>
                    <p>Tentunya OMB UMN 2024 akan membawakan konsep baru untuk pameran <i>online</i> dan <i>offline</i> nya. Ditunggu, ya!</p>
                </div> */}
            </div>
            <img className='wave_swara-bestari_bottom' src={SecondWave} alt="Wave" />
        </section>
        </>
    );
}
 
export default SwaraBestari;