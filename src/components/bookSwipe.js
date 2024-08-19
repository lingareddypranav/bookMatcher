import React from 'react';
import { AiOutlineHeart, AiOutlineClose } from 'react-icons/ai'; // Importing icons
import '../styles/bookSwipe.css';

const BookSwipe = ({ book, onSwipe }) => {
  return (
    <div className="book-swipe-container">
      <div className="book-content">
        <Image src={book.cover} alt={book.title} className="book-cover" />
        <div className="book-details">
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.genre}</p>
        </div>
      </div>
      <div className="swipe-buttons">
        <button onClick={() => onSwipe('dislike')} className="dislike-button">
          <AiOutlineClose />
        </button>
        <button onClick={() => onSwipe('like')} className="like-button">
          <AiOutlineHeart />
        </button>
      </div>
    </div>
  );
};

export default BookSwipe;