import React from 'react';
import './ApaItuOMB.scss';

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'

// import images
import Penetasan from '../../images/background/Penetasan.jpeg'
import PembentukanHari1 from '../../images/background/Pembentukan Hari 1.jpeg'
import PembentukanHari2 from '../../images/background/Pembentukan Hari 2.jpeg'
import KuliahPerdana from '../../images/background/Kuliah Perdana.jpeg'

// import supergraphics
import Flower from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Bunga Lotus Biru 1.svg'
import Supergrafis from '../../images/supergrafis/Divisi_supergrafis.png'

const images = [Penetasan, PembentukanHari1, PembentukanHari2, KuliahPerdana];

const ApaItuOMB = () => {

    const openPage = () => {
        window.location.href = '/tentang-omb';
    }

    return (
        <>
            <section className="apaituomb_section">
                <img className='apaituomb_supergrafis' src={Supergrafis} alt="Supergrafis" />
                <div className='apaituomb_title'>
                    <img src={Flower} alt="" />
                    <h1>Apa itu OMB?</h1>
                </div>
                <div className='images_section'>
                    {images.map((image, index) => (
                        <div className={`eachimage ${index % 2 === 0 ? 'left-rotate' : 'right-rotate'}`} key={index}>
                            <img src={image} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>
                <p>Orientasi Mahasiswa Baru (OMB) merupakan proses seremonial penyambutan mahasiswa baru di <a href="https://www.umn.ac.id/en/home/" target='_blank' style={{color: '#4504AA'}}>Universitas Multimedia Nusantara</a> (UMN). Melalui serangkaian kegiatan, yang bertujuan membantu mahasiswa baru beradaptasi di lingkungan perkuliahan, dengan memberikan informasi dan menanamkan nilai-nilai penting yang menjadi bekal untuk menjalani proses perkuliahan.</p>
                <div className='cta_button'>
                    <button onClick={openPage}>Selengkapnya
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                </div>
            </section>
        </>
    );
}
 
export default ApaItuOMB;