import React, { useState } from 'react';
import { IoChevronDown } from 'react-icons/io5';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <IoChevronDown className="faq-icon" />
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        {answer}
      </div>
    </div>
  );
};

export default FAQItem;