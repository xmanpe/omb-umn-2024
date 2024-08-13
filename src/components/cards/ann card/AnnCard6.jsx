import React, { useState, useEffect } from 'react';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';
import Calendar from '../../../images/Calendar/Calendar.svg';

const AnnCard = () => {
    const openPage = () => {
        window.location.href = '/aksi-sosial';
    };

    return (
        <>
            <div className="ann_card highlight">
                <div className='text_section'>
                    <div className='title_and_desc'>
                        <h3>Penugasan Aksi Sosial OMB UMN 2024</h3>
                        <p>Peserta <b>wajib</b> menyelesaikan Penugasan Aksi Sosial untuk mengikuti rangkaian OMB UMN 2024!</p>
                    </div>
                </div>
                <div className='cta_button'>
                    <button onClick={openPage}>Lihat
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
                {/* <div className='label'>
                    <p>Penting!</p>
                </div> */}
            </div>
        </>
    );
}

export default AnnCard;
