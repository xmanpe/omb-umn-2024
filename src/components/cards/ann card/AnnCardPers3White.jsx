import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';
import Megaphone from '../../../images/icons/Pers_Active.svg'

const AnnCardPers = () => {
    const openPage = () => {
        window.location.href = '/perkembangan-hari-dua';
    };

    return (
        <>
            <div className="ann_card pers-white">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Rilis Pers - Perkembangan Hari 2</h3>
                        <p>Universitas Multimedia Nusantara (UMN) resmi menyambut peserta Orientasi Mahasiswa...</p>
                    </div>
                </div>
                <div className='cta_button'>
                    <button onClick={openPage}>Selengkapnya
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnnCardPers;
