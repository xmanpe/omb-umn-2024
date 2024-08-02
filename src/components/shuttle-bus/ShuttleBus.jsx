import React, { useState, useEffect } from "react";
import "./ShuttleBus.scss";
import BigBus from "../../images/icons/bus/bus.png";
import MiniBus from "../../images/icons/bus/school-bus.png";
import ArrowDropdown from "../../images/Arrow/ArrowDropdown.svg";
import BusSchedules from "./BusSchedules.jsx";
const ShuttleBus = () => {
  const [sliderState, setSliderState] = useState(0);

  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  const handleUserClick = (index) => {
    setShowMobileDropdown(!showMobileDropdown);
    setSliderState(index);
  };

  const slides = [
    "Perkembangan Hari 1",
    "Perkembangan Hari 2",
    "Sidang Senat Terbuka",
    "Perkenalan Prodi",
  ];

  const renderSchedule = (type, scheduleType) => (
    <div className="shuttle_bus_container_card">
      <div className="shuttle_bus_timeline">
        <div className="shuttle_bus_type">
          <img src={type === "bigBus" ? BigBus : MiniBus} alt={type} />
          <p>Keberangkatan</p>
          <div className="shuttle_bus_type_title">
            {type === "bigBus" ? "Bus Besar" : "Bus Kecil"}
          </div>
        </div>
        <div className="right-bus">
        {BusSchedules[slides[sliderState]][type]?.[scheduleType]?.map(
          (schedule, index) => (
            <div key={index} className="shuttle_bus_item">
              <div className="shuttle_bus_card">
                <div className="shuttle_bus_image">
                  <img src={schedule.image} alt={`Schedule ${index + 1}`} />
                </div>
                <div className="shuttle_bus_time">{schedule.time}</div>
                <div
                  className="shuttle_bus_route"
                  dangerouslySetInnerHTML={{ __html: schedule.route }}
                />

                {index <
                  BusSchedules[slides[sliderState]][type][scheduleType].length -
                    1 && (
                  <div className="shuttle_bus_line">
                    {" "}
                    <div class="arrow">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        )}
        </div>
      </div>
      <div className="shuttle_bus_kepulangan">
        <p
          dangerouslySetInnerHTML={{
            __html:
              BusSchedules[slides[sliderState]][type]?.return?.[0]
                ?.description || "",
          }}
        />
        <div className="shuttle_bus_kepulangan_note">
          {BusSchedules[slides[sliderState]][type]?.return?.[1]?.note}
        </div>
      </div>
    </div>
  );

  return (
    <section className="shuttle_bus_section">
      <div className="shuttle_bus_title">
        <h1>
          Rute <i>Shuttle Bus</i>
        </h1>
        <p>
          <i>Shuttle bus</i> disediakan <b>gratis </b>selama rangkaian <b>OMB UMN 2024</b> berlangsung dan dapat digunakan untuk <b>keberangkatan serta kepulangan Peserta OMB UMN 2024</b>.
        </p>
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
        <div className="slider-wrapper-mobile">
          <div className="slider-mobile">
            {slides.map(
              (slides, index) =>
                sliderState === index && (
                  <button
                    key={index}
                    className="slider-button-mobile-active"
                    onClick={handleDropdownClick}
                  >
                    {slides}
                    <img
                      className={`arrow ${!showMobileDropdown ? "up" : "down"}`}
                      src={ArrowDropdown}
                      alt="drop"
                    />
                  </button>
                )
            )}
            {showMobileDropdown && (
              <div className="dropdown-wrapper">
                {slides.map(
                  (slides, index) =>
                    sliderState !== index && (
                      <button
                        key={index}
                        className={`slider-button-mobile`}
                        onClick={() => handleUserClick(index)}
                      >
                        {slides}
                      </button>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="shuttle_bus_content">
        {renderSchedule("bigBus", "departure")}
        {renderSchedule("miniBus", "departure")}
      </div>
    </section>
  );
};

export default ShuttleBus;
