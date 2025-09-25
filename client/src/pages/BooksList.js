import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";
import '../App.css';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Static book data
    const staticBooks = [
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, pages: 180 },
      { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, pages: 281 },
      { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, pages: 328 },
      { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813, pages: 279 },
      { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, pages: 277 },
    ];
    setBooks(staticBooks);
  }, []);

  return (
    <div>
      <h1 className="page-title">Books</h1>
      <div className="books-grid">
        {books.map((book) => (
          <Link key={book.id} to={`/books/${book.id}`} className="book-link">
            <BookCard book={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BooksList;
