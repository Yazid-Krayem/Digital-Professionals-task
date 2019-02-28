import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import {updateBookQuery,getBooksList} from '../queries/Queries'



class BookUpdate extends Component {
  state={
    name:'',
    genre:'',
    test:''
  }

  onSubmit(e){
    e.preventDefault()
    this.props.updateBook({
      variables: {
         id:this.props.id,
         name:this.state.name,
         genre:this.state.genre
      },
      refetchQueries: [{ query: getBooksList }]

  });

  }
    
  render() {
    console.log(this.state.test)
    return (
      <div >
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>name</label>
          <input 
          onChange={ (e) => this.setState({ name: (e.target.value) }) }/>

          <br />

          <label>genre</label>
          <input  
          onChange={ (e) => this.setState({ genre:(e.target.value) }) }
          />
          
          <button className="warning">Update </button>
        </form>
 
     </div>
    );
  }
}

export default compose(
graphql(updateBookQuery,{name:'updateBook'}),
graphql(getBooksList))(BookUpdate);
