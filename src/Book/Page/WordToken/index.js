import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './WordToken.css';

function WordToken(props) {
  const params = useParams();
  const { token } = params;
  return (
    <>
      <div className="navigation">
        <Link to={'/'} className="link-txt">
          {'<'} Back to book
        </Link>
      </div>
      <div className="wordToken">{token}</div>
    </>
  );
}

export default WordToken;
