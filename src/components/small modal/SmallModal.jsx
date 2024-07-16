import React, { useState, useEffect } from 'react';
import './SmallModal.scss';

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg';

// import supergraphics
import Supergrafis from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Firefly 2.svg'

// import components
import InformationModal from '../cards/ann card/information modal/InformationModal';

const SmallModal = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

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

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const openPage = () => {
        document.getElementById('divisi_section').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
        {showModal && <InformationModal onClose={toggleModal} />}
            <div className={`small_modal ${isVisible ? 'visible' : ''}`}>
                <div className='left_side_modal'>
                    <img className='supergrafis' src={Supergrafis} alt="Supergrafis" />
                    <p className='left_side'>Yuk, mengisi Formulir Keikutsertaan OMB UMN 2024!</p>
                </div>
                <div className='cta_button'>
                    <button onClick={toggleModal}>Yuk!
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SmallModal;
