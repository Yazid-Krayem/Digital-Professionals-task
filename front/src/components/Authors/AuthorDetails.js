import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,getAuthor, deleteAuthorQuery} from '../queries/Queries'



class AuthorDetails extends Component {

  deleteAuthor(id){

    this.props.deleteAuthor({
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
                <button onClick={this.deleteAuthor.bind(this)}>X</button>
            </div>
        )
    }
   }
    
  render() {
    console.log(this.props.data.variables)
    console.log('data',this.props)

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
graphql(deleteAuthorQuery,{name:'deleteAuthor'})
)(AuthorDetails);
