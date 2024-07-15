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
                    <h1>SESI INFORMASI OMB UMN 2024</h1>
                    <p>
                        Sesi Informasi OMB merupakan bagian dari <b>rangkaian kegiatan</b> OMB UMN 2024. Tujuannya adalah untuk memberikan informasi, mencegah terjadinya kekeliruan informasi, dan memberikan kesempatan tanya jawab terkait hal yang dibutuhkan peserta selama rangkaian kegiatan OMB UMN 2024. 
                        <br></br> <br></br>
                        Kegiatan Sesi Informasi OMB ditujukan untuk menjadi <b>wadah</b> sekaligus <b>sumber informasi</b> bagi setiap peserta dalam <b>mempersiapkan segala keperluan </b> sebelum mengikuti rangkaian kegiatan OMB UMN 2024.  
                        <br></br> <br></br>
                        Sesi informasi OMB UMN 2024 akan dilaksanakan pada <b>Senin, 12 Agustus 2024  pukul 09.00 WIB</b>.
                        <br></br> <br></br>
                        Rangkaian ini <b>wajib diikuti</b> oleh seluruh Peserta OMB UMN 2024.  
                    </p>
                </div>
                {/* <div className='cta_button'>
                    <button onClick={openFormLink}>Daftar 
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div> */}
            </div>
        </div>
    );
}
 
export default InformationModal;