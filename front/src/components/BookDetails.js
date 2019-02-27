import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {getBookQuery} from './queries/Queries'



class BookDetails extends Component {

   displayBookDetails(){
    const {book} = this.props.data
    if(book){
        return(
            <div>
                <h3>{book.name}</h3>
                <p>{book.genre}</p>
                <p>{book.author.name}</p>
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

export default graphql(getBookQuery,{
    options:(props)=>{
        return{
            variables:{
                id:props.bookId
            }
        }
    }
})(BookDetails);
