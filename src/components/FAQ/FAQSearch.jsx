import React from "react";

const FAQSearch = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="faq-search">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Use Keywords to Search"
        className="faq-search-input"
      />
    </div>
  );
};

export default FAQSearch;
