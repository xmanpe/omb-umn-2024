import { useState, useEffect, useCallback } from 'react';

import './PetugasUpacara.scss';

// import images
import Wave from '../../images/waves/Wave Two.png'
import SecondWave from '../../images/waves/Wave Three.png'
import Stacks from '../../images/stack-upacara.png'
import Kupu from '../../images/ananta/kupu.png'
import PemimpinUpacara from '../../images/posisiPetugas/pemimpinUpacara.jpg'
import ProtokolUpacara from '../../images/posisiPetugas/protokolUpacara.jpg'
import PemimpinBarisan from '../../images/posisiPetugas/pemimpinBarisan.jpg'
import PembawaNaskah from '../../images/posisiPetugas/pembawaNaskahPancasila.jpg'
import PembawaPemukul from '../../images/posisiPetugas/pembawaPemukulGong.jpg'
import UndangUndang from '../../images/posisiPetugas/undangUndang.jpg'
import PengibarBendera from '../../images/posisiPetugas/pengibarBendera.jpg'
import LogoOMB2024 from '../../images/Logo OMB 2024 - Biru.png'

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'

// import supergraphics
import BottomAir from '../../images/supergrafis/Bottom Air.svg'
import Ombak from '../../images/supergrafis/Ombak.png'
import Lebah from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/lebah.svg';
import Air1 from '../../images/supergrafis/Fill - Air-kanan.svg';
import Air2 from '../../images/supergrafis/Fill - Air-kiri.svg';

// import components
import Modal from '../modal/Modal';
import BoxText from '../box-text/BoxText';

