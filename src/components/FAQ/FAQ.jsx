import React, { useState } from 'react';
import FAQSearch from './FAQSearch';
import FAQList from './FAQList';
import { faqData } from './faqData';
import './FAQ.css';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our villa and services</p>
        </div>
        
        <FAQSearch 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        <FAQList faqs={filteredFAQs} />
      </div>
    </div>
  );
};

export default FAQ;