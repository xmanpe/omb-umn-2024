import React from 'react';

import './InfoPWRevisi.scss'

// import icons
import PurpleCheck from '../../images/icons/purple_check.svg'
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'

// import images
import Wave from '../../images/waves/Wave Two.png'
import SecondWave from '../../images/waves/Wave Three.png'
import StackForm from '../../images/stack-form.png'


const InfoPWRevisi = () => {
    const openPage = () => {
        window.open("https://forms.gle/BZcqVsdynirwQFva6", "_blank");
    }

    return (
        <section className="infopw_section" id='infopw_section'>
            <img className='wave_two' src={Wave} alt="Wave" />
            <div className='infopw_content'>
                <div className='kiri'>
                    <img className='stack-form' src={StackForm} alt="" />
                </div>
                <div className='kanan'>
                    <div className='the_title'>
                        <div className='the_label'>
                            <img src={PurpleCheck} alt="" />
                            <h3>Informasi Penting & Wajib</h3>
                        </div>
                        <h1>Formulir Keikutsertaan OMB UMN 2024</h1>
                    </div>
                    <p>
                        Formulir Keikutsertaan OMB UMN 2024 merupakan salah satu syarat wajib untuk mengikuti OMB UMN 2024 yang mencakup persetujuan orang tua, data diri, dan riwayat kesehatan. <br /><br />Formulir Keikutsertaan OMB UMN 2024 telah dibuka pada Minggu, 30 Juni 2024 pukul 08.00 WIB hingga Minggu, 18 Agustus 2024 pukul 12.00 WIB.
                    </p>
                    <div className='cta_button'>
                        <button onClick={openPage}>Isi formulir
                            <img src={ArrowRight} alt="Arrow Icon" />
                        </button>
                    </div>
                </div>
            </div>
            <img className='wave_three' src={SecondWave} alt="Wave" />
        </section>
    );
}
 
export default InfoPWRevisi;