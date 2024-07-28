import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.scss";
import Flower from "../../images/supergrafis/icon_timeline.svg";
import TestIcon from '../../images/icons/TestImage.png';
import useSingleColumnTimeline from './UseSingleColumnTimeline';

import First from '../../images/First.png'
import Second from '../../images/Second.png'
import Third from '../../images/Third.png'
import Fourth from '../../images/Fourth.png'
import Fifth from '../../images/Fifth.png'
import Sixth from '../../images/Sixth.png'
import Seventh from '../../images/Seventh.png'

const events = [
  {
    date: "Senin, 12 Agustus 2024",
    title: "Sesi Informasi OMB UMN 2024",
    description: "<i>Online</i>/Daring",
    icon: (
      <img
        src={Flower}
        alt="Flower"
        style={{ width: "100%", height: "100%", opacity: "0.8" }}
      />
    ),
    theImage: Sixth,
  },
  {
    date: "Senin, 19 Agustus 2024",
    title: "Hari Pemupukan",
    description: "<i>Online</i>/Daring",
    icon: (
      <img
        src={Flower}
        alt="Flower"
        style={{ width: "100%", height: "100%", opacity: "0.8" }}
      />
    ),
    theImage: First,
  },
  {
    date: "Selasa, 20 Agustus 2024",
    title: "Perkembangan Hari 1",
    description: "<i>Offline</i>/Luring",
    icon: (
      <img
        src={Flower}
        alt="Flower"
        style={{ width: "100%", height: "100%", opacity: "0.8" }}
      />
    ),
    theImage: Second,
  },
  {
    date: "Rabu, 21 Agustus 2024",
    title: "Perkembangan Hari 2",
    description: "<i>Offline</i>/Luring",
    icon: (
      <img
        src={Flower}
        alt="Flower"
        style={{ width: "100%", height: "100%", opacity: "0.8" }}
      />
    ),
    theImage: Third,
  },
  {
    date: "Jumat, 23 Agustus 2024",
    title: "Sidang Terbuka Senat",
    description: "<i>Offline</i>/Luring",
    icon: (
      <img
        src={Flower}
        alt="Flower"
        style={{ width: "100%", height: "100%", opacity: "0.8" }}
      />
    ),
    theImage: Fourth,
  },
  {
    date: "Senin, 26 Agustus 2024 - Rabu, 28 Agustus 2024",
    title: "Pameran Meliora",
    description: "Pameran dokumentasi di balik perjalanan OMB UMN 2024 (<i>Offline</i>/Luring)",
    icon: (
      <img
        src={Flower}
        alt="Flower"
        style={{ width: "100%", height: "100%", opacity: "0.8" }}
      />
    ),
    theImage: Seventh,
  },
  {
    date: "Jumat, 30 Agustus 2024",
    title: "Forum OMB",
    description: "<i>Offline</i>/Luring",
    icon: (
      <img
        src={Flower}
        alt="Flower"
        style={{ width: "100%", height: "100%", opacity: "0.8" }}
      />
    ),
    theImage: Fifth,
  },
];

const Timeline = () => {
  useSingleColumnTimeline();

  return (
    <section className="timeline_section">
      {/* <div className="timeline_title">
        <h1>LINIMASA</h1>
      </div> */}
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            // date={event.date}
            iconStyle={{
              boxShadow: "none",
            }}
            icon={event.icon}
            contentArrowStyle={{
              borderRight: "12px solid  rgba(69, 4, 179, 0.8)",
              borderWidth: "12px",
            }}
          >
            <img className="image-side" src={event.theImage} alt="" />
            <div className="content-side">
              <div className="timeline-date">{event.date}</div>
              <h3 className="vertical-timeline-element-title">{event.title}</h3>
              <div
                className="vertical-timeline-element-subtitle"
                dangerouslySetInnerHTML={{ __html: event.description }}
              />
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
