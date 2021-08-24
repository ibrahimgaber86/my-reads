import React from "react";
import Search from "./components/search.component";
import BookList from "./components/booksList.component";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true,
  };
  // load books from server
  componentDidMount() {
    this.loading = true;
    BooksAPI.getAll().then((books) => this.setState({ books, loading: false }));
  }
  // update shelf state
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).catch((err) => {
      console.log(err);
    });
    const filteredBooks = this.state.books.filter(({ id }) => id !== book.id);
    if (shelf === "none") {
      this.setState({ books: filteredBooks });
    } else {
      book.shelf = shelf;
      console.log(book);
      this.setState({ books: [...filteredBooks, book] });
    }
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/search">
              <Search
                onShelfChange={this.changeShelf}
                books={this.state.books}
              />
            </Route>
            <Route path="/">
              <BookList {...this.state} onShelfChange={this.changeShelf} />
            </Route>
          </Switch>
          <div className="open-search">
            <Link to="/search" />
          </div>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