const PetugasUpacara = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const [showModal, setShowModal] = useState(false);
  const [pageSyarat, setPageSyarat] = useState(false);

  const dataSyarat = [
    {no: "1", konten: "Mengisi form registrasi."},
    {no: "2", konten: "Mahasiswa aktif Universitas Multimedia Nusantara angkatan 2021-2023."},
    {no: "3", konten: "Minimal IPK 3.0."},
    {no: "4", konten: "Tinggi minimal wanita 160 cm dan laki-laki 165 cm."},
    {no: "5", konten: "Postur tubuh tegak dan kaki tidak membentuk O atau X."},
    {no: "6", konten: "Telah melakukan vaksin ketiga/booster."},
    {no: "7", konten: "Memahami Peraturan Baris Berbaris (PBB) dasar."},
    {no: "8", konten: "Mendapatkan perizinan orang tua untuk menjadi petugas upacara OMB UMN 2024."},
    {no: "9", konten: "Telah dinyatakan lulus dari rangkaian OMB UMN."},
    {no: "10", konten: "Bersedia mengikuti jadwal pelatihan yang sudah disepakati dengan panitia OMB UMN 2024."},
    {no: "11", konten: "Sehat jasmani dan rohani. "}
  ];

  const toggleModal = () => {
    setShowModal(!showModal);
    setPageSyarat(false);
  };

  const handleNextPage = () => {
    setPageSyarat(true);
  };

  const posisiPetugas = [
    { photo: PemimpinUpacara, position:"Pemimpin Upacara" },
    { photo: ProtokolUpacara, position:"Protokol Upacara" },
    { photo: PemimpinBarisan, position:"Pemimpin Barisan" },
    { photo: PembawaNaskah, position:"Pembawa Naskah Pancasila" },
    { photo: PembawaPemukul, position:"Pembawa Pemukul Gong" },
    { photo: UndangUndang, position:"Undang-Undang Dasar 1945 dan Pembaca Doa" },
    { photo: PengibarBendera, position:"Pengibar Bendera Merah Putih" },
  ]

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openYouTubeLink = useCallback(() => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfE3ZyJSBneUQZKo3gZX2RTC6Oy5wLm3Ss3AhDzZ9sDhwbZAg/viewform?usp=sf_link", "_blank");
}, []);

  return (
    <>
      <section className="petugas_upacara_section" id='petugas_upacara_section'>
          {/* <img className='wave_two' src={Wave} alt="Wave" /> */}
          <div className='petugas_upacara_content'>
              <div className='the_title'>
                  <h1>Lotus Biru menggetarkan hati insani,<br />Jangan lewatkan kesempatan ini! </h1>
              </div>
              <div className='the_content'>
                <div className='left'>
                  <div className='the_title'>
                    {/* <h1>Kilas Balik Ananta</h1> */}
                      <p><b>Siapkah kamu menjadi bagian dalam mencetak sejarah baru?</b>  
                        <br /> <br />
                        Pendaftaran terbuka bagi mahasiswa/i aktif seluruh program studi dari angkatan 2021, 2022, dan 2023 yang telah lulus 
                        mengikuti rangkaian kegiatan OMB UMN sebagai peserta serta tidak tergabung dalam kepanitiaan OMB UMN 2024. 
                        <br /> <br />
                        Pendaftaran petugas upacara OMB UMN 2024 akan dibuka mulai 
                        <b> Senin, 10 Juni 2024 pukul 10.00 WIB hingga Sabtu, 15 Juni 2024 pukul 23.59 WIB.</b>
                      </p>
                  </div>
                </div>
                <div className='right'>
                  <img src={Stacks} alt="Stack images" />
                </div>
              </div>
              <div className='cta_button'>
                  <button 
                    onClick={toggleModal}
                  >
                    Daftarkan Dirimu
                      <img src={ArrowRight} alt="Arrow Icon" />
                  </button>
              </div>
          </div>
          <img className='wave_three' src={SecondWave} alt="Wave" />
          <img className='bottom_air' src={BottomAir} alt="Supergrafis" />
      </section>
      {showModal && 
        <Modal handleClose={toggleModal}>
          {!pageSyarat ?
            <>
              <div className='modal_posisi'>
                <h1>Posisi Petugas Upacara</h1>
                <div className='posisi_wrapper'>
                  {posisiPetugas.map((posisiPetugas, index) => (
                    <div className='posisi_card' key={index}>
                      <div className='each_photo'>
                        <img src={posisiPetugas.photo} alt="Posisi"/>
                      </div>
                      <p>{posisiPetugas.position}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='button_section'>
                <div className='cta_button'>
                    <button 
                      onClick={handleNextPage}
                    >
                      Selanjutnya
                        <img src={ArrowRight} alt="Arrow Icon" />
                    </button>
                  </div>
              </div>
            </>
          :
            <>
              {screenSize.width > 1200 ?
              <div className="modal-syarat">
                {/* <div className="background-modal-syarat">
                </div> */}
                {/* <img className='lebah-judul' src={Lebah} alt="Supergrafis - lebah" /> */}
                <h2>Syarat Pendaftaran Petugas Upacara OMB UMN 2024</h2>
                <div className="konten-lingkaran">
                  <img className='logo_omb' src={LogoOMB2024} alt="Logo OMB 2024" />
                  {dataSyarat.map((x, index) => (
                    <div className="card" key={index}>
                      {x.no > 6 ?
                        <div className={`card card-${x.no}`}>
                          <div className="number-box">
                            <p>{x.no}</p>
                          </div>
                          <BoxText text={x.konten} />
                        </div>
                        : x.no < 6 ? 
                        <div className={`card card-${x.no}`}>
                          <BoxText text={x.konten} />
                          <div className="number-box">
                            <p>{x.no}</p>
                          </div>
                        </div>
                        : 
                        <div className={`card-${x.no}`}>
                          <div className="number-box">
                            <p>{x.no}</p>
                          </div>
                          <BoxText text={x.konten} />
                        </div>
                      }
                    </div>
                  ))}
                </div>
                <div className='cta_button'>
                  <img className='air-button-1' src={Air2} alt="Supergrafis - air" />
                  <button className='modal-button' onClick={openYouTubeLink}>
                    Daftarkan Dirimu
                  </button>
                  <img className='air-button-2' src={Air1} alt="Supergrafis - air" />
                </div>
              </div>
              :
              <div className="modal-syarat-mobile">
                <h2>Syarat Pendaftaran Petugas Upacara OMB UMN 2024</h2>
                <img className='logo_omb' src={LogoOMB2024} alt="Logo OMB 2024" />
                {dataSyarat.map((x, index) => (
                  <div className="card-mobile" key={index}>
                    <div className="number-box">
                      <p>{x.no}</p>
                    </div>
                    <BoxText text={x.konten} />
                  </div>
                ))}
                <button className="button-mobile" onClick={openYouTubeLink}>
                  <p>Daftarkan Dirimu</p>
                </button>
              </div>
              }
            </>
          }
        </Modal>
      }
    </>
  );
}

export default PetugasUpacara;
