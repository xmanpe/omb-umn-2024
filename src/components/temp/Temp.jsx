import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom';
import './Temp.scss';


const Temp = () => {
    const [sliderState,setSliderState] = useState(0);
    const slides = ["Landasan Pelaksanaan","Maksud Pelaksanaan","Tujuan Pelaksanaan"];
    // const contentList = () =>{
    //     return 
    // }
    return (
            <>
            <section className='wrapper-content'>
                <div className='slider-wrapper'>
                    <div className='slider'>
                        {slides.map((slides,index)=>(
                            <button key={index}
                                    className={`slider-button ${sliderState === index ? 'active' : ''}`}
                                    onClick={() => setSliderState(index)}>
                                {slides}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='list-wrapper'>
                    <div className='list'>
                        {listPelaksanaan.map((listPelaksanaan, index) => (
                            <div className='each_list' key={index}>
                                <p className='number'>{listPelaksanaan.number}</p>
                                <p className='text'>{listPelaksanaan.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            </>
    )
}
export default Temp;