import React from 'react';

const Search = ({ value, onChange, children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={children}
    />
    <button type="submit">{children}</button>
  </form>
);

export default Search;
