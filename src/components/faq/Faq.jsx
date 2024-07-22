import React, { useState, useEffect } from "react";
import "./Faq.scss";
import DaftarFaq from "./DaftarFaq";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`faq_content ${isOpen ? "open" : ""}`} onClick={toggleFaq}>
      <div className="faq_question">
        <h3>{question}</h3>
      </div>
      {isOpen && (
        <div className="faq_answer" dangerouslySetInnerHTML={{ __html: answer }} />
      )}
    </div>
  );
};

const Faq = () => {
  const [sliderState, setSliderState] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FAQ items based on the search query
  const filteredFaqs = DaftarFaq["daftar-faq-omb"]
    .filter(item =>
      item.pertanyaan.toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Optional: Update the sliderState if filtered FAQs do not match the current slider
  useEffect(() => {
    if (filteredFaqs.length > 0 && !filteredFaqs.some(item => item.tipe.includes(sliderState))) {
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
        <h1>Frequently Asked Questions</h1>
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
      <div className="faq_content_wrapper">
        {filteredFaqs
          .filter(item => item.tipe.includes(sliderState))
          .map((item, index) => (
            <FaqItem
              key={index}
              question={item.pertanyaan}
              answer={item.jawaban}
            />
          ))}
      </div>
    </section>
  );
};

export default Faq;
