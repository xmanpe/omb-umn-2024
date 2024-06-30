import { useCallback } from 'react';
import './InformationModal.scss';

// import icons
import X from '../../../../images/Menu/Close_MD.svg'
import ArrowRight from '../../../../images/Arrow/Arrow_Right_MD.svg';

const InformationModal = ({ onClose }) => {

    const openFormLink= useCallback(() => {
        window.open("https://forms.gle/BZcqVsdynirwQFva6", "_blank");
    }, []);

    return (
        <div className="information-modal-overlay">
            <div className="information-modal">
                <div className='close_button'>
                    <img src={X} alt="Close button"onClick={onClose} />
                </div>
                <div className='information-content_section'>
                    <h1><b>Formulir Keikutsertaan OMB UMN 2024</b></h1>
                    <p>
                        <b>Formulir Keikutsertaan OMB UMN 2024</b> merupakan salah satu syarat untuk mengikuti OMB UMN 2024. Seluruh calon Peserta OMB UMN 2024 <b>wajib</b> mengisi Formulir Keikutsertaan OMB UMN 2024 yang mencakup <b>persetujuan orang tua, data diri, dan riwayat kesehatan</b>. 
                        <br></br> <br></br>
                        <b>Formulir Keikutsertaan OMB UMN 2024</b> telah dibuka pada <b>Minggu, 30 Juni 2024 pukul 08.00 WIB</b> hingga <b>Minggu, 18 Agustus 2024 pukul 23.59 WIB</b>. 
                        <br></br> <br></br>
                        Isi <b>Formulir Keikutsertaan OMB UMN 2024</b> sekarang juga! 
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