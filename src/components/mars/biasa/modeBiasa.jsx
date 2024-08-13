import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './modeBiasa.scss';

// Import audio
import AudioOMB from '../../../audio/MarsOMB.mp3';
import AudioUMN from '../../../audio/MarsUMN.mp3';

const ModeBiasa = () => {
    return (
        <div className="mode-biasa">
            <div className="mars">
                <div className='top-part'>
                    <h3 className='mars-title'>OMB</h3>
                    <p className="lirik">
                        Kamilah anak bangsa,<br />
                        Prestasi nusantara,<br />
                        Merangkai makna bersumpah setia sebagai manusia,<br />
                        Menjunjung tinggi ilmu sikap dan perilaku,<br />
                        Bersatu dalam semangat baru,<br />
                        Sampai di akhir,<br />
                        Sampai di akhir,<br />
                        Sampai di akhir waktu.<br />
                    </p>
                </div>
                <b className="info-mars">Dinyanyikan 1x dengan berdiri tegap, bertepuk tangan dengan tempo ¾</b>
                <div className="audio">
                    <ReactAudioPlayer
                    src={AudioOMB}
                    controls
                    />
                </div>
            </div>
            <div className="mars">
                <div className='top-part'>
                    <h3 className='mars-title'>UMN</h3>
                    <p className="lirik">
                        Universitas Multimedia Nusantara,<br />
                        Majukan ilmu dan teknologi bagi nusa bangsa,<br />
                        Universitas Multimedia Nusantara,<br />
                        Ciptakan profesional muda dan wirausaha,<br />
                        Baktikan karyaku kepada bangsaku melalui tridharma,<br />
                        Merintis langkahku menuju suksesku melalui almamaterku,<br />
                        Universitas Multimedia Nusantara,<br />
                        Demi kejayaan bangsa Indonesia.<br />
                    </p>
                </div>
                <b className="info-mars">Dinyanyikan 2x dengan posisi berdiri tegap dan tangan kanan
                    diletakkan di dada sebelah kiri dengan telapak tangan dikepal</b>
                <div className="audio">
                    <ReactAudioPlayer
                    src={AudioUMN}
                    controls
                    />
                </div>
            </div>
        </div>
    );
}
 
export default ModeBiasa;