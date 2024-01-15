// SearchResultItem.js (unchanged from your provided code)
import React from "react";

interface SearchResultItemProps {
  name: string;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ name }) => {
  return (
    <div className="template">
      <h5>{name}</h5>
      yes
    </div>
  );
};

export default SearchResultItem;
