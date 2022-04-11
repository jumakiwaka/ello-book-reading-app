import React from 'react';
import './Footer.css';

function Footer({
  handleNextPage,
  handlePreviousPage,
  isNextPageActive,
  isPreviousPageActive,
}) {
  return (
    <div className="footer">
      <div className="prev-btn">
        <button
          className="btn"
          onClick={handlePreviousPage}
          disabled={!isPreviousPageActive}
        >
          {' '}
          {'<'}Previous page
        </button>
      </div>
      <div className="next-btn">
        <button
          className="btn"
          onClick={handleNextPage}
          disabled={!isNextPageActive}
        >
          {' '}
          Next page{'>'}
        </button>
      </div>
    </div>
  );
}

export default Footer;
