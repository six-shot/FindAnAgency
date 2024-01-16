// SearchResultItem.js (unchanged from your provided code)
import React from "react";

interface SearchResultItemProps {
  name: string;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({ name }) => {
  return (
    <div className="w-full bg-white mt-2">
      <h5>{name}</h5>
    
    </div>
  );
};

export default SearchResultItem;
