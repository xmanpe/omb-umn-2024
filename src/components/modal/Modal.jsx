import React, { useState, useEffect } from 'react';
import X from '../../images/Menu/Close_MD.svg'
import './Modal.scss';
import Kembang from '../../images/supergrafis/kembang.svg'

const Modal = (props) => {
    return(
        <div className="modal-component">
            <div className="modal-component-content">
            <img className='kembang-judul' src={Kembang} alt="Supergrafis - kembang" />
                <div className='modal-button-close'>
                    <img src={X} alt="Close button" onClick={props.handleClose} />
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal;