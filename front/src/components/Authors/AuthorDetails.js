import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,getAuthor, deleteAuthorQuery,updateAuthorQuery} from '../queries/Queries'
import EditAthor from './EditAthor';

import Popup from "reactjs-popup";


class AuthorDetails extends Component {
  
  o
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
graphql(deleteAuthorQuery,{name:'deleteAuthor'}),
graphql(updateAuthorQuery,{name:'update'})
)(AuthorDetails);
