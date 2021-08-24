import React from "react";
import BookShelfChanger from "./bookShelfChanger.component";
//some books come with out authors so i set default value for authors
function Book({ book, onShelfChange }) {
  const { title, authors = [], imageLinks } = book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            // some books come without imageLinks proprty
            backgroundImage: `url(${imageLinks && imageLinks.thumbnail})`,
          }}
        />
        <BookShelfChanger book={book} onShelfChange={onShelfChange} />
      </div>
      <div className="book-title">{title}</div>
      {/* authors come as an array with one or more author*/}
      {authors.map((author) => (
        <div key={author} className="book-authors">
          {author}
        </div>
      ))}
    </div>
  );
}

export default Book;
