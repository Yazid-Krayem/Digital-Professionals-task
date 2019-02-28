import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getBookQuery,deleteBookQuery,getBooksList,updateBookQuery} from '../queries/Queries'
import BookUpdate from './BookUpdate';



class BookDetails extends Component {

  deleteBook(id){
    this.props.deleted({
      variables: {
         id:this.props.bookId
      },
      refetchQueries: [{ query: getBooksList }]

  });
    }
   displayBookDetails(){
    const {book} = this.props.data
    
    if(book){
        return(
            <div>
                <h3>Name:  {book.name}</h3>
                <p>Genre:  {book.genre}</p>
                <p>Author: {book.author.name}</p>
                <button onClick={this.deleteBook.bind(this)}>X</button>
                <BookUpdate 
                id={this.props.bookId}
                name={book.name}
                genre={book.genre}
                author={book.author.name}
                />
            </div>
        )
    }
   }
    
  render() {
    return (
      <div >
        
        {this.displayBookDetails()}
      </div>
    );
  }
}

export default compose(
graphql(getBookQuery,{
    options:(props)=>{
        return{
            variables:{
                id:props.bookId
            }
        }
    }
}),
graphql(deleteBookQuery,{name:'deleted'}),
graphql(updateBookQuery,{name:'updateBook'}),
)(BookDetails);
