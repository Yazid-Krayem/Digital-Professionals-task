import { gql } from 'apollo-boost';

const getBooksList= gql`
    {
        books{
            id
            name
            genre
            author{
              id
            }
        }
    }

`
const getAuthors =gql`
{
  
    authors{
      id
      name
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
    id
    name
    age
  }
}
`
const deleteAuthorQuery = gql`
mutation($id:ID!){
  deleteAuthor(id:$id){
    id
  }
}
`
const updateAuthorQuery = gql`
mutation($id:ID!,$name:String!,$age:Int!){
  updateAuthor(id:$id,name:$name,age:$age){
    name
    age
  }
}
`
const updateBookQuery = gql`
mutation($id:ID!,$name:String!,$genre:String!){
  updateBook(id:$id,name:$name,genre:$genre){
    name
    genre
  }
}
`
export{getBooksList,
        getAuthors,
        addBookMutation,
        getBookQuery,
        deleteBookQuery,
        AddAuthorQuery,
        getAuthor,
        deleteAuthorQuery,
        updateAuthorQuery,
        updateBookQuery}