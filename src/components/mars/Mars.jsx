import React from 'react'
import './mars.scss'

//images
import Wave3 from '../../images/waves/Wave One 3.png'
import SuperMars from '../../images/supergrafis/supergrafis-mars.png'
//audio
import AudioOMB from '../../audio/Nayanika.mp3'
function Mars() {
    return (
        <div className="mars-container">
            <div className="wave-container">
                <img src={Wave3} alt="Wave one 3" className='wave-one-3'/>
            </div>
            <div className="mars-title">
                {/* <img src={SuperMars} alt="" /> */}
                <h1>MARS</h1>
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
                        <audio controls src={AudioOMB}></audio>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mars