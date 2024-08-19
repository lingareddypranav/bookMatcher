'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import BookSwipe from '../components/bookSwipe';
import { getRandomBook } from '../services/bookService';
import '../styles/bookSwipe.css';

export default function Home() {
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    const randomKeywords = ['fiction', 'adventure', 'mystery', 'romance', 'fantasy', 'history'];
    const randomKeyword = randomKeywords[Math.floor(Math.random() * randomKeywords.length)];
    const startIndex = Math.floor(Math.random() * 100);
    const bookData = await getRandomBook(randomKeyword, startIndex);
    setBook(bookData);
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const handleSwipe = async (direction) => {
    console.log(`You swiped ${direction} on ${book.title}`);
    await fetchBook();
  };

  return (
    <div>
      <h1>Welcome to Book Matcher</h1>
      <Link href="/signin">Sign In</Link>

      <div className="App">
        {book ? (
          <BookSwipe book={book} onSwipe={handleSwipe} />
        ) : (
          <p>Loading book...</p>
        )}
      </div>
    </div>
  );
}