import React, { useState, useEffect } from "react";
import "./ShuttleBus.scss";
import BigBus from "../../images/icons/bus/bus.png";
import MiniBus from "../../images/icons/bus/school-bus.png";
import UMN from "../../images/shuttle-bus/UMN.jpg";

const ShuttleBus = () => {
  const [sliderState, setSliderState] = useState(0);
  const slides = ["Keberangkatan", "Kepulangan"];

  const schedules = {
    bigBus: {
      departure: [
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
      ],
      return: [
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
      ],
    },
    miniBus: {
      departure: [
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
      ],
      return: [
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
        { time: "WAKTU", route: "LOKASI",  image:UMN},
      ],
    },
  };

  const renderSchedule = (type, scheduleType) => (
    <div className="shuttle_bus_timeline">
      <div className="shuttle_bus_type">
        <img src={type === "bigBus" ? BigBus : MiniBus} alt={type} />
        <div className="shuttle_bus_type_title">
          {type === "bigBus" ? "Bus Besar" : "Bus Kecil"}
        </div>
      </div>
      {schedules[type][scheduleType].map((schedule, index) => (
        <div key={index} className="shuttle_bus_item">
          {/* <div className="shuttle_bus_circle"></div> */}
          <div className="shuttle_bus_image">
            <img src={schedule.image} alt={`Schedule ${index + 1}`} />
          </div>
          <div className="shuttle_bus_time">{schedule.time}</div>
          <div className="shuttle_bus_route">{schedule.route}</div>
          {index < schedules[type][scheduleType].length - 1 && (
            <div className="shuttle_bus_line"></div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="shuttle_bus_section">
      <div className="shuttle_bus_title">
        <h1>Shuttle Bus</h1>
        <p>
          Simak <b>rute shuttle bus</b> UMN yang dapat digunakan oleh{" "}
          <b>Peserta OMB UMN 2024</b> selama rangkaian kegiatan berlangsung.
          Shuttle bus disediakan <b>gratis</b> selama rangkaian{" "}
          <b>OMB UMN 2024</b> berlangsung serta dapat dingunakan untuk{" "}
          <b>keberangkatan dan kepulangan</b> Peserta OMB UMN 2024.
        </p>
      </div>
      <div className="slider">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`slider-button ${sliderState === index ? "active" : ""}`}
            onClick={() => setSliderState(index)}
          >
            {slide}
          </button>
        ))}
      </div>
      <div className="shuttle_bus_content">
        {sliderState === 0 ? (
          <>
            {renderSchedule("bigBus", "departure")}
            {renderSchedule("miniBus", "departure")}
          </>
        ) : (
          <>
            {renderSchedule("bigBus", "return")}
            {renderSchedule("miniBus", "return")}
          </>
        )}
      </div>
    </section>
  );
};

export default ShuttleBus;
