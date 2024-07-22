import React, { useState, useEffect } from "react";
import "./Faq.scss";
import DaftarFaq from "./DaftarFaq";
import ArrowUp from "../../images/Arrow/ArrowUp.svg";
import ArrowDropdown from "../../images/Arrow/ArrowDropdown.svg";
import Up from "../../images/icons/Up 2.svg";
import Down from "../../images/icons/Down 2.svg";

const FaqItem = ({ question, answer, number }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq_content ${isOpen ? "open" : ""}`} onClick={toggleFaq}>
      <div className="faq_question">
        <p className="number_faq">{number}</p>
        <p className="text_faq">{question}</p>
        <img src={isOpen ? Up : Down} alt="arrow" />
      </div>
      {isOpen && (
        <>
          <hr className="faq_separator" />
          <div
            className="faq_answer"
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        </>
      )}
    </div>
  );
};

const Faq = () => {
  const [sliderState, setSliderState] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQ items based on the search query
  const filteredFaqs = DaftarFaq["daftar-faq-omb"].filter((item) =>
    item.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const handleDropdownClick = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };
  const handleUserClick = (index) => {
    setShowMobileDropdown(!showMobileDropdown);
    setSliderState(index);
  };

  // Optional: Update the sliderState if filtered FAQs do not match the current slider
  useEffect(() => {
    if (
      filteredFaqs.length > 0 &&
      !filteredFaqs.some((item) => item.tipe.includes(sliderState))
    ) {
      setSliderState(filteredFaqs[0].tipe[0]);
    }
  }, [filteredFaqs, sliderState]);

  const slides = [
    "Keikutsertaan",
    "Peraturan",
    "Atribut",
    "Orang Tua",
    "Lain-Lain",
  ];

  return (
    <section className="faq_section">
      <div className="faq_title">
        <h1>FAQ</h1>
      </div>
      <div className="note-search">
        <div className="search_wrapper">
          <input
            type="text"
            placeholder="Temukan pertanyaan dengan kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="slider">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`slider-button ${sliderState === index ? "active" : ""}`}
            onClick={() => setSliderState(index)}
          >
            {slide}
          </button>
        ))}
      </div>
      <div className="slider-wrapper-mobile">
        <div className="slider-mobile">
          {slides.map(
            (slides, index) =>
              sliderState === index && (
                <button
                  key={index}
                  className="slider-button-mobile-active"
                  onClick={handleDropdownClick}
                >
                  {slides}
                  <img
                    className={`arrow ${!showMobileDropdown ? "up" : "down"}`}
                    src={ArrowDropdown}
                    alt="drop"
                  />
                </button>
              )
          )}
          {showMobileDropdown && (
            <div className="dropdown-wrapper">
              {slides.map(
                (slides, index) =>
                  sliderState !== index && (
                    <button
                      key={index}
                      className={`slider-button-mobile`}
                      onClick={() => handleUserClick(index)}
                    >
                      {slides}
                    </button>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="faq_content_wrapper">
        {filteredFaqs
          .filter((item) => item.tipe.includes(sliderState))
          .map((item, index) => (
            <FaqItem
              key={index}
              number={item.nomor}
              question={item.pertanyaan}
              answer={item.jawaban}
            />
          ))}
      </div>
    </section>
  );
};

export default Faq;
