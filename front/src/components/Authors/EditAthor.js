import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {updateAuthorQuery} from '../queries/Queries'



class EditAuthor extends Component {

  
    
  render() {
      console.log(this.props)
    return (
      <div >
        
sss 
     </div>
    );
  }
}

export default 
graphql(updateAuthorQuery)(EditAuthor);
