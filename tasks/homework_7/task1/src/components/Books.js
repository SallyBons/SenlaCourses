import React from 'react';
import {Link} from 'react-router-dom';
import {books} from '../data';
import './styles.css';

const Books = () => (
  <div className="books-container">
    {books.map((book) => (
      <div key={book.id} className="book-item">
        <img
          src={book.url}
          alt={book.name}
          width="300"
          height="500"
        />
        <Link to={`/book/${book.id}`} className="book-link">{book.name}</Link>
      </div>
    ))}
  </div>
);

export default Books;
