import React, { useState, useEffect } from 'react';
import './SmallModal.scss';

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg';

// import supergraphics
import Supergrafis from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Firefly 2.svg'

const SmallModal = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.querySelector('.hero_section');
            if (!heroSection) return; // Check if hero section exists
        
            const heroSectionRect = heroSection.getBoundingClientRect();
            const isHeroVisible = heroSectionRect.bottom > 500 && heroSectionRect.top < window.innerHeight;
        
            if (!isHeroVisible) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScrollToDivisi = () => {
        const divisiSection = document.getElementById('divisi_section');
        if (divisiSection) {
            divisiSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`small_modal ${isVisible ? 'visible' : ''}`}>
            <div className='left_side_modal'>
                <img className='supergrafis' src={Supergrafis} alt="Supergrafis" />
                <p className='left_side'>Klik divisi untuk melihat jadwal wawancaranya!</p>
            </div>
            <div className='cta_button'>
                <button onClick={handleScrollToDivisi}>Cek Jadwal
                    <img src={ArrowRight} alt="Arrow Icon" />
                </button>
            </div>
        </div>
    );
};

export default SmallModal;
