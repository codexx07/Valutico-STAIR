import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search company..." />
      {/* Add search icon */}
      <img
        className="search-icon"
        src="../src/assets/Search.png" /* Replace with the path to your search tool image */
        alt="Search"
      />
    </div>
  );
}

export default SearchBar;
