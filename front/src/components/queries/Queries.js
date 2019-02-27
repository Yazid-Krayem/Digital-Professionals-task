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

export{getBooksList,getAuthors}