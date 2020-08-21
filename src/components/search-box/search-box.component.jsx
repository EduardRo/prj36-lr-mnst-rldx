import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      <span className='textSearch'>Search </span>
      <input
        className='search'
        placeholder={placeholder}
        type='search'
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
