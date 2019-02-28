import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {getAuthors} from '../queries/Queries'
import AuthorDetails from './AuthorDetails';
import DeleteAuthor from './DeleteAuthor';




class AuthorsList extends Component {
    state={
        selected:null,
        deleted:null
        
    }
   
    
    displayAuthors(){

        var data = this.props.data
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
    return (
      <div >
         
              {this.displayAuthors()}
          
          <button >details</button>
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
       deleted={this.state.deleted}/>
      </div>
    );
  }
}

export default graphql(getAuthors)(AuthorsList);
