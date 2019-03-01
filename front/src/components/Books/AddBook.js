import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,addBookMutation,getBooksList} from '../queries/Queries'



class AddBook extends Component {

    state={
        name:'',
        genre:'',
        authourId:''
    }
    displayAuthors(){
        var data = this.props.getAuthors
        if(data.loading){
            return <option disabled>loading....</option>
        }else{
            return data.authors.map(author=>{
                return (<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }
    onSubmit(e){
        e.preventDefault()
        this.props.addBookMutation({
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authourId: this.state.authourId
            },
            refetchQueries: [{ query: getBooksList }]

        });
    }
   
  render() {
    return (
      <div >
                 <form  onSubmit={ this.onSubmit.bind(this) }  style={{color:'white'}}>
                <div >
                    <label>Book name:</label>
                    <input style={{color:'black'}} type="text" onChange={ (e) => {this.setState({ name: e.target.value })} } />
                </div>
                <div >
                    <label>Genre:</label>
                    <input style={{color:'black'}} type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div >
                    <label>Author:</label>
                    <select style={{color:'black'}} onChange={ (e) => {this.setState({ authourId: e.target.value })} } >
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                <button >ADD Book</button>
            </form> 
      </div>
    );
  }
}

export default compose(
    graphql(getAuthors, { name: "getAuthors" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);