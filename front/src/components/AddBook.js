import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import {getAuthors} from './queries/Queries'



class AddBook extends Component {
    displayAuthors(){
        var data = this.props.data
        if(data.loading){
            return <option disabled>loading....</option>
        }else{
            return data.authors.map(author=>{
                return (<option key={author.id}>{author.name}</option>)
            })
        }
    }
   
  render() {
      
    return (
      <div >
         <form >
                <div >
                    <label>Book name:</label>
                    <input type="text" />
                </div>
                <div >
                    <label>Genre:</label>
                    <input type="text" />
                </div>
                <div >
                    <label>Author:</label>
                    <select >
                        <option >Select author</option>
                            {this.displayAuthors()}
                    </select>
                </div>
                <button>+</button>

            </form>
      </div>
    );
  }
}

export default graphql(getAuthors)(AddBook);
