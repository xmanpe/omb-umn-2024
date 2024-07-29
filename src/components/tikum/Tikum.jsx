import React from "react";
import "./Tikum.scss";
import Location from "../../images/icons/icon_location.svg";
import Clock from "../../images/icons/icon_time.svg";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Image1 from "../../images/tikum/1.jpeg";
import FotoTikum from '../../images/foto tikum.jpg'


const Tikum = () => {
  
  return (
    <section className="tikum_section">
      <div className="tikum_title">
        <h1>Titik Kumpul</h1>
        <p>
          Peserta OMB UMN 2024 berkumpul{" "}
          <b>di depan area Cak Ghofur</b> pada waktu yang
          telah ditentukan sebagai titik kumpul awal.
        </p>
      </div>
      <div className="tikum_content">
        <div className="map-tikum">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=-6.25679402355057,%20106.61415517330171+(Titik%20Kumpul)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps trackers</a>
          </iframe>
        </div>
        <div className="image-tikum">
          <img src={FotoTikum} alt="Titik Kumpul" />
        </div>
      </div>
    </section>
  );
};

export default Tikum;
