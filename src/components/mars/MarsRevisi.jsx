import React, { useState } from 'react';

import './MarsRevisi.scss';

// import images
import SecondWave from '../../images/waves/Wave Three.png';

// import components
import ModeFokusOMB from './fokus/modeFokusOMB';
import ModeFokusUMN from './fokus/modeFokusUMN';
import ModeBiasa from './biasa/modeBiasa';

const MarsRevisi = () => {
    const [modeState, setModeState] = useState(0);
    const [musicState, setMusicState] = useState(0);

    const slidesMode = ["Sahaja", "Dhyāna"];
    const slidesMusic = ["OMB", "UMN"];

    return (
        <section className="mars_section">
            <img className='second-wave' src={SecondWave} alt="The Wave" />
            <div className='mars_content'>
                <div className='mars_title'>
                    <h1>Mars</h1>
                    <p>Sahaja (keseluruhan) dan Dhyāna (terfokus) menawarkan cara yang berbeda dalam memutar lagu Mars OMB dan Mars UMN sesuai kebutuhan.</p>
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
                        {modeState === 1 && (
                            <div className='slider'>
                                {slidesMusic.map((slide, index) => (
                                    <button
                                        key={index}
                                        className={`slider-button ${musicState === index ? 'active' : ''}`}
                                        onClick={() => setMusicState(index)}
                                    >
                                        {slide}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                {modeState === 0 ? (
                        <ModeBiasa />
                    ) : (
                        musicState === 0 ? <ModeFokusOMB /> : <ModeFokusUMN />
                    )}
            </div>
            <img className='second-wave-bottom' src={SecondWave} alt="The Wave" />
        </section>
    );
};

export default MarsRevisi;
