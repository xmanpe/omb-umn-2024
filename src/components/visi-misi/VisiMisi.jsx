import React, { useState, useEffect } from 'react';
import './VisiMisi.scss';

// import supergrafis
import BungaFill from '../../images/supergrafis/bunga_atas_air_2_fill.svg'
import BungaTangkaiFill from '../../images/supergrafis/bunga_tangkai_fill.svg'

const VisiMisi = () => {

    return (
        <section className="visi_misi_section" id="visi_misi_section">
            <img src={BungaFill} className="bunga_fill" />
            <img src={BungaTangkaiFill} className="bunga_tangkai_fill" />
            <div className="content">
                <div className="box">
                    <div className="header">
                        <div className="judul">
                            <h2>Visi</h2>
                        </div>
                    </div>
                    <p>Visi dari OMB UMN 2024 adalah menjadi pijakan awal untuk membentuk mahasiswa baru yang mampu mengembangkan potensi dalam diri agar setiap individu dapat bersinergi dan memberikan kontribusi nyata bagi almamater, persada, dan sesama.</p>
                </div>
                <div className="box">
                    <div className="header">
                        <div className="judul">
                            <h2>Misi</h2>
                        </div>
                    </div>
                    <p>Untuk mewujudkan visi yang dimiliki, OMB UMN 2024 memiliki misi sebagai berikut.</p>
                    <br />
                    <p>1. Mengimplementasikan nilai-nilai OMB UMN 2024 dan nilai yang mencerminkan dunia perkuliahan ke dalam berbagai kegiatan untuk disajikan kepada mahasiswa baru.</p>
                    <br />
                    <p>2. Mengajak dan mendorong mahasiswa baru untuk menanamkan ambisi yang tangguh melalui pengalaman dan pengetahuan baru yang akan menumbuhkan potensi dalam diri sehingga memberikan dampak positif bagi diri sendiri, sesama, dan lingkungan.</p>
                </div>
            </div>
        </section>
    );
}

export default VisiMisi;
