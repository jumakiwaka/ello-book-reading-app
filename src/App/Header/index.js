import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <h2>
        <Link to={{ pathname: '/' }} className="link-txt">
          Ello
        </Link>{' '}
        Book Reading App
      </h2>
    </div>
  );
}

export default Header;
