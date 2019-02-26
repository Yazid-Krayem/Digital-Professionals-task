import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost"
import{ApolloProvider} from 'react-apollo'

import BookList from './components/BookList';

const client = new ApolloClient({
  uri:"http://localhost:8080/graphql"
})

class App extends Component {
  
  render() { 
    console.log(this.client)
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <p>front</p>
        <BookList />
        <hr />
        <hr />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
