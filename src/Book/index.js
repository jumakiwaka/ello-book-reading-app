import React, { useEffect, useRef, useState } from 'react';
import Page from './Page';
import Loader from '../App/Loader';
import Footer from '../App/Footer';
import getBook from '../utils/api';
import './Book.css';

function Book() {
  const subscribedPromises = useRef([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState([]);
  const [startPageNum, setStartPageNum] = useState(0);
  const [endPageNum, setEndPageNum] = useState(2);

  function handleNextPage() {
    if (endPageNum < pages.length) {
      setEndPageNum(endPageNum + 2);
      setStartPageNum(startPageNum + 2);
    }
  }

  function handlePreviousPage() {
    if (startPageNum >= 2) {
      setEndPageNum(endPageNum - 2);
      setStartPageNum(startPageNum - 2);
    }
  }

  function fetchBook() {
    setIsLoading(true);
    const bookPromise = getBook();
    bookPromise
      .then((res) => {
        setPages([...res.data.data.book.pages]);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchBook();
    const promises = subscribedPromises.current;
    return () => {
      promises.forEach((promise) => {
        promise.cancel();
      });
    };
  }, []);

  if (isLoading) {
    return (
      <div className="book">
        <Loader />
      </div>
    );
  }
  if (!pages) return <div></div>;
  return (
    <>
      <div className="book">
        {pages.slice(startPageNum, endPageNum).map((page, index) => (
          <Page page={page} key={index} />
        ))}
      </div>
      <Footer
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        isNextPageActive={endPageNum < pages.length}
        isPreviousPageActive={startPageNum >= 2}
      />
    </>
  );
}

export default Book;
