import React from "react";
import AlatSalat from "../../images/atribut/AlatSalat.png";
import Batik from "../../images/atribut/Batik.png";
import Bekal from "../../images/atribut/Bekal.png";
import Botol from "../../images/atribut/Botol.png";
import Catatan from "../../images/atribut/Catatan.png";
import IkatPinggang from "../../images/atribut/IkatPinggang.png";
import JasHujan from "../../images/atribut/JasHujan.png";
import Jeans from "../../images/atribut/Jeans.png";
import KaosFakultas from "../../images/atribut/KaosFakultas.png";
import KaosPutih from "../../images/atribut/KaosPutih.png";
import KemejaBebas from "../../images/atribut/KemejaBebas.png";
import Lap from "../../images/atribut/Lap.png";
import Laptop from "../../images/atribut/Laptop.png";
import Manset from "../../images/atribut/Manset.png";
import Sepatu from "../../images/atribut/Sepatu.png";
import Tas from "../../images/atribut/Tas.png";
import Topi from "../../images/atribut/Topi.png";
import Zoom from "../../images/atribut/Zoom.png";
import abu from "../../images/atribut/baju-fakultas/abu.png"; 
import hitam from "../../images/atribut/baju-fakultas/hitam.png"; 
import jingga from "../../images/atribut/baju-fakultas/jingga.png"; 
import kuning from "../../images/atribut/baju-fakultas/kuning.png"; 

