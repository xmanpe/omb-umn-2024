import { useCallback, useState, useEffect } from "react";

import "./Meliora.scss";

// import icons
import ArrowRight from "../../images/Arrow/Arrow_Right_MD_Brown.svg";
// import LocationIcon from "../../images/Location/LocationIcon.svg";
import Calendar from "../../images/Calendar/Calendar.svg";
// import TimeIcon from "../../images/Time/TimeIcon.svg";

import Location from "../../images/icons/icon_location.svg";
import Clock from "../../images/icons/icon_time.svg";

// import images
import Stacks from "../../images/Stacks.png";
import Wave from "../../images/waves/Wave Two.png";
import SecondWave from "../../images/waves/Wave Three.png";
import Kupu from "../../images/ananta/kupu.png";
import Lotus from "../../images/meliora/meliora.svg";

const Meliora = () => {
  return (
    <section className="meliora_section">
      <img className="wave_meliora_top" src={SecondWave} alt="Wave" />
      <div className="meliora_content">
        <img className="kupu_top" src={Lotus} alt="Kupu ananta" />
        <div className="the_content">
          <div className="left vibrate-effect-infinite">
            <img src={Stacks} alt="Stack images" />
          </div>
          <div className="right">
            <div className="the_title">
              <h1>Meliora</h1>
              <p>
                Meliora merupakan pameran dokumentasi OMB UMN 2024 berisi
                kumpulan momen dari awal hingga akhir perjalanan OMB UMN 2024
                yang menuntun Pejuang Lotus Biru untuk bisa berkembang dan mekar
                pada waktunya.{" "}
              </p>
              <p>
                Kenangan yang terukir abadi ini didokumentasikan dan
                dipersembahkan oleh divisi Baskara (Dokumentasi) dan Nayanika (
                <i>Website</i>) OMB UMN 2024.{" "}
              </p>
              <div className="schedule">
                <div className="location">
                  <img src={Location} alt="Location Icon" />
                  <p><i>Connector</i> Gedung C dan D UMN</p>
                </div>
                <div className="date">
                  <img src={Calendar} alt="Calendar Icon" />
                  <p>Senin, 26 Agustus 2024 - Rabu, 28 Agustus 2024</p>
                </div>
                <div className="time">
                  <img src={Clock} alt="Time Icon" />
                  <p>08.00 - 17.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="wave_meliora_bottom" src={SecondWave} alt="Wave" />
    </section>
  );
};

export default Meliora;
