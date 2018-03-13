import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Articles from Hacker News</h1>
      <h3 style={{ textAlign: 'center', color: 'white' }}>
        Used API: https://hn.algolia.com/api
      </h3>
    </div>
  );
};

export default Header;
