import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost"
import{ApolloProvider} from 'react-apollo'

import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';
import AuthorsList from './components/AuthorsList';

const client = new ApolloClient({
  uri:"http://localhost:8080/graphql"
})

class App extends Component {
  
  render() { 
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <p>front</p>
        <div className="books">
        <BookList />
        </div>
        <hr />
        <hr />
        <AddBook />
        <hr />
        <br />
        <p>Add Author</p>
        <AddAuthor/>
        <hr />
        <br />
        <h3>Authors List</h3>
        <AuthorsList />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
