import { useCallback } from 'react';
import './InformationModal.scss';

// import icons
import X from '../../../../images/Menu/Close_MD.svg'
import ArrowRight from '../../../../images/Arrow/Arrow_Right_MD.svg';

const InformationModalSB = ({ onClose }) => {

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
                    <h1>Tentang Swara Bestari</h1>
                    <p>Swara Bestari merupakan program siniar (<i>podcast</i>) resmi OMB UMN 2024. Siniar ini akan membahas topik-topik yang harapannya dapat membantu peserta saling menanamkan integritas bersamaan dengan membangkitkan solidaritas selama masa perkuliahan. <br /><br />Kata "Swara" diambil dari bahasa Jawa yang memiliki arti suara dan "Bestari" diambil dari Kamus Besar Bahasa Indonesia (KBBI) yang memiliki arti luas dan dalam pengetahuannya, pendidikan baik, dan budi pekerti.</p>
                </div>
            </div>
        </div>
    );
}
 
export default InformationModalSB;