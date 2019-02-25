const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const app = express()

//router
app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}))


app.listen(8080,()=>{console.log('listening')})