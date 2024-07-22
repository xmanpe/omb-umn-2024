import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Timeline.scss";
import Flower from "../../images/supergrafis/SUPERGRAFIS METALLIC VIOLET/Fill - Bunga Lotus Biru 2.svg";

const events = [
  { date: '12 Agustus 2024', title: 'Sesi Informasi OMB UMN 2024', description: 'Sesi Informasi OMB bertujuan memberikan informasi dan persiapan bagi peserta sebelum mengikuti rangkaian kegiatan OMB UMN 2024.', },
  { date: '19 Agustus 2024', title: 'Hari Pemupukan', description: '' },
  { date: '20 Agustus 2024', title: 'Perkembangan Hari 1', description: ''},
  { date: '21 Agustus 2024', title: 'Perkembangan Hari 2', description: ''},
  { date: '23 Agustus 2024', title: 'Sidang Terbuka Senat', description: ''},
  { date: '26-27 Agustus 2024', title: 'Pameran Meliora', description: 'Pameran dokumentasi di balik perjalanan OMB UMN 2024'},
  { date: '30 Agustus 2024', title: 'Forum OMB', description: ''},
];

const Timeline = () => {
  return (
    <section className="timeline_section">
      <div className="timeline_title">
        <h1>LINIMASA OMB UMN 2024</h1>
      </div>
      <VerticalTimeline lineColor="rgba(69, 4, 179, 0.3)" style={{ backgroundColor: 'white' }}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            // date={event.date}
            iconStyle={{
              boxShadow: 'none',
            }}

            // icon={event.icon}
            contentArrowStyle={{ 
              borderRight: '12px solid  rgba(69, 4, 179, 0.8)',
              // background: "white",
              borderWidth: '12px',
              // border: "1.5px solid #F0F0F0",
              // boxShadow: "0px 7px 12px 0px rgba(0, 0, 0, 0.05)",
            }}
            contentStyle={{
              border: "1.5px solid rgba(69, 4, 179, 1)",
              background: "white",
              boxShadow: "0px 7px 12px 0px rgba(69, 4, 179, 0.1)",
              borderRadius: "20px"
            }}
          >
            <div className="timeline-date">{event.date}</div>
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <siv className="vertical-timeline-element-subtitle">{event.description}</siv>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Timeline;
