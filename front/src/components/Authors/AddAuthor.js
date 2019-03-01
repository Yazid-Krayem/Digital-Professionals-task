import React, { Component } from 'react';
import { graphql,compose } from 'react-apollo'
import {getAuthors,AddAuthorQuery} from '../queries/Queries'



class AddBook extends Component {

    state={
        name:'',
        age:0
        
    }
    displayAuthors(){
        var data = this.props.getAuthors
        if(data.loading){
            return <option disabled>loading....</option>
        }else{
            return data.authors.map(author=>{
                return (<option key={author.id} value={author.id}>{author.name}-{author.age}</option>)
            })
        }
    }
    onSubmit(e){
        e.preventDefault()
        this.props.AddAuthorQuery({
            variables: {
                name: this.state.name,
                age: this.state.age,
            },
            refetchQueries: [{ query: getAuthors }]

        });
    }
   
  render() {
    return (
      <div >
                 <form  onSubmit={ this.onSubmit.bind(this) } >
                <div >
                    <h3>Add Author :</h3>
                    <label>Author name:</label>
                    <input type="text" onChange={ (e) => {this.setState({ name: e.target.value })} } style={{color:'black'}} />
                </div>
                <div >
                    <label>age:</label>
                    <input type="number"min="1" max="100" onChange={ (e) => this.setState({ age: parseFloat(e.target.value) }) } style={{color:'black'}}/>
                </div>
                
                <button>ADD Author</button>
            </form> 
      </div>
    );
  }
}

export default compose(
    graphql(getAuthors, { name: "getAuthors" }),
    graphql(AddAuthorQuery, { name: "AddAuthorQuery" })
)(AddBook);