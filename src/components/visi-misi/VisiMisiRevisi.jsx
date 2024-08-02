import React from 'react';

import './VisiMisiRevisi.scss'

//import images
import VisiImage from '../../images/visi.png'
import MisiImage from '../../images/misi.png'
import Wave from '../../images/waves/wave-second.png'

const VisiMisiRevisi = () => {
    return (
        <>
            <img className='separator-wave' src={Wave} alt="" />
            <section className="visimisi_section">
                <div className='visimisi_content'>
                    <div className='visimisi visimisi-kiri'>
                        <img src={VisiImage} alt="" />
                        <div className='visimisi-desc'>
                            <h1>Visi</h1>
                            <p>Visi dari OMB UMN 2024 adalah menjadi pijakan awal untuk membentuk mahasiswa baru yang mampu mengembangkan potensi dalam diri agar setiap individu dapat bersinergi dan memberikan kontribusi nyata bagi almamater, persada, dan sesama.</p>
                        </div>
                    </div>
                    <div className='visimisi visimisi-kanan'>
                        <img src={MisiImage} alt="" />
                        <div className='visimisi-desc'>
                            <h1>Misi</h1>
                            <p>Untuk mewujudkan visi yang dimiliki, OMB UMN 2024 memiliki misi sebagai berikut.
                            <br /><br />
                            1. Mengimplementasikan nilai-nilai OMB UMN 2024 dan nilai yang mencerminkan dunia perkuliahan ke dalam berbagai kegiatan untuk disajikan kepada mahasiswa baru.
                            <br /><br />
                            2. Mengajak dan mendorong mahasiswa baru untuk menanamkan ambisi yang tangguh melalui pengalaman dan pengetahuan baru yang akan menumbuhkan potensi dalam diri sehingga memberikan dampak positif bagi diri sendiri, sesama, dan lingkungan.</p>
                        </div>
                    </div>
                </div>
        </section> 
        </>
    );
}
 
export default VisiMisiRevisi;