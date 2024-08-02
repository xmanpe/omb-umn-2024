import UMN from "../../images/shuttle-bus/UMN.jpg";
import TangCityMall from "../../images/shuttle-bus/tangcity_mall.webp";
import Dormitory from "../../images/shuttle-bus/dormitory_umn.png";
import PasarModernBSD from "../../images/shuttle-bus/pasar_modern_bsd.jpg";
import FotoTikum from "../../images/foto tikum.jpg"

const busSchedules = {
  "Perkembangan Hari 1": {
    bigBus: {
      departure: [
        { time: "05.10", route: "Pasar Modern BSD", image: PasarModernBSD },
        { time: "05.45", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "06.15",
          route: "Tiba di titik kumpul (depan Cak Ghofur)",
          image: FotoTikum,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 15.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Pasar Modern BSD (Halte Pasar Modern BSD)",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 14.45 WIB." },
      ],
    },
    miniBus: {
      departure: [
        {
          time: "05.10",
          route: "Halte Tangerang City Mall",
          image: TangCityMall,
        },
        { time: "05.45", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "06.15",
          route: "Tiba di titik kumpul (depan Cak Ghofur)",
          image: FotoTikum,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 15.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Halte Tangerang City Mall",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 14.45 WIB." },
      ],
    },
  },
  "Perkembangan Hari 2": {
    bigBus: {
      departure: [
        { time: "05.20", route: "Pasar Modern BSD", image: PasarModernBSD },
        { time: "05.55", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "06.25",
          route: "Tiba di titik kumpul (depan Cak Ghofur)",
          image: FotoTikum,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 15.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Pasar Modern BSD (Halte Pasar Modern BSD)",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 14.45 WIB." },
      ],
    },
    miniBus: {
      departure: [
        {
          time: "05.20",
          route: "Halte Tangerang City Mall",
          image: TangCityMall,
        },
        { time: "05.55", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "06.25",
          route: "Tiba di titik kumpul (depan Cak Ghofur)",
          image: FotoTikum,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 15.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Halte Tangerang City Mall",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 14.45 WIB." },
      ],
    },
  },
  "Sidang Senat Terbuka": {
    bigBus: {
      departure: [
        { time: "06.00", route: "Pasar Modern BSD (Halte Pasar Modern BSD) ", image: PasarModernBSD },
        { time: "06.35", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "07.10",
          route: "Tiba di UMN ",
          image: UMN,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 12.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Pasar Modern BSD (Halte Pasar Modern BSD)",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 11.45 WIB." },
      ],
    },
    miniBus: {
      departure: [
        {
          time: "06.00",
          route: "Halte Tangerang City Mall ",
          image: TangCityMall,
        },
        { time: "06.35", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "07.10",
          route: "Tiba di UMN ",
          image: UMN,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 12.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Halte Tangerang City Mall",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 11.45 WIB." },
      ],
    },
  },
  "Perkenalan Prodi": {
    bigBus: {
      departure: [
        { time: "06.15", route: "Pasar Modern BSD  (Halte Pasar Modern BSD)  ", image: PasarModernBSD },
        { time: "06.50", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "07.20",
          route: "Tiba di UMN",
          image: UMN,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 12.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Pasar Modern BSD (Halte Pasar Modern BSD)",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 11.45 WIB." },
      ],
    },
    miniBus: {
      departure: [
        {
          time: "06.15",
          route: "Halte Tangerang City Mall",
          image: TangCityMall,
        },
        { time: "06.50", route: "<i>Dormitory</i> UMN", image: Dormitory },
        {
          time: "07.20",
          route: "Tiba di UMN",
          image: UMN,
        },
      ],
      return: [
        {
          description:
            "<b>Kepulangan:</b> Pukul 12.30 – Gerbang Utama UMN &gt; <i>Dormitory</i> UMN &gt; Halte Tangerang City Mall",
        },
        { note: "Keterangan: Untuk kepulangan, bus besar dan kecil siap sejak pukul 11.45 WIB." },
      ],
    },
  },
};

export default busSchedules;