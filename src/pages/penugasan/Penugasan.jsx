import React from 'react';
import  { useState } from 'react';

import './Penugasan.scss';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import listPenugasan from './DaftarPenugasan';

const Penugasan = () => {
    const top = `Aksi Sosial OMB UMN 2024`
    const bottom = `Simak Instruksi Penugasan Aksi Sosial OMB UMN 2024 dengan Baik!`

    const [sliderState,setSliderState] = useState(0);
    const [showMobileDropdown, setShowMobileDropdown] =useState(false);

    const handleDropdownClick = () => {
        setShowMobileDropdown(!showMobileDropdown);
    }

    const handleUserClick = (index) => {
        setShowMobileDropdown(!showMobileDropdown);
        setSliderState(index);
    }

    const slides = ["1-39","40-77","78-116","117-153"];

    return (
        <>
            <Header 
                top={top}
                bottom={bottom}
            />
            <section className='penugasan_section'>
                <div className='slider'>
                    {slides.map((slides,index)=>(
                        <button key={index}
                                className={`slider-button ${sliderState === index ? 'active' : ''}`}
                                onClick={() => setSliderState(index)}>
                            <span className='pelaksanaan-text'>Kelompok </span>
                            {slides}
                        </button>
                    ))}
                </div>
                <div className='list-wrapper'>
                    {listPenugasan["list-penugasan"].map((item, index) => (
                        <div key={index}>
                            {item.kategori===sliderState && 
                            <div className='list'>
                                {item.text.map((textItem, textIndex) => (
                                    <div className='each-list' key={textIndex}>
                                        <p className='number'>{textItem.nomor}</p>
                                        <p className='text' dangerouslySetInnerHTML={{ __html: textItem.isi }}></p>
                                    </div>
                                ))}
                            </div>
                            }
                        </div>
                    ))}
                </div>
                <div className='bottom-list-wrapper'>
                    <div className='each-list'>
                        <p className='number'>2</p>
                        <p className='text'>Kegiatan hemat energi berbentuk video <i>potrait</i> 9:16. Video <b>wajib</b> berisikan hal berikut: 
                        <ol type='a'>
                            <li>Video dibuat secara <b>individu</b> dengan minimal durasi <b>1 menit</b>.</li>
                            <li>Peserta menunjukkan wajah dan berpakaian sopan saat menunjukkan kegiatan hemat energi.</li>
                            <li>Memulai video dengan format perkenalan diri: menyebutkan nama lengkap, nama panggilan, jurusan, dan nomor kelompok.</li>
                            <li>Menunjukkan dan menjelaskan kegiatan hemat energi yang dilakukan.</li>
                            <li>Sertai alasan mengapa harus melakukan kegiatan hemat energi. Peserta <b>wajib</b> menyebutkan kegiatan hemat energi mendukung <b>nilai OMB UMN 2024, SDGs No.13: <i>Climate Action</i></b>.</li>
                            <li>Video diakhiri dengan ajakan melakukan kegiatan hemat energi.</li>
                        </ol>
                        </p>
                    </div>
                    <div className='each-list'>
                        <p className='number'>3</p>
                        <p className='text'>Video disunting dengan ketentuan berikut:
                        <ol type='a'>
                            <li><b>Wajib</b> menggunakan <i>frame</i> Aksi Sosial OMB UMN 2024 yang akan diberikan oleh Sakha atau <i>Person in Charge</i> pada <i>notes</i> grup Line.</li>
                            <li>Penggunaan <i>background music</i> instrumental diperbolehkan. Untuk penggunaan <i>background</i> music vokal tidak diperbolehkan.</li>
                            <li>Penggunaan <i>voice over </i>diperbolehkan. Untuk <i>voice over</i> dengan efek tidak diperbolehkan.</li>
                            <li>Peserta diperbolehkan untuk berkreasi dalam proses penyuntingan selama <b>tidak berkonotasi negatif</b> dan menyinggung <b>SARA</b>. </li>
                        </ol>
                        </p>
                    </div>
                    <div className='each-list'>
                        <p className='number'>4</p>
                        <p className='text'>Video <b>wajib</b> diunggah di media sosial Instagram pada akun utama peserta yang <b>tidak di-<i>private</i></b>, dalam bentuk <b>Instagram <i>Reels</i></b> dengan ketentuan berikut: 
                        <ol type='a'>
                            <li>Tag akun <b>Instagram @ombumn</b> pada unggahan. </li>
                            <li>Menggunakan <i>caption</i> yang diberikan oleh Sakha atau <i>Person in Charge</i> melalui tautan pada <i>notes</i> grup Line.</li>
                            <li>Menggunakan <i>hashtag</i> <span style={{color: '#4504AA'}}>#TangguhBerambisiTumbuhBerpotensi #HematEnergiPeduliIklim #NomorKelompok_NamaKelompok #AksiSosialOMBUMN2024 #UniversitasMultimediaNusantara #KampusHijauHematEnergi #SahabatUMN #UMN</span></li>
                            <li>Peserta diperbolehkan untuk berkreasi dalam proses penyuntingan selama <b>tidak berkonotasi negatif</b> dan menyinggung <b>SARA</b>. </li>
                            <li><i>Tag</i> tiga akun teman peserta pada <i>caption</i>. </li>
                            <li>Video <b>wajib</b> mencapai 300 <i>views</i>. </li>
                            <li>Video mulai diunggah pada Senin, 19 Agustus, pukul 23.00 WIB.</li>
                            <li>Video paling lambat diunggah pada Rabu, 21 Agustus 2024, pukul 23.00 WIB. </li>
                            <li>Video disimpan hingga Sabtu, 31 Agustus 2024, pukul 23.00 WIB. </li>
                            <li>Video <b>wajib</b> muncul dalam <i>feeds</i>, baik <i>Main Grid</i> maupun <i>Reels Grid</i>. </li>
                        </ol>
                        </p>
                    </div>
                    <div className='each-list'>
                        <p className='number'>5</p>
                        <p className='text'>Unggahan video <b>tidak berkonotasi negatif, menyinggung SARA, dan merusak nama baik UMN serta OMB UMN 2024</b> maupun pihak yang bersangkutan. </p>
                    </div>
                    <div className='each-list'>
                        <p className='number'>6</p>
                        <p className='text'><b>Wajib</b> mengumpulkan video aksi sosial berupa unggahan <i>link</i> yang ditulis peserta <i>notes</i> grup Line yang dibuat Sakha atau <i>Person in Charge</i>. </p>
                    </div>
                    <div className='each-list'>
                        <p className='number'>7</p>
                        <p className='text'><b>Wajib</b> mengumpulkan bukti video aksi sosial pada Rabu, 21 Agustus 2024, pukul 23.00 WIB.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
 
export default Penugasan;