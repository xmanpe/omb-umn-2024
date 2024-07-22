import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './modeFokus.scss'

// import audio
import AudioOMB from '../../../audio/MarsOMB.mp3';

const ModeFokusOMB = () => {
    return (
        <div className="mode-fokus">
            {/* <h1 className='focus-title'>OMB</h1> */}
            <div className="audio">
                <ReactAudioPlayer
                    src={AudioOMB}
                    controls
                />
            </div>
            <div className='the-lyrics'>
                <p className='each-line'>
                    Kamilah anak bangsa <br />
                    <i>We are the children of the nation</i>
                </p>
                <p className='each-line'>
                    Prestasi nusantara <br />
                    <i>Archipelago Achievement</i>
                </p>
                <p className='each-line'>
                    Merangkai makna bersumpah setia sebagai manusia <br />
                    <i>Arranging the meaning of swearing allegiance as a human being</i>
                </p>
                <p className='each-line'>
                    Menjunjung tinggi ilmu sikap dan perilaku <br />
                    <i>Upholding knowledge, attitude, and behavior</i>
                </p>
                <p className='each-line'>
                    Bersatu dalam semangat baru <br />
                    <i>United in a new spirit</i>
                </p>
                <p className='each-line'>
                    Sampai di akhir <br />
                    <i>Until the end</i>
                </p>
                <p className='each-line'>
                    Sampai di akhir <br />
                    <i>Until the end</i>
                </p>
                <p className='each-line'>
                    Sampai di akhir waktu <br />
                    <i>Until the end of time</i>
                </p>
            </div>
        </div>
    );
}
 
export default ModeFokusOMB;