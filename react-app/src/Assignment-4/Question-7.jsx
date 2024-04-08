// Design a search filter component that consists of an input field. As the user types into the input, use controlled components to filter a list of items displayed below. The list should dynamically update to show only items matching the search query.

import React, { useState } from "react";

const SearchFilterComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Fig",
    "Grape",
    "Kiwi",
    "Lemon",
    "Mango",
    "Orange",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
      <div className="search"> 
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </div>
      <div className="searchList">
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchFilterComponent;
