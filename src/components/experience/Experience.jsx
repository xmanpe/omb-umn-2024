import React, { useState, useEffect } from 'react';
import './Experience.scss';

// import icons
import Device from '../../images/icons/System/Devices.svg';

const Experience = () => {
    const [showModal, setShowModal] = useState(true);

    // useEffect(() => {
    //     // Disable scrolling when the modal is open
    //     if (showModal) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'auto';
    //     }
    // }, [showModal]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {showModal && (
                <div className="experience_modal">
                    <div className="experience_content">
                        <img src={Device} alt="Device Icon" />
                        <p>
                            Guna mendapatkan pengalaman yang terbaik, kami menyarankan penggunaan perangkat PC/Laptop untuk mengakses laman ini.
                        </p>
                        <div className="cta_button">
                            <button onClick={handleCloseModal}>Mengerti</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Experience;