const listAtributPeserta = {
    "list-atribut-peserta":[
        {
            barang:"Kaus Berkerah Putih",
            image:KaosPutih,
            desc:"Peserta OMB UMN 2024 wajib menggunakan kaus berkerah, dengan warna putih polos, tidak memiliki kantong, dan tidak bergaris. Jika terdapat logo/gambar, hanya diperbolehkan di bagian depan dengan ukuran maksimal 8 x 8 cm.",
            hari:[2],
        },
        {
            barang:"Kaus Berkerah Polos Berwarna Fakultas",
            image:KaosFakultas,
            desc:"Peserta OMB UMN 2024 wajib menggunakan kaus berkerah sesuai dengan warna fakultas masing-masing dengan warna polos, tidak memiliki kantong, dan tidak bergaris. Jika terdapat logo/gambar, hanya diperbolehkan di bagian depan dengan ukuran maksimal 8 x 8 cm.",
            hari:[1],
            bajuDesc:[
            {
                fakultas:"Fakultas Ilmu Komunikasi",
                jurusan:"Komunikasi Strategis dan Jurnalistik",
                bajuImage:kuning,
                warna:"kuning",
            },
            {
                fakultas:"Fakultas Seni dan Desain",
                jurusan:"Desain Komunikasi Visual, Film dan Animasi, dan Arsitektur",
                bajuImage:hitam,
                warna:"hitam",
            },
            {
                fakultas:"Fakultas Teknik dan Informatika",
                jurusan:"Teknik Komputer, Teknik Elektro, Teknik Fisika, Informatika, dan Sistem Informasi",
                bajuImage:jingga,
                warna:"jingga",
            },
            {
                fakultas:"Fakultas Bisnis dan D3 Perhotelan",
                jurusan:"Manajemen dan Akutansi",
                bajuImage:abu,
                warna:"abu",
            }],
        },
        {
            barang:"Kaus atau Kemeja Berkerah",
            image: KemejaBebas,
            desc:"Peserta OMB UMN 2024 wajib mengenakan kaus atau kemeja berkerah motif bebas.",
            hari:[0],
        },
        {
            barang:"Baju Batik",
            image:Batik,
            desc:"Peserta OMB UMN 2024 wajib mengenakan baju batik, motif, dan warna bebas, serta sopan sesuai dengan ketentuan kampus, baik berlengan pendek maupun panjang.",
            hari:[3],
        },
        {
            barang:"Celana Jeans Hitam",
            image: Jeans,
            desc:"Peserta OMB UMN 2024 wajib mengenakan celana jeans panjang berwarna hitam pekat polos dengan model <i>slim fit</i> atau <i>regular fit</i>, tidak robek, dan tidak dilipat keluar.",
            hari:[0,1,2,3],
        },
        {
            barang:"Ikat Pinggang",
            image:IkatPinggang,
            desc:"Peserta OMB UMN 2024 diperbolehkan menggunakan ikat pinggang berwarna bebas yang  bersifat opsional sesuai kebutuhan masing-masing.",
            hari:[0,1,2,3],
        },
        {
            barang:"Gawai, <i>Charger</i>, <i>Earphone/Headphone</i>",
            image:Laptop,
            desc:"Peserta OMB UMN 2024 wajib menyiapkan gawai dengan baterai penuh, <i>charger</i>, serta <i>earphone/headphone</i>. Pastikan semua perangkat tersebut siap digunakan selama kegiatan berlangsung.",
            hari:[0],
        },
        {
            barang:"Aplikasi Zoom",
            image:Zoom,
            desc:"Peserta OMB UMN 2024 wajib menyiapkan gawai dengan baterai penuh, charger, serta earphone/headphone. Pastikan semua perangkat tersebut siap digunakan selama kegiatan berlangsung.",
            hari:[0],
        },
        {
            barang:"Sepatu Kets",
            image:Sepatu,
            desc:"Peserta OMB UMN 2024 wajib memakai sepatu kets yang bersifat mengencangkan dengan warna, model, dan motif yang bebas, serta nyaman digunakan pada saat mengikuti rangkaian OMB UMN 2024.",
            hari:[1,2,3],
        },
        {
            barang:"Tas Serut",
            image:Tas,
            desc:"Peserta OMB UMN 2024 wajib menggunakan tas serut dan tidak diperbolehkan menggunakan ransel atau jenis tas lainnya selain tas serut.",
            hari:[1,2],
        },
        {
            barang:"Handuk Good Morning",
            image:Lap,
            desc:"Peserta OMB UMN 2024 wajib membawa handuk Good Morning",
            hari:[1,2],
        },
        {
            barang:"Buku Catatan dan Alat Tulis",
            image:Catatan,
            desc:"Peserta OMB UMN 2024 wajib mempersiapkan buku catatan dan alat tulis untuk mencatat seluruh informasi penting yang diberikan selama rangkaian OMB UMN 2024 berlangsung.",
            hari:[0,1,2,3],
        },
        {
            barang:"Topi Berlidah Lengkung",
            image:Topi,
            desc:"Peserta OMB UMN 2024 wajib menggunakan topi berlidah lengkung, warna dan motif bebas. Peserta tidak diperbolehkan memakai topi berlidah lurus atau <i>snapback</i>.",
            hari:[1,2],
        },
        {
            barang:"Tempat Makan dan Botol Minum Tidak Sekali Pakai",
            image:Bekal,
            desc:"Peserta OMB UMN 2024 diwajibkan membawa tempat makanan dan botol minum berukuran minimal 600 ml tidak sekali pakai.",
            hari:[1,2],
        },
        {
            barang:"Jas Hujan",
            image:JasHujan,
            desc:"Peserta OMB UMN 2024 diharapkan membawa jas hujan untuk mengantisipasi cuaca yang tidak menentu selama rangkaian kegiatan OMB UMN 2024 berlangsung.",
            hari:[1,2],
        },
        {
            barang:"Perlengkapan Salat",
            image:AlatSalat,
            desc:"Peserta OMB UMN 2024 yang beragama muslim dan hendak melakukan ibadah, wajib membawa kebutuhan alat-alat salat pribadi.",
            hari:[1,2],
        },
        {
            barang:"Manset & Hijab",
            image:Manset,
            desc:"Bagi peserta OMB UMN 2024 yang menggunakan hijab tidak diperkenankan menggunakan kaus berkerah panjang. Sebagai gantinya, peserta dapat menggunakan hijab dan manset  berwarna hitam.",
            hari:[1,2],
        },
        {
            barang:"Botol Minum Tidak Sekali Pakai",
            image:Botol,
            desc:"Peserta OMB UMN 2024 diwajibkan membawa botol minum tidak sekali pakai berukuran minimal 600 ml.",
            hari:[0,3],
        },
    ]
}

export default listAtributPeserta;