import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

//import images
import BungaLotus from '../../images/Outline - Bunga Lotus Biru di Atas Air 1 1.png'

//import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.png';
import Wave from '../../images/waves/Wave One.png';
import Home from '../../images/icons/Home_Active.svg';
import WaveWater from '../../images/Transisi Air.png';

const Header = ({ top, bottom, veryBottom }) => {
    return (
        <header className="hero-peserta_section">
            <img className='bunga-lotus' src={BungaLotus} alt="Bunga Lotus" />
            <div className='hero-peserta_content'>
                {/* <Link to={{ pathname: '/' }} style={{textDecoration: "none"}}>
                    <div className='back_button'>
                        <img src={ArrowRight} alt="Left Arrow" />
                        <p>Beranda</p>
                    </div>
                </Link> */}
                <div className='title_divisi'>
                    <div className='left_thing'>
                        <div className='literally_title'>
                            <p dangerouslySetInnerHTML={{ __html: top }}></p>
                            <h1 dangerouslySetInnerHTML={{ __html: bottom }}></h1>
                            <p className='description-text' dangerouslySetInnerHTML={{ __html: veryBottom }}></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className='wave-water' src={WaveWater} alt="wave water" /> */}
            <img className='wave' src={Wave} alt="The Wave" />
        </header>
    );
}

export default Header;
