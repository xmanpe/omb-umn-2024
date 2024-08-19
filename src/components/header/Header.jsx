import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

//import images
import BungaLotus from '../../images/Outline - Bunga Lotus Biru di Atas Air 1 1.png'

//import icons
import Wave from '../../images/waves/Wave One.png';

const Header = ({ top, bottom, veryBottom, image }) => {
    return (
        <header className="hero-peserta_section">
            <img className='bunga-lotus' src={BungaLotus} alt="Bunga Lotus" />
            <div className='hero-peserta_content'>
                <div className='title_divisi'>
                    <div className='left_thing'>
                        <div className='literally_title'>
                            <p dangerouslySetInnerHTML={{ __html: top }}></p>
                            <h1 dangerouslySetInnerHTML={{ __html: bottom }}></h1>
                            {veryBottom && <p dangerouslySetInnerHTML={{ __html: veryBottom }}></p>}
                        </div>
                    </div>
                </div>
            </div>
            <img className='wave' src={Wave} alt="The Wave" />
            {image && <img className='absolute-image' src={image} alt="Absolute Image" />}
        </header>
    );
}

export default Header;
