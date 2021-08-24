import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./book.component";
import Loader from "./loader.component";
import * as bookApi from "../BooksAPI";

class Search extends Component {
  state = {
    searchText: "",
    books: [],
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchText } = this.state;
    if (searchText !== prevState.searchText && searchText && searchText.trim) {
      this.setState({ loading: true });
      bookApi.search(this.state.searchText).then((res) => {
        const { error } = res;
        if (!error) {
          this.setState({ books: res, loading: false });
        } else {
          this.setState({ books: [], loading: false });
        }
      });
    }
  }
  render() {
    const { books: myBooks, onShelfChange } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchText}
              onChange={(e) => this.setState({ searchText: e.target.value })}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {/* using and - or operator to choose which component to render */}
            {(this.state.loading && <Loader />) ||
              this.state.books
                .map((searchBook) => {
                  // using forEach to replace searched books with my Books
                  myBooks.forEach((myBook) => {
                    if (searchBook.id === myBook.id) searchBook = myBook;
                  });
                  return searchBook;
                })
                .map((book) => {
                  return (
                    <Book
                      key={book.id}
                      book={book}
                      onShelfChange={onShelfChange}
                    />
                  );
                })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
