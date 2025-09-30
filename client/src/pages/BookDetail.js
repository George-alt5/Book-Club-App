import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../App.css';

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Static book data
    const staticBooks = [
      { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", year: 1925, pages: 180 },
      { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", year: 1960, pages: 281 },
      { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", year: 1949, pages: 328 },
      { id: 4, title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", year: 1813, pages: 279 },
      { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", year: 1951, pages: 277 },
    ];
    const foundBook = staticBooks.find((book) => book.id === parseInt(id));
    setBook(foundBook);
  }, [id]);


  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="page-title">{book.title}</h1>
      <div className="detail-info">
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Year:</strong> {book.year}</p>
        <p><strong>Pages:</strong> {book.pages}</p>
      </div>
      <div className="detail-actions">
        <Link to="/books">Back to Books</Link>
      </div>
    </div>
  );
}

export default BookDetail;
