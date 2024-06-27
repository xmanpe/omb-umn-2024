import React from "react";
import "./tagline.scss";

import TaglineOMB from "../../images/Tagline OMB 2024.png";
import Wave13 from "../../images/waves/Wave One 3.png";
import Wave14 from "../../images/waves/Wave One 4.png";
import KembangBanyak from "../../images/supergrafis/tagline supergrafis/Supergrafis Putih - kembangbanyak.svg";

function Tagline() {
  return (
    <div className="tagline-container">
      <img src={Wave14} alt="wave" className="wave-atas"></img>
      <img
        src={KembangBanyak}
        alt="Kembang"
        className="supergrafis-kembang-banyak"
      ></img>
      <div className="tagline-omb">
        <div className="box-tagline">
          <div className="tagline">
            <img src={TaglineOMB} alt="Tagline omb"></img>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div className="content-tangguh-berambisi">
          <div className="content-title">
            <h2>“Tangguh Berambisi”</h2>
          </div>
          <div className="content-text">
            <p>
              OMB UMN 2024 merupakan pijakan pertama bagi para peserta untuk
              memulai dunia perkuliahannya yang membuat sebuah cerita. Dengan
              adanya tekad yang besar dan keinginan yang kuat, peserta semakin
              percaya diri dengan kemampuan yang dimiliki. Maka dari itu, hal
              pertama yang ingin ditanamkan dalam rangkaian OMB UMN 2024 adalah
              penanaman ambisi yang tangguh.
            </p>
          </div>
        </div>
        <div className="content-tumbuh-berpotensi">
          <div className="content-title">
            <h2>“Tumbuh Berpotensi”</h2>
          </div>
          <div className="content-text">
            <p>
              Setelah memiliki ambisi yang tangguh, diperlukan kebijakkan dalam
              memproses ambisi tersebut. Perlunya pengetahuan baru, pengalaman,
              hingga bertumbuhlah potensi yang terpendam di dalam diri. Pada OMB
              UMN 2024 ada pendukung-pendukung lainnya agar potensi semakin
              berkembang.
            </p>
          </div>
        </div>
      </div>
      <img src={Wave13} alt="wave" className="wave-bawah"></img>
    </div>
  );
}

export default Tagline;
