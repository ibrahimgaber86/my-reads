import React from "react";
import BookShelf from "./bookShelf.component";

// set shelf states as object to avoid type errors
const shelfState = {
  CURRENTLY_READING: "currentlyReading",
  WANT_TO_READ: "wantToRead",
  READ: "read",
  NONE: "none",
};

function BookList({ books, loading, onShelfChange }) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            title="Currently Reading"
            filter={shelfState.CURRENTLY_READING}
            books={books}
            loading={loading}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            title="Want To Read"
            filter={shelfState.WANT_TO_READ}
            books={books}
            loading={loading}
            onShelfChange={onShelfChange}
          />
          <BookShelf
            title="Read"
            filter={shelfState.READ}
            books={books}
            loading={loading}
            onShelfChange={onShelfChange}
          />
        </div>
      </div>
    </div>
  );
}

export default BookList;
