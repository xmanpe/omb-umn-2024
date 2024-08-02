import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';

const AnnCard = () => {
    const openPage = () => {
        window.open('/pdf/modul-kekerasan-seksual.pdf', '_blank');
    };

    return (
        <>
            <div className="ann_card">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Modul Kekerasan Seksual</h3>
                        <p>Yuk, turut serta dalam mencegah Kampus Bebas Kekerasan Seksual dengan mengakses Modul #KampusBebasKS melalui tombol di bawah ini!</p>
                    </div>
                </div>
                <div className='cta_button'>
                    <button onClick={openPage}>Akses di sini
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default AnnCard;
