import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import {updateAuthorQuery,getAuthors} from '../queries/Queries'

class EditAuthor extends Component {
  state={
    name:null,
    age:null
  }

  onSubmit(e){
    e.preventDefault()
   
    this.props.update({
      variables: {
         id:this.props.id,
         name:this.state.name,
         age:this.state.age
      },
      refetchQueries: [{ query: getAuthors }]
      
  });

  }
    
  render() {
    console.log(this.props)
    return (
      <div >
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>name</label>
          <input 
          onChange={ (e) => this.setState({ name:e.target.value}) }/>

          <br />

          <label>age</label>
          <input 
          onChange={ (e) => this.setState({ age: parseFloat(e.target.value) }) }
          />
          <button className="warning">update</button>
        </form>
     </div>
    );
  }
}

export default compose(
graphql(updateAuthorQuery,{name:'update'}),
graphql(getAuthors))(EditAuthor);
