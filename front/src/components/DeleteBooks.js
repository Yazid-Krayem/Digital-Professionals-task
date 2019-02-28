import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {deleteBookQuery} from './queries/Queries'



class BookDetails extends Component {

   deleteBook(e){
    const {deleted}=this.props
    if(deleted){
        
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

export default graphql(deleteBookQuery)(BookDetails);
