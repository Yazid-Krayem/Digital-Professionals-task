import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {getAuthors} from './queries/Queries'
import AuthorDetails from './AuthorDetails';




class AuthorsList extends Component {
    state={
        selected:null,
        
    }
   
    
    displayAuthors(){

        var data = this.props.data
        console.log(data)
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
      </div>
    );
  }
}

export default graphql(getAuthors)(AuthorsList);
