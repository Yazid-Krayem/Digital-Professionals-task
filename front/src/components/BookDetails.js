import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getBookQuery,deleteBookQuery,getBooksList} from './queries/Queries'



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
            </div>
        )
    }
   }
    
  render() {
    console.log(this.props)
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
graphql(deleteBookQuery,{name:'deleted'})
)(BookDetails);
