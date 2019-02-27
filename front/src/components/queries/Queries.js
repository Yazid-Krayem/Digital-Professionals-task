import { gql } from 'apollo-boost';

const getBooksList= gql`
    {
        books{
            id
            name
            genre
        }
    }

`
const getAuthors =gql`
{
  
    authors{
      name
      id
    
    }
  }
`
const addBookMutation = gql`
    mutation addBook($name: String!, $genre: String!, $authourId: ID!){
        addBook(name: $name, genre: $genre, authourId: $authourId){
            name
            id
        }
    }
`;
const getBookQuery =gql`

query($id:ID){
  book(id:$id){
    name
    genre
    author{
      name
      age
    }
  }
}
`
export{getBooksList,getAuthors,addBookMutation,getBookQuery}