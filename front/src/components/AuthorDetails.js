import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,getAuthor,deleteBookQuery} from './queries/Queries'



class AuthorDetails extends Component {

  deleteBook(id){
    this.props.deleted({
      variables: {
         id:this.props.authorId
      },
      refetchQueries: [{ query: getAuthors }]

  });
    }
   displayAuthorDetails(){
    const {author} = this.props.data
    
    if(author){
        return(
            <div>
                <h3>Name:  {author.name}</h3>
                <p>age:  {author.age}</p>
                <button onClick={this.deleteBook.bind(this)}>X</button>
            </div>
        )
    }
   }
    
  render() {
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
                id:props.authorId
            }
        }
    }
}),
graphql(deleteBookQuery,{name:'deleted'})
)(AuthorDetails);
