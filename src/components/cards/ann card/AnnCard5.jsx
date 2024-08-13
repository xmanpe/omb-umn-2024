import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';

const AnnCard = () => {
    const openPage = () => {
        window.location.href = '/bingkai-resmi';
    };

    return (
        <>
            <div className="ann_card">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Bingkai Resmi</h3>
                        <p>Tunjukan semangat solidaritasmu di OMB UMN 2024, dengan mengunggah foto diri menggunakan bingkai resmi sesuai program studi masing-masing!</p>
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

export default AnnCard;
