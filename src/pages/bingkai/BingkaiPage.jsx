import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import BingkaiResmi from "../../components/bingkai-resmi/Bingkai";

import "./bingkaipage.scss";

function BingkaiPage() {
  const top = "Bingkai Resmi";
  const bottom = "lorem ipsum";

  return (
    <div>
      <Header top={top} bottom={bottom} />
      <div className="container">
        <div className="title-container">
          <h2>Awali pijakanmu melalui Bingkai Resmi OMB UMN 2024!</h2>
          <div className="sub-title-container">
            <p>
              Tunjukan semangat solidaritasmu di OMB UMN 2024, dengan mengunggah
              foto diri menggunakan bingkai resmi sesuai program studi
              masing-masing!
            </p>
          </div>
        </div>
        <BingkaiResmi />
      </div>
      <Footer />
    </div>
  );
}

export default BingkaiPage;
