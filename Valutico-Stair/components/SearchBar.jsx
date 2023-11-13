import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search company..." />
      {/* Add search icon */}
    </div>
  );
}

export default SearchBar;
