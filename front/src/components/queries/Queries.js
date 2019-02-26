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

export{getBooksList}