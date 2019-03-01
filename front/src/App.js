import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost"
import{ApolloProvider} from 'react-apollo'

import BookList from './components/Books/BookList';
import AddBook from './components/Books/AddBook';
import AddAuthor from './components/Authors/AddAuthor';
import AuthorsList from './components/Authors/AuthorsList';
import Background from './back.jpeg'

//back-end
const client = new ApolloClient({
  uri:"http://localhost:8080/graphql"
})

class App extends Component {
  
  render() { 
    return (
      <ApolloProvider client={client}>

      <div className="home" style={{ backgroundImage: `url(${Background})`,backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
                  <div >

      <br />,
      <br />
      <br />
        <div className="books">
        <BookList />
        </div>
       
        <div className="addBooks">
        <AddBook />
        </div>
        <hr />
        <br />
        <div className="authorsList">

        <h3>Authors List</h3>
        <AuthorsList />
        </div>
        <div className="addAuthor">
        <AddAuthor/>
        </div>
        <br />
        </div>
        </div>
       
      </ApolloProvider>
    );
  }
}

export default App;
