import React, { useState } from 'react';

import './MarsRevisi.scss';

// import images
import SecondWave from '../../images/waves/Wave Three.png';
import SupergrafisKembang from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - kembang.svg';
import Superputihkiri from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih-kiri.svg';
import Superputihkanan from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih-kanan.svg';

// import components
import ModeFokusOMB from './fokus/modeFokusOMB';
import ModeFokusUMN from './fokus/modeFokusUMN';
import ModeBiasa from './biasa/modeBiasa';

const MarsRevisi = () => {
    const [modeState, setModeState] = useState(0);

    const slidesMode = ["OMB", "UMN"];
    // const slidesMusic = ["OMB", "UMN"];

    return (
        <section className="mars_section">
            {/* <img className='second-wave' src={SecondWave} alt="The Wave" /> */}
            <img src={SupergrafisKembang} alt="" className='supergrafis-kembang' />
            <img src={Superputihkanan} alt="" className='supergrafis-air-kanan' />
            <img src={Superputihkiri} alt="" className='supergrafis-air-kiri' />
            <div className='mars_content'>
                <div className='mars_title'>
                    <h1>Mars</h1>
                    {/* <p>Dalam pemutaran lagu Mars OMB dan Mars UMN, kami menyediakan dua tampilan, yaitu "<b>Standar</b>" yang menampilkan seluruh lirik dan lagu, serta "<b>Fokus</b>" yang memfokuskan lirik per bait lagu.</p> */}
                    <div className='slider-wrapper'>
                        <div className='slider'>
                            {slidesMode.map((slide, index) => (
                                <button
                                    key={index}
                                    className={`slider-button ${modeState === index ? 'active' : ''}`}
                                    onClick={() => setModeState(index)}
                                >
                                    {slide}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                {modeState === 0 ? <ModeFokusOMB /> : <ModeFokusUMN />}
            </div>
            <img className='second-wave-bottom' src={SecondWave} alt="The Wave" />
        </section>
    );
};

export default MarsRevisi;
