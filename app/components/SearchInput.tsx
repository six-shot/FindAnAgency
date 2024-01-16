// SearchInput.js
import React from "react";

interface SearchInputProps {
  onSearchInputChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchInputChange }) => {
  return (
    <div className="searchInput_Container">
      <input
        id="searchInput"
        type="text"
        placeholder="Search here..."
        onChange={(event) => {
          onSearchInputChange(event.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
