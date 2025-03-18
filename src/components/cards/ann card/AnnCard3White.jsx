import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';

const AnnCard3White = () => {
    const openPage = () => {
        window.location.href = '/rembaka-anindita';
    };

    // const openPage = () => {
    //     document.getElementById('swara-bestari').scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <>
            <div className="ann_card highlight">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Rembaka Anindita</h3>
                        <p>Temukan informasi tentang Universitas Multimedia Nusantara sambil berdinamika seru bersama Rembaka Anindita!</p>
                    </div>
                </div>
                <div className='cta_button'>
                    <button onClick={openPage}>Lihat
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnnCard3White;
