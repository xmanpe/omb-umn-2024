import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';
import Megaphone from '../../../images/icons/Pers_Active.svg'

const AnnCardPers = () => {
    const openPage = () => {
        window.location.href = '/perkembangan-hari-satu';
    };

    return (
        <>
            <div className="ann_card pers">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Rilis Pers - Perkembangan Hari 1</h3>
                        <p>Orientasi Mahasiswa Baru Universitas Multimedia Nusantara (OMB UMN) 2024 secara resmi dimulai...</p>
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
