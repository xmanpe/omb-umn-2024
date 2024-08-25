import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';
import Megaphone from '../../../images/icons/Pers_Active.svg'

const AnnCardPers = () => {
    const openPage = () => {
        window.location.href = '/hari-pemupukan';
    };

    return (
        <>
            <div className="ann_card pers-white">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Rilis Pers - Hari Pemupukan</h3>
                        <p>Hari Briefing atau Hari Pemupukan OMB UMN 2024 pada Senin (19/8/2024) telah resmi dilaksanakan...</p>
                    </div>
                </div>
                <div className='cta_button'>
                    <button onClick={openPage}>Selengkapnya
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
                {/* <div className='label'>
                    <p>
                        <img src={Megaphone} alt="megaphone" />
                    </p>
                </div> */}
            </div>
        </>
    );
}

export default AnnCardPers;
