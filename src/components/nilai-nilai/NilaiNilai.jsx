import React, { useState } from "react";
import ModalNilai from "../modal-nilai/ModalNilai";
import "./NilaiNilai.scss";

// import supergraphics
import Flower from '../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Bunga Lotus Biru 2.svg'
import Supergrafis from '../../images/supergrafis/SUPERGRAFIS_NILAI_OMB.png'
import Wave from '../../images/waves/Wave One 3.png'
import WaveTwo from '../../images/waves/Wave Two.png'

const NilaiNilai = () => {
  const [modalInfo, setModalInfo] = useState({ show: false, title: "", subtitle: "", content: "" });

  const openModal = (title, subtitle, content) => {
    setModalInfo({ show: true, title, subtitle, content });
  };

  const closeModal = () => {
    setModalInfo({ show: false, title: "", subtitle: "", content: "" });
  };

  return (
    <>
      <section className="nilai-nilai_section">
        <img className='nilai_omb_supergrafis' src={Supergrafis} alt="Supergrafis" />
        <div className="title">
          <div className="nilai-nilai_title">
            <img src={Flower} alt="" />
            <h1>Nilai-Nilai <br /> OMB UMN 2024</h1>
          </div>
        </div>
        <div className="nilai-nilai_content">
          <div className="content-1">
            <div className="left card">
              <h2 className="nilai_title">SDGs No. 4</h2>
              <p className="sub_nilai">Quality Education</p>
              <p>
                OMB UMN 2024 ingin mengenalkan Universitas Multimedia Nusantara sebagai institusi pendidikan berkualitas 
                yang mendorong pengembangan pribadi berkelanjutan dan memberikan kontribusi positif terhadap masyarakat. 
              </p>
              <div className="show-more-button">
                <button onClick={() => openModal(
                  "SDGs No. 4",
                  "Quality Education",
                  <>
                    OMB UMN 2024 ingin mengenalkan Universitas Multimedia Nusantara sebagai institusi pendidikan berkualitas 
                    yang mendorong pengembangan pribadi berkelanjutan dan memberikan kontribusi positif terhadap masyarakat. 
                    Selain itu, OMB UMN 2024 juga berperan sebagai jembatan edukasi yang ingin mengajak Peserta OMB UMN 2024 
                    untuk beranjak dari seorang siswa menjadi mahasiswa. <b>Melalui nilai ini, OMB UMN 2024 diharapkan dapat 
                    memberikan motivasi kepada para Peserta OMB UMN 2024 untuk mengeksplorasi potensi serta meraih prestasi 
                    melalui pencapaian pendidikan yang berkualitas dan inklusif.</b> Target 4.7 pada tahun 2030 ingin memastikan 
                    bahwa semua peserta didik memperoleh pengetahuan dan keterampilan yang dibutuhkan. Melalui nilai ini, 
                    OMB UMN 2024 juga ingin menunjukkan pentingnya hak setiap individu untuk mendapatkan edukasi yang setara 
                    tanpa adanya diskriminasi.
                  </>
                )}>
                  Selengkapnya
                </button>
              </div>
            </div>
            <div className="right card">
              <h2 className="nilai_title">SDGs No. 13</h2>
              <p className="sub_nilai">Climate Action</p>
              <p>
                Nilai SDGs No. 13 <i>Climate Action</i> ini merupakan salah satu fokus masalah yang akan ditekuni oleh Peserta OMB UMN 2024. 
                Berangkat dari permasalahan lingkungan, Peserta OMB UMN 2024 dapat memulai keaktifannya mulai dari dalam diri dengan 
                menunjukkan sikap kepedulian terhadap lingkungan.
              </p>
              <div className="show-more-button">
                <button onClick={() => openModal(
                  "SDGs No. 13",
                  "Climate Action",
                  <>
                    Nilai SDGs No. 13 <i>Climate Action</i> ini merupakan salah satu fokus masalah yang akan ditekuni oleh Peserta OMB UMN 2024. 
                    <b>Berangkat dari permasalahan lingkungan, Peserta OMB UMN 2024 dapat memulai keaktifannya mulai dari dalam diri dengan 
                    menunjukkan sikap kepedulian terhadap lingkungan.</b> Melalui dinamika dalam rangkaian kegiatan OMB UMN 2024, peserta akan 
                    menjalankan aksi nyata dalam menunjukkan keaktifan dan kepeduliannya terhadap lingkungan.  
                  </>
                )}>
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className="content-2">
            <div className="left card">
              <h2 className="nilai_title">5C UMN</h2>
              <p className="sub_nilai">Caring, Credible, Competent, Competitive, & Customer Delight</p>
              <p>
                Bertransisi menjadi bagian dari keluarga besar UMN, OMB UMN 2024 juga akan menanamkan nilai-nilai keutamaan 5C UMN 
                untuk mewujudkan karakter mahasiswa yang sesuai dengan visi UMN. 
              </p>
              <div className="show-more-button">
                <button onClick={() => openModal(
                  "5C UMN",
                  "Caring, Credible, Competent, Competitive, & Customer Delight",
                  <>
                    Bertransisi menjadi bagian dari keluarga besar UMN, OMB UMN 2024 juga akan menanamkan nilai-nilai keutamaan 5C UMN 
                    untuk mewujudkan karakter mahasiswa yang sesuai dengan visi UMN. Melalui penanaman nilai ini, mahasiswa diharapkan 
                    dapat menerapkan nilai <i>Caring, Credible, Competent, Competitive,</i> dan <i>Customer Delight</i> dalam kehidupan sehari-harinya, 
                    bahkan dalam menjalankan perannya sebagai masyarakat Indonesia. 
                  </>
                )}>
                  Selengkapnya
                </button>
              </div>
            </div>
            <div className="right card">
              <h2 className="nilai_title">Kepercayaan Diri</h2>
              <p>
                Dalam menunjukkan potensi dari diri Peserta OMB UMN 2024, nilai kepercayaan diri menjadi hal yang krusial bagi mereka. 
                <b> Nilai ini merupakan fondasi awal yang mendorong peserta untuk lebih percaya diri lagi dalam mengekspresikan diri</b>.
              </p>
              <div className="show-more-button">
                <button onClick={() => openModal(
                  "Kepercayaan Diri",
                  "",
                  <>
                    Dalam menunjukkan potensi dari diri Peserta OMB UMN 2024, nilai kepercayaan diri menjadi hal yang krusial bagi mereka. <b> Nilai ini merupakan fondasi awal yang mendorong peserta untuk lebih percaya diri lagi dalam mengekspresikan diri.</b> Harapannya, Peserta OMB UMN 2024 memiliki kepercayaan diri untuk bertindak, berinovasi, dan berkarya ke depannya. 
                  </>
                )}>
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
          <div className="content-3">
            <div className="center card">
              <h2 className="nilai_title">Kebijaksanaan</h2>
              <p>
                Setelah membangun kepercayaan diri, <b>Peserta OMB UMN 2024 juga didorong untuk lebih bijak dalam menempatkan diri di berbagai situasi</b>. Kompetensi ini diharapkan dapat mengarahkan peserta untuk berpikiran dengan kritis dan bijaksana dalam mengelola segala informasi dan persoalan. 
              </p>
              <div className="show-more-button">
                <button onClick={() => openModal(
                  "Kebijaksanaan",
                  "",
                  <>
                    Setelah membangun kepercayaan diri, <b>Peserta OMB UMN 2024 juga didorong untuk lebih bijak dalam menempatkan diri di berbagai situasi.</b> 
                    Kompetensi ini diharapkan dapat mengarahkan peserta untuk berpikiran dengan kritis dan bijaksana dalam mengelola segala informasi dan persoalan. 
                    Pikiran kritis yang didampingi oleh kebijaksanaan diharapkan dapat mendorong peserta untuk menunjukkan potensi unik yang ada di dalam diri. 
                  </>
                )}>
                  Selengkapnya
                </button>
              </div>
            </div>
          </div>
        </div>
        <img className='wave_bawah_nilai' src={Wave} alt="Wave" />
      </section>
      <ModalNilai 
        show={modalInfo.show} 
        onClose={closeModal} 
        title={modalInfo.title} 
        subtitle={modalInfo.subtitle} 
        content={modalInfo.content} 
      />
    </>
  );
};

export default NilaiNilai;
