import './InformationModal.scss';

// import icons
import X from '../../../../images/Menu/Close_MD.svg'
import ArrowRight from '../../../../images/Arrow/Arrow_Right_MD.svg';

const InformationModal = ({ onClose }) => {
    return (
        <div className="information-modal-overlay">
            <div className="information-modal">
                <div className='close_button'>
                    <img src={X} alt="Close button"onClick={onClose} />
                </div>
                <div className='information-content_section'>
                    <h1>Ketentuan Pendaftaran Peserta</h1>
                    <ol>
                        <li>Calon peserta merupakan mahasiswa aktif Universitas Multimedia Nusantara angkatan 2023, 2022, 2021, dan seterusnya yang <b>belum pernah mengikuti</b> atau <b>belum lulus</b> dalam kegiatan OMB UMN. </li>
                        <li>Calon peserta dipersilakan untuk mengisi formulir yang tersedia di laman resmi OMB UMN 2024 yang bisa diakses melalui tombol di bawah ini.</li>
                        <li>Calon peserta diwajibkan mengikuti akun Instagram OMB UMN <a href="https://www.instagram.com/ombumn/" target='_blank'>(@ombumn)</a> untuk mengetahui informasi terkait pendaftaran Peserta OMB UMN 2024.</li>
                        <li>Calon peserta yang sudah berhasil terdaftar akan resmi menjadi peserta dan wajib untuk mengikuti segala peraturan dan ketentuan yang berlaku di OMB UMN 2024. </li>
                    </ol> 
                </div>
                <div className='cta_button'>
                    <button onClick={onClose}>Daftar 
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default InformationModal;