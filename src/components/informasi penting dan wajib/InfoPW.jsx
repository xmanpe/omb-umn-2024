import React from "react";
import './InfoPW.scss';

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg';

// import waves
import TopWave from '../../images/waves/InfoPW_TopWave.png';
import BottomWave from '../../images/waves/InfoPW_BottomWave.png';

// import image
import ImgForm from '../../images/InformasiPentingdanWajib/IsiForm.png';

// import supergrafis
import Supergrafis1 from '../../images/supergrafis/Info Penting dan Wajib Supergrafis BG/Supergrafis1_InfoPW.png';
import Supergrafis2 from '../../images/supergrafis/Info Penting dan Wajib Supergrafis BG/Supergrafis2_InfoPW.png'

const InfoPW = () => {

    const openPage = () => {
        window.open("https://forms.gle/BZcqVsdynirwQFva6", "_blank");
    }
    return (
        <section className="infopw_section">
            <img className="supergrafis_infopw1" src={Supergrafis1} alt="" />
            <img className="supergrafis_infopw2" src={Supergrafis2} alt="" />
            <div className="container">
                <img className="wave" src={TopWave} alt="Wave" />
                <div className="content">
                    <h1>Informasi Penting dan Wajib</h1>
                    <div className="div_content">
                        <div className="box_content">
                            <div className="left_box">
                                <img src={ImgForm} alt="Form" />
                            </div>
                            
                            <div className="right_box">
                                <div className="text_box">
                                    <div className="title"><h2>Formulir Ikutsertaan OMB UMN 2024</h2></div>
                                    <div className="paragraph">
                                        <p>Formulir Keikutsertaan OMB UMN 2024 merupakan salah satu syarat wajib untuk mengikuti OMB UMN 2024 yang mencakup persetujuan orang tua, data diri, dan riwayat kesehatan.</p>
                                        <p>Formulir Keikutsertaan OMB UMN 2024 telah dibuka pada Minggu, 30 Juni 2024 pukul 08.00 WIB hingga Minggu, 18 Agustus 2024 pukul 23.59 WIB.</p>
                                        <p>Isi Formulir Keikutsertaan OMB UMN 2024 sekarang juga!</p>
                                    </div>
                                </div>

                                <div className="cta_button">
                                    <button onClick={openPage}>Daftar
                                        <img src={ArrowRight} alt="Arrow" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="wave" src={BottomWave} alt="Wave" />
            </div>

        </section>
    );
}

export default InfoPW;