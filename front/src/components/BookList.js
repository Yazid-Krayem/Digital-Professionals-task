import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {getBooksList} from './queries/Queries'
import BookDetails from './BookDetails';
import DeleteBooks from './DeleteBooks';



class BookList extends Component {
    state={
        selected:null,
        deleted:'',
    }
   
    
    displayBooks(){

        var data = this.props.data
        if(data.loading){
            return <div>loading....</div>
        }else{
            return data.books.map(book=>{
                return (<button key={book.id} onClick={(e)=>{this.setState({selected:book.id})}} >
                
                {book.name}
                </button>)
            })
        }
        
    }
  render() {
    return (
      <div >
         
              {this.displayBooks()}
          
          <button >details</button>
        <h3>BookDetails</h3>
        <BookDetails 
        bookId={this.state.selected}
        />
       <DeleteBooks 
       deleted={this.state.deleted}
       />
      </div>
    );
  }
}

export default graphql(getBooksList)(BookList);
