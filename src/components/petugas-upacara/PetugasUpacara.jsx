import { useState, useCallback } from 'react';

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

// import icons
import ArrowRight from '../../images/Arrow/Arrow_Right_MD.svg'

// import supergraphics
import BottomAir from '../../images/supergrafis/Bottom Air.svg'
import Ombak from '../../images/supergrafis/Ombak.png'

// import components
import Modal from '../modal/Modal';

const PetugasUpacara = () => {
  const [showModal, setShowModal] = useState(false);
  
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const posisiPetugas = [
    {   photo: PemimpinUpacara,
        position:"Pemimpin Upacara",
    },
    {   photo: ProtokolUpacara,
        position:"Protokol Upacara",
    },
    {   photo: PemimpinBarisan,
        position:"Pemimpin Barisan",
    },
    {   photo: PembawaNaskah,
        position:"Pembawa Naskah Pancasila",
    },
    {   photo: PembawaPemukul,
        position:"Pembawa Pemukul Gong",
    },
    {   photo: UndangUndang,
        position:"Undang-Undang Dasar 1945 dan Pembaca Doa",
    },
    {   photo: PengibarBendera,
        position:"Pengibar Bendera Merah Putih",
    },
    
  ]
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
                        mengikuti rangkaian kegiatan OMB UMN sebagai peserta serta tidak tergabung dalam kepanitiaan OMB UMN 2024  
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
          <div className='modal_posisi'>
            <h1>Posisi Petugas Upacara</h1>
            <div className='posisi_wrapper'>
              {posisiPetugas.map((posisiPetugas)=>{
                return(
                <div className='posisi_card'>
                  <div className='each_photo'>
                    <img src={posisiPetugas.photo} alt="Posisi"/>
                  </div>
                  <p>{posisiPetugas.position}</p>
                </div>
                );
              })}
            </div>
          </div>
          <div className='button_section'>
          <img className='air_kiri' src={Ombak} alt="Air" />
            <div className='cta_button'>
                  <button 
                    onClick={toggleModal}
                  >
                    Selanjutnya
                      <img src={ArrowRight} alt="Arrow Icon" />
                  </button>
            </div>
            <img className='air_kanan' src={Ombak} alt="Air" />
          </div>
        </Modal>
      }
    </>
  );
}
 
export default PetugasUpacara;