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
`;
const deleteBookQuery = gql`
mutation($id:ID!){
  deleteBook(id:$id){
    id
  }
}
`
const AddAuthorQuery = gql`
mutation addAuthor($name: String!, $age: Int!){
  addAuthor(name: $name, age: $age,){
      name
      age
      id
  }
}

`
const getAuthor = gql`

query($id:ID){
  author(id:$id){
    name
    age
  }
}
`
export{getBooksList,getAuthors,addBookMutation,getBookQuery,deleteBookQuery,AddAuthorQuery,getAuthor}