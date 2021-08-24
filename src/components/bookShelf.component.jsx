import React from "react";
import Book from "./book.component";
import Loader from "./loader.component";

function BookShelf({ title, books, filter, loading, onShelfChange }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {(loading && <Loader />) ||
            books
              .filter((book) => book.shelf === filter)
              .map((b) => (
                <Book key={b.id} book={b} onShelfChange={onShelfChange} />
              ))}
        </ol>
      </div>
    </div>
  );
}

export default BookShelf;
