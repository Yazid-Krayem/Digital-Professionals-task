import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,getBooksList} from '../queries/Queries'
import AuthorDetails from './AuthorDetails';
import DeleteAuthor from './DeleteAuthor';




class AuthorsList extends Component {
    state={
        selected:null,
        deleted:null
        
    }
   
    
    displayAuthors(){

        var data = this.props.getAuthors
        if(data.loading){
            return <div>loading....</div>
        }else{
            return data.authors.map(author=>{
                return (<button key={author.id} onClick={(e)=>{this.setState({selected:author.id})}} >
                
                {author.name}
                </button>)
            })
        }
        
    }
  render() {
    // console.log('authorsList',this.props.getBooksList.books)
    return (
      <div >
         
              {this.displayAuthors()}
          
        {/* <BookDetails 
        bookId={this.state.selected}
        />
        
       <DeleteBooks 
       deleted={this.state.deleted}
       /> */}
       <AuthorDetails 
       authorId={this.state.selected}
       />
       <DeleteAuthor 
       deleted={this.state.deleted}
       books={this.props.getBooksList.books}
       authorId={this.props.getAuthors.id}
       />
       

      </div>
    );
  }
}

export default compose(
  graphql(getAuthors,{name:"getAuthors"}),
  graphql(getBooksList,{name:"getBooksList"}))(AuthorsList)

