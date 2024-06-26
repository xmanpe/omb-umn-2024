import React from "react";
import "./ModalNilai.scss";

// import icons
import X from "../../images/Menu/Close_MD.svg";

const ModalNilai = ({ show, onClose, title, subtitle, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="close_button">
          <img src={X} alt="Close button" onClick={onClose} />
        </div>
        <div className="content_section">
          <div className="text">
            <div className="nilai_desc">
              <h3 className="modal_title">{title}</h3>
              <p className="modal_subtitle">{subtitle}</p>
              <p className="modal_content">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNilai;
