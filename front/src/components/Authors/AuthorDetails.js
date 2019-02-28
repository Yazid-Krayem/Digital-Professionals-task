import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,getAuthor, deleteAuthorQuery} from '../queries/Queries'
import EditAthor from './EditAthor';



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
                  <EditAthor 
                  id={author.id}
                  name={author.name}
                  age={author.age}
                  />
                
            </div>
        )
    }
   }
    
  render() {
    console.log(this.props)
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
graphql(deleteAuthorQuery,{name:'deleteAuthor'})
)(AuthorDetails);
