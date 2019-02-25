const graphql = require('graphql')
const _ = require('lodash')
const{GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList
    }= graphql

    //dummy data
    var books = [
    {name:'book1',genre:"action", id:'1',authourId:"1" },
    {name:'book2',genre:"action2",id:'2',authourId:"4" },
    {name:'book3',genre:"action3",id:'3',authourId:"3" }
    ]
    var authors=[
        {name:"Yazid",age:25,id:'1'},
        {name:"Diaa",age:25,id:'2'},
        {name:"Sako",age:22,id:'3'},
        {name:"Steve",age:20,id:'4'},
        {name:"Alex",age:25,id:'5'}
    ]
    //query for books
    const BookType = new GraphQLObjectType({
        name: 'Book',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            genre: { type: GraphQLString },
            author:{
                type: AuthorType,
                resolve(parent,args){
                    return _.find(authors,{id:parent.authourId})
                }
            }
        })
    });
    //query for authors
    const AuthorType = new GraphQLObjectType({
        name: 'Author',
        fields: ( ) => ({
            id: { type: GraphQLID },
            name: { type: GraphQLString },
            age: { type: GraphQLInt },
            books:{
                type: new GraphQLList(BookType),
                resolve(parent,args){
                    return _.filter(books,{authourId:parent.id})
                }
            }
        })
    });
    // the whole Data 
    const RootQuery = new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            book: {
                type: BookType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    // code to get data from db / other source
                    return _.find(books, { id: args.id });
                }
            },
            author: {
                type: AuthorType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    return _.find(authors, { id: args.id });
                }
            },
            books:{
                type:new GraphQLList(BookType),
                resolve(parent,args){
                    return books
                }
            },
            authors:{
                type:new GraphQLList(AuthorType),
                resolve(parent,args){
                    return authors
                }
            }
        }
    });
    
    module.exports = new GraphQLSchema({
        query: RootQuery
    });