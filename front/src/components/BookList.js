import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {getBooksList} from './queries/Queries'



class BookList extends Component {

    displayBooks(){
        var data = this.props.data
        if(data.loading){
            return <div>loading....</div>
        }else{
            return data.books.map(book=>{
                return (<li key={book.id}>{book.name}</li>)
            })
        }
    }
  render() {
      console.log(this.props)
    return (
      <div >
          <ul>
              {this.displayBooks()}
          </ul>
        
      </div>
    );
  }
}

export default graphql(getBooksList)(BookList);
