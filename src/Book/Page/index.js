import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';

function Page({ page }) {
  const { content } = page;
  const { tokens } = page;
  console.log(content, content.split(' '), tokens);
  return (
    <div className="page">
      {content &&
        content.split(' ').map((word, index) => (
          <span className="word" key={index}>
            <Link
              to={{ pathname: `/word-token/${tokens[index]?.value}` }}
              className="link-txt"
            >
              {word}
            </Link>{' '}
          </span>
        ))}
    </div>
  );
}

export default Page;
