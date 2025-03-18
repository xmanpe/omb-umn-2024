import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AnnCard.scss';

// import icons
import ArrowRight from '../../../images/Arrow/Arrow_Right_MD.svg';

const AnnCard2White = () => {
    const navigate = useNavigate();

    const openPage = () => {
        navigate('/', { replace: true });
        setTimeout(() => {
            const element = document.getElementById('swara-bestari');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="ann_card highlight">
            <div className='text_section'>
                <div className='title_and_desc'>
                    <h3>Swara Bestari: EPILOG</h3>
                    <p>Yuk, pelajari cara untuk mendapatkan inspirasi dalam mengembangkan potensi diri!</p>
                </div>
            </div>
            <div className='cta_button'>
                <button onClick={openPage}>Dengar
                    <img src={ArrowRight} alt="Arrow Icon" />
                </button>
            </div>
        </div>
    );
}

export default AnnCard2White;