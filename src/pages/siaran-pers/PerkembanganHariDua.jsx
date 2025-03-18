import React from "react";

// import scss
import './SiaranPers.scss';

//import components
import AnnCard2White from "../../components/cards/ann card/AnnCard2White";
import AnnCard3White from "../../components/cards/ann card/AnnCard3White";
import AnnCardPers1 from "../../components/cards/ann card/AnnCardPers1White";
import AnnCardPers2 from '../../components/cards/ann card/AnnCardPers2White';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

//import images
import Image1 from '../../images/pers/pembentukan2/Pembentukan2-1.jpeg';
import Image2 from '../../images/pers/pembentukan2/Pembentukan2-2.jpeg';
import Image3 from '../../images/pers/pembentukan2/Pembentukan2-3.jpeg';
import Image4 from '../../images/pers/pembentukan2/Pembentukan2-4.jpeg';
import Image5 from '../../images/pers/pembentukan2/Pembentukan2-5.jpeg';
import Image6 from '../../images/pers/pembentukan2/Pembentukan2-6.jpeg';

const PerkembanganHariDua = () => {
    const top = 'Rilis Pers';
    const bottom = 'Perkembangan Hari 2 OMB UMN 2024';

    return (
        <>
            <Header top={top} bottom={bottom}/>
            <section className="pers_section">
                <div className="left-pers">
                    <div className="pers-title">
                        <div className="day-and-date">
                            <p className="hari-date">Rabu, 21 Agustus 2024</p>
                        </div>
                        <h1>Resmi Jadi Mahasiswa: OMB UMN 2024 Sambut Mahasiswa Baru dengan Dinamika Penuh Makna</h1>
                    </div>
                    <div className="paragraph-pers">
                        <p><b>TANGERANG</b> - Universitas Multimedia Nusantara (UMN) resmi menyambut peserta Orientasi Mahasiswa Baru (OMB) 2024 sebagai bagian dari keluarga besar UMN. Mengusung tema "Tidak Ada Tentang Kita, Tanpa Kita," OMB UMN 2024 memperkenalkan dunia akademik dan kehidupan kampus, sekaligus mengukuhkan identitas mahasiswa sebagai generasi penerus bangsa. Acara ini menandai awal perjalanan penuh tantangan dan peluang bagi mahasiswa baru di lingkungan kampus yang dinamis dan inovatif.</p>

                        <div className="image-pers">
                            <img src={Image1} alt="" />
                        </div>
                        <p className="image-text">Mahasiswa Baru Universitas Multimedia Nusantara sedang melaksanakan dinamika kelompok.</p>

                        <p>OMB UMN 2024 merayakan Perkembangan Hari 2, dengan serangkaian dinamika kelompok yang dirancang untuk mempererat hubungan peserta dengan lingkungan kampus dan menginternalisasi nilai-nilai inti UMN. Dalam dinamika "Bhavana", mahasiswa baru diajak menjelajahi kampus sambil membangun hubungan yang kuat dengan sesama, memberikan fondasi awal yang penting bagi perjalanan mereka di UMN.</p>

                        <div className="image-pers">
                            <img src={Image2} alt="" />
                        </div>
                        <p className="image-text">Ketua Panitia Orientasi Mahasiswa Baru Universitas Multimedia Nusantara 2024 Wilcoustine Qhristmas Pniel Wijaya memimpin seremonial pengukuhan peserta menjadi mahasiswa melalui pembacaan "Janji Mahasiswa Indonesia".</p>
                        
                        <p>Selanjutnya, dinamika "Wiyata" memperkenalkan nilai-nilai 5C UMN – <i>Caring, Credible, Competent, Competitive,</i> dan <i>Customer Delight</i> – sebagai pilar dalam membentuk karakter mahasiswa yang berintegritas dan bertanggung jawab. Terakhir, "Ekawira" menguji keberanian dan keteguhan hati para peserta melalui tantangan yang dirancang untuk membangun mentalitas tangguh, mempersiapkan mereka menghadapi masa depan yang penuh tantangan.</p>

                        <div className="image-pers">
                            <img src={Image3} alt="" />
                        </div>
                        <p className="image-text">Salah satu mahasiswa baru Universitas Multimedia Nusantara menyerukan "Janji Mahasiswa Indonesia" sebagai tanda resmi Peserta OMB UMN 2024 sebagai seorang mahasiswa.</p>

                        <p>Salah satu momen yang sangat dinantikan dalam OMB UMN 2024 adalah “Gistara Geya”, atau Surat Apresiasi. Surat ini disusun sebagai bentuk penghargaan bagi para mahasiswa baru, di mana setiap surat diharapkan mampu membangkitkan kenangan indah dan menjadi rekaman memori yang abadi. Sebagai bagian dari upaya mempererat hubungan, Gistara Geya juga menjadi simbol apresiasi yang mendalam dari mahasiswa baru kepada para panitia OMB UMN 2024.</p>
                        
                        <p>Dalam semangat kebersamaan ini, Ketua OMB UMN 2024, Wilcoustine Qhristmas Pniel Wijaya, dengan tegas dan lantang mengucapkan Janji Mahasiswa Indonesia di hadapan para Pejuang Lotus Biru dengan menggaungkan “Hei, siapa kalian?” “Kami, mahasiswa!”. Rangkaian kegiatan ini semakin khidmat dengan persembahan marching band yang dibawakan oleh panitia OMB UMN 2024 yang membangkitkan semangat, serta pengibaran bendera UMN dan bendera Indonesia, yang dibawa berlari oleh Ketua dan Wakil Ketua OMB UMN 2024 secara bersamaan. Momen ini mengukuhkan komitmen para mahasiswa baru untuk menjunjung tinggi nilai-nilai kebangsaan, menjaga kehormatan almamater, serta menjadi generasi penerus yang siap berkontribusi nyata bagi kemajuan Indonesia.</p>

                        <div className="image-pers">
                            <img src={Image4} alt="" />
                        </div>
                        <p className="image-text"><i>Person in Charge</i> (Sakha) bersama anggota kelompoknya merayakan keberhasilan mereka melalui seluruh rangkaian kegiatan Orientasi Mahasiswa Baru Universitas Multimedia Nusantara 2024.</p>

                        <p>OMB UMN 2024 telah mencapai puncaknya dengan acara penutupan yang megah dan penuh makna, yaitu peresmian. Rangkaian kegiatan penutupan ini menjadi persembahan istimewa dari panitia kepada seluruh peserta OMB UMN 2024 yang telah melewati berbagai tahapan penting seperti Hari Pemupukan, Perkembangan Hari 1, dan Perkembangan Hari 2. Dalam momen penuh kebanggaan ini, para mahasiswa baru secara resmi diterima sebagai bagian dari keluarga besar Universitas Multimedia Nusantara. Acara ini tidak hanya menandai langkah awal mereka sebagai mahasiswa, tetapi juga mengukuhkan semangat mereka untuk berkontribusi bagi kampus dan masyarakat luas.</p>

                        <p>“Selamat, kepada para Pejuang Lotus Biru! Telah resmi menjadi mahasiswa dan bagian dari keluarga besar Universitas Multimedia Nusantara,” ucap para panitia OMB UMN 2024 kepada para mahasiswa baru Universitas Multimedia Nusantara dengan kompak dan lantang. Momen ini menjadi penanda resmi dimulainya perjalanan akademik mereka di UMN.</p>

                        <div className="image-pers">
                            <img src={Image5} alt="" />
                        </div>
                        <p className="image-text">Mahasiswa Baru Universitas Multimedia Nusantara sedang melaksanakan dinamika kelompok.</p>

                        <p>Sebagai simbol resmi dari status baru mereka, para mahasiswa baru kemudian menerima Kartu Tanda Mahasiswa (KTM) yang diserahkan langsung oleh Sakha (PIC) masing-masing kelompok. KTM ini bukan hanya sekadar identitas, tetapi juga berfungsi sebagai tanda pengenal resmi selama berada di kampus UMN. Dengan wajah penuh semangat dan harapan, para mahasiswa baru bersiap menjalani babak baru dalam hidup mereka, di lingkungan kampus yang dinamis dan inovatif.</p>

                        <p>Dalam wawancara singkat, Chintya, salah satu mahasiswa baru, berbagi pengalamannya yang mengesankan selama OMB UMN 2024. Baginya, momen inaugurasi di mana para panitia menari di depan peserta dan sesi foto bersama yang penuh haru saat pembagian KTM menjadi kenangan yang tak terlupakan. "Rasanya senang sekaligus deg-degan karena akan menjalani kuliah selama empat tahun di UMN," ujarnya.</p>

                        <div className="image-pers">
                            <img src={Image6} alt="" />
                        </div>
                        <p className="image-text">Suasana lapangan Universitas Multimedia Nusantara ketika Perkembangan Hari 2 Orientasi Mahasiswa Baru Universitas Multimedia Nusantara 2024.</p>

                        <p>Ketika ditanya tentang apa yang didapatkan selama rangkaian OMB, Chintya mengungkapkan, "Saya belajar untuk lebih menghargai waktu. Di OMB UMN, semuanya tertata dengan baik, jadi kita harus cekatan dan lebih menghargai waktu. Selain itu, saya juga mendapatkan banyak teman dan relasi baru." Pengalaman ini akan menjadi fondasi kuat bagi Chintya dan teman-temannya untuk memulai perjalanan akademik yang penuh tantangan di UMN.</p>
                    </div>
                </div>
                <div className="right-pers">
                    <p>Informasi Penting!</p>
                    <div className="info-stack">
                        <AnnCardPers2 />
                        <AnnCardPers1 />
                        <AnnCard2White />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
 
export default PerkembanganHariDua;