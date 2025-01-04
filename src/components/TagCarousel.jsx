import React from "react";
import Dropdown from "react-dropdown-select";

const TagCarousel = ({ options, onChange, selectedValue }) => {
  const customStyles = {
    dropdownGap: 0,
    transition: "all 0.2s ease",
    fontSize: "1.1rem",
    color: "#fff",
    backgroundColor: "var(--primary)",
    border: "none",
    borderRadius: "10px",
    padding: "0.5rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    margin: "1rem 0",
  };

  return (
    <Dropdown
      className="carousel"
      options={options}
      values={selectedValue}
      searchable={false}
      onChange={(selectedOptions) => onChange(selectedOptions)}
      style={customStyles}
      dropdownPosition="auto"
      dropdownGap={5}
      animation={300}
      placeholder="Select a location"
    />
  );
};

export default TagCarousel;