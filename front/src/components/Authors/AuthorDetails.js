import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,getAuthor, deleteAuthorQuery,updateAuthorQuery, getBooksList} from '../queries/Queries'
import EditAthor from './EditAthor';

import Popup from "reactjs-popup";


class AuthorDetails extends Component {
  
  
  deleteAuthor(id){
    
    this.props.deleteAuthor({
      variables: {
         id:this.props.authorId
      },
      refetchQueries: [{ query: getAuthors },{query:getBooksList}]

  });
    }
   displayAuthorDetails(){
    const {author} = this.props.data
    
    if(author){
        return(
          <Popup trigger={<button> about: {author.name} </button>}position="right center" >

            <div style={{color:"black"}}>
                <h3>Name:  {author.name}</h3>
                <h4>age:  {author.age}</h4>
                <button className="error"onClick={this.deleteAuthor.bind(this)}>Delete</button>
                  <EditAthor 
                  id={this.props.authorId}
                  name={author.name}
                  age={author.age}
                  />
                
            </div>
            </Popup>

        )
    }
   }
    
  render() {
    const books = this.props.books.books;
   // const book = books.id
   if(books)
    console.log(books.id)

    return (
      <div >
        
        {this.displayAuthorDetails()}
        
      </div>
    );
  }
}

export default compose(
graphql(getAuthor,{
    options:(props)=>{
        return{
            variables:{
                id:props.authorId,
               
            }
        }
    }
}),
graphql(getBooksList,{name:"books"}),
graphql(deleteAuthorQuery,{name:'deleteAuthor'}),
graphql(updateAuthorQuery,{name:'update'})
)(AuthorDetails);
