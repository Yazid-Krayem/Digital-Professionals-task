const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

app.use(cors())
//database LINK
mongoose.connect("mongodb+srv://rakon1:123@cluster0-8apqr.mongodb.net/test?retryWrites=true")
mongoose.connection.once('open',()=>{console.log('connected')})
//router
app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}))


app.listen(8080,()=>{console.log('listening')})