import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {getBooksList} from './queries/Queries'
import BookDetails from './BookDetails';



class BookList extends Component {
    state={
        selected:null
    }
    displayBooks(){
        var data = this.props.data
        if(data.loading){
            return <div>loading....</div>
        }else{
            return data.books.map(book=>{
                return (<li key={book.id}>
                <button onClick={(e)=>{this.setState({selected:book.id})}}>Details</button>
                {book.name}
                </li>)
            })
        }
    }
  render() {
    return (
      <div >
          <ul>
              {this.displayBooks()}
          </ul>
        <h3>BookDetails</h3>
        <BookDetails bookId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getBooksList)(BookList);
