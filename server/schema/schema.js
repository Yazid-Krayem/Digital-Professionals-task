const graphql = require('graphql')
const _ = require('lodash')
const{GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema
    }= graphql

    //dummy data
    var books = [
    {name:'book1',genre:"action",id:'1'},
    {name:'book2',genre:"action2",id:'2'},
    {name:'book3',genre:"action3",id:'3'}
    ]
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type:GraphQLID},
        name:{type:GraphQLString},
        genre:{type:GraphQLString}
    })
})
const RootQuery = new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLString}},
            resolve(parent,args){
                return _.find(books,args.id)
            }
        }
    }

})

module.exports = new GraphQLSchema({
    query:RootQuery
})