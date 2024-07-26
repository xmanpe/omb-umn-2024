import Dinamika from "../../components/dinamika/Dinamika";
import Footer from "../../components/footer/Footer";
import Header from '../../components/header/Header';

import './RembakaAnindita.scss';

const RembakaAnindita = () => {
    return (
        <section className="rembaka_anindita">
            <Header 
                top="Rembaka Anindita"
                bottom={<>Yuk, kenali kampus melalui dinamika</>}
            />
            <div className="wordingan">
                <h1 className="judul">Rembaka Anindita</h1>
                <p className="penjelasan">Rembaka Anindita, berasal dari bahasa Sanskerta yang berarti <b>"Berkembang Sempurna"</b>. Dalam dinamika ini, objek digabungkan ke objek yang sama, sehingga menyatu dan berubah menjadi objek baru, dimulai dari kunang-kunang hingga Lotus Biru. Objek yang digunakan merupakan supergrafis OMB UMN 2024.</p>
                <br />
                <p className="penjelasan">Dinamika ini mencerminkan salah satu nilai OMB UMN 2024, yaitu 5C, yang mengandung nilai competent dan competitive di mana Peserta OMB UMN 2024 dapat aktif dalam mengasah kemampuannya dan bersaing secara sehat untuk mendapatkan poin tertinggi dalam dinamika.</p>
                <br />
                <p className="penjelasan">Tujuan utama dinamika ini selaras dengan tujuan dari OMB UMN 2024, yakni agar peserta dapat lebih <b>mengenal lingkungan UMN</b> dengan menjawab pertanyaan-pertanyaan seputar UMN selama berdinamika.</p>

                {/* <div className="button_cara">Cara Berdinamika</div> */}
            </div>
            <Dinamika />
            <Footer />
        </section>
    )
}

export default RembakaAnindita;