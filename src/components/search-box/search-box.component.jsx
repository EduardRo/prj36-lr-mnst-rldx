import React from 'react';
import './search-box.styles.css';

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div>
      Search
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
