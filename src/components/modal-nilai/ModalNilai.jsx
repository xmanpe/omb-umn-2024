import { useCallback, useState, useEffect } from 'react';
import "./ModalNilai.scss";

// import icons
import X from "../../images/Menu/Close_MD.svg";

const ModalNilai = ({ show, onClose, title, subtitle, content }) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  useEffect(() => {
    if (show) {
      setIsClosing(false);
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className={`modal-overlay ${isClosing ? 'fadeOut' : ''}`}>
      <div className={`modal-nilai ${isClosing ? 'fadeOutFromTop' : ''}`}>
        <div className="close_button">
          <img src={X} alt="Close button" onClick={handleClose} />
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