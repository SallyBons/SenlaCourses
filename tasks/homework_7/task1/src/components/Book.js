import React, { Component } from 'react';
import {books} from '../data';

class Book extends Component {
  render() {
    const {match} = this.props;
    const {params} = match;

    const book = books.find((book) => book.id === +params.id)
    return (
      <div>
        <img src={book.url} alt="book"/>
        <h2>{book.name}</h2>
        <p>{book.text}</p>
      </div>
    );
  }
}

export default Book;
