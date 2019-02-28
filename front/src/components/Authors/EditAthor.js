import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo'
import {updateAuthorQuery,getAuthors} from '../queries/Queries'
import { toast,ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


class EditAuthor extends Component {
  state={
    name:null,
    age:null
  }

  onSubmit(e){
    e.preventDefault()
    const {name,age}=this.state
    const{id} = this.props
    toast('test')

    if(name&&age&&id==null){
      toast.error('error')
    }else{
    this.props.update({
      variables: {
         id:this.props.id,
         name:this.state.name,
         age:this.state.age
      },
      refetchQueries: [{ query: getAuthors }]
    
  });
  toast('updated')
    }
  }
    
  render() {
    console.log(this.props)
    return (
      <div >
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>name</label>
          <input defaultValue={this.props.name}
          onChange={ (e) => this.setState({ name:e.target.value}) }/>

          <br />

          <label>age</label>
          <input defaultValue={this.props.age} 
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
