import React from "react";

function BookShelfChanger({ book, onShelfChange }) {
  return (
    <div className="book-shelf-changer">
      <select
        // to set default shelf value
        value={book.shelf || "none"}
        onChange={(e) => onShelfChange(book, e.target.value)}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookShelfChanger;
