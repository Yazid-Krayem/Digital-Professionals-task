import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {deleteAuthorQuery} from '../queries/Queries'



class BookDetails extends Component {

   deleteBook(e){
    const {deleteAuthor}=this.props
    if(deleteAuthor){
        
    }
   }
    
  render() {

    return (
            <div>
                {this.deleteBook()}
               
            </div>
          );
                    }
}

export default graphql(deleteAuthorQuery)(BookDetails);
