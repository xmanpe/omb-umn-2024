import React from 'react'
import './mars.scss'

//images
import Wave3 from '../../images/waves/Wave One 3.png'
import Superputihkiri from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih-kiri.svg'
import Superputihkanan from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih-kanan.svg'
import SupergrafisKembang from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - kembang.svg'
import SupergrafisKunang from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - kunang.svg'
import SupergrafisLebah from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - lebah.svg'
import SupergrafisTangkai from '../../images/supergrafis/Mars supergrafis/Supergrafis Putih - 2 tangkai.svg'

//audio
import AudioOMB from '../../audio/MarsOMB.mp3'
import AudioUMN from '../../audio/MarsUMN.mp3'
function Mars() {
    return (
        <div className="mars-container">
            <img src={SupergrafisKembang} alt="" className='supergrafis-kembang'/>
            <img src={SupergrafisKunang} alt="" className='supergrafis-kunang'/>
            <img src={SupergrafisLebah} alt="" className='supergrafis-lebah'/>
            <img src={SupergrafisTangkai} alt="" className='supergrafis-tangkai'/>
            <img src={Superputihkanan} alt="" className='supergrafis-air-kanan'/>
            <img src={Superputihkiri} alt="" className='supergrafis-air-kiri'/>
            <div className="wave-container">
                <img src={Wave3} alt="Wave one 3" className='wave-one-3'/>
            </div>
            <div className="mars-title">
                <img src={Superputihkiri} alt="" className='supergrafis-mars'/>
                <h1>MARS</h1>
                <img src={Superputihkanan} alt="" className='supergrafis-mars'/>
            </div>
            <div className="mars-content">
                <div className="mars-omb">
                    <div className="mars-omb-title">
                        <h2>MARS OMB</h2>
                    </div>
                    <div className="mars-omb-content">
                        <p>
                            Kamilah anak bangsa <br />
                            Prestasi nusantara<br />
                            Merangkai makna bersumpah setia sebagai manusia<br />
                            Menjunjung tinggi ilmu sikap dan perilaku<br />
                            Bersatu dalam semangat baru<br />
                            Sampai di akhir<br />
                            Sampai di akhir<br />
                            Sampai di akhir waktu<br />
                            <br/>
                            (<i>Dinyanyikan 1x dengan berdiri tegap,
                            bertepuk tangan dengan tempo ¾</i>)
                        </p>
                    </div>
                    <div className="mars-omb-audio">
                        <audio controls src={AudioOMB}></audio>
                    </div>
                </div>
                <div className="mars-umn">
                    <div className="mars-umn-title">
                        <h2>MARS UMN</h2>
                    </div>
                    <div className="mars-umn-content">
                        <p>
                            Universitas Multimedia Nusantara<br />
                            Majukan ilmu dan teknologi bagi nusa bangsa<br />
                            Universitas Multimedia Nusantara<br />
                            Ciptakan profesional muda dan wirausaha<br />
                            Baktikan karyaku kepada bangsaku melalui tridharma<br />
                            Merintis langkahku menuju suksesku melalui almamaterku<br />
                            Universitas Multimedia Nusantara<br />
                            Demi kejayaan bangsa Indonesia<br />
                            <br/>                           
                            (<i>Dinyanyikan 2x dengan posisi berdiri tegap dan tangan kanan
                            diletakkan di dada sebelah kiri dengan telapak tangan dikepal</i>)
                        </p>
                    </div>
                    <div className="mars-umn-audio">
                        <audio controls src={AudioUMN}></audio>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mars