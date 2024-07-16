import React, { useState, useEffect } from "react";
import "./SesiInformasi.scss";

// import icons
import ArrowRight from "../../../images/Arrow/Arrow_Right_MD.svg";
import Calendar from "../../../images/Calendar/Calendar.svg";

// import component

const SesiInformasi = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };


  return (
    <>
      <div className="sesi_card">
        <div className="text_section">
          <div className="title_and_desc">
            <h3>Pelaksanaan Sesi Informasi OMB!</h3>
            <p>Sesi informasi OMB UMN 2024 akan dilaksanakan pada <b>Senin, 12 Agustus 2024 pukul 09.00 WIB.</b> Rangkaian ini <b>wajib diikuti</b> oleh seluruh Peserta OMB UMN 2024.</p>
          </div>
          {/* <div className="schedule">
            <div className="date">
              <img src={Calendar} alt="Calendar Icon" />
              <p>Senin, 12 Agustus 2024</p>
            </div>
            <p className="countdown">09.00 WIB</p>
          </div> */}
          {/* <div className="title_and_desc">
            <p>
              Rangkaian ini <b>wajib diikuti</b> oleh seluruh Peserta OMB UMN 2024.
            </p>
          </div> */}
        </div>
        <div className="cta_button">
          <button onClick={toggleModal}>
            Lihat
            <img src={ArrowRight} alt="Arrow Icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SesiInformasi;
