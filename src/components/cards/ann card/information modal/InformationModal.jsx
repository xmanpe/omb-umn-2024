import { useCallback, useState, useEffect } from 'react';
import './InformationModal.scss';

// import icons
import X from '../../../../images/Menu/Close_MD.svg'
import ArrowRight from '../../../../images/Arrow/Arrow_Right_MD.svg';

const InformationModal = ({ onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    const openFormLink = useCallback(() => {
        window.open("https://forms.gle/BZcqVsdynirwQFva6", "_blank");
    }, []);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 500);
    };

    useEffect(() => {
        return () => {
            setIsClosing(false);
        };
    }, []);

    return (
        <div className={`information-modal-overlay ${isClosing ? 'fadeOut' : ''}`}>
            <div className={`information-modal ${isClosing ? 'fadeOutFromTop' : ''}`}>
                <div className='close_button'>
                    <img src={X} alt="Close button" onClick={handleClose} />
                </div>
                <div className='information-content_section'>
                    <h1>Formulir Keikutsertaan OMB UMN 2024</h1>
                    <p>
                        Formulir Keikutsertaan OMB UMN 2024 merupakan salah satu syarat <b>wajib</b> untuk mengikuti OMB UMN 2024 yang mencakup <b>persetujuan orang tua, data diri, dan riwayat kesehatan</b>. 
                        <br></br> <br></br>
                        Formulir Keikutsertaan OMB UMN 2024 telah dibuka pada <b>Minggu, 30 Juni 2024 pukul 08.00 WIB</b> hingga <b>Minggu, 18 Agustus 2024 pukul 12.00 WIB</b>. 
                        <br></br> <br></br>
                        Isi Formulir Keikutsertaan OMB UMN 2024 sekarang juga! 
                    </p>
                </div>
                <div className='cta_button'>
                    <button onClick={openFormLink}>Daftar 
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InformationModal;