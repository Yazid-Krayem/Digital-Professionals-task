const graphql = require('graphql')
const _ = require('lodash')
//models
const Book = require('../models/books')
const Author = require('../models/author')


const{GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLSchema,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
    }= graphql


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
                    return Author.findById(parent.authourId)
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
                    return Book.find({authourId:parent.id})
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
                    return Book.findById(args.id);
                }
            },
            author: {
                type: AuthorType,
                args: { id: { type: GraphQLID } },
                resolve(parent, args){
                    return Author.findById(args.id);
                }
            },
            books:{
                type:new GraphQLList(BookType),
                resolve(parent,args){
                    return Book.find({})
                }
            },
            authors:{
                type:new GraphQLList(AuthorType),
                resolve(parent,args){
                    return Author.find({})
                }
            },
            
        }
    });

    // Mutation 
    const Mutation = new GraphQLObjectType({
        name:'Mutation',
        fields:{
            addAuthor:{
                type:AuthorType,
                args:{
                    name:{type:new GraphQLNonNull(GraphQLString)},
                    age:{type:new GraphQLNonNull(GraphQLInt)}
                },
                resolve(parent,args){
                    let author = new Author({
                        name:args.name,
                        age:args.age
                    })
                     return author.save()
                }
            },
            addBook:{
                type:BookType,
                args:{
                    name:{type:new GraphQLNonNull(GraphQLString)},
                    genre:{type:new GraphQLNonNull(GraphQLString)},
                    authourId:{type:new GraphQLNonNull(GraphQLID)}
                },
                resolve(parent,args){
                    let book = new Book({
                        name:args.name,
                        genre:args.genre,
                        authourId:args.authourId
                    })
                    return book.save()
                }
            },
            deleteBook:{
                type:BookType,
                args:{
                    id:{type:new GraphQLNonNull(GraphQLID)},
                   
                },
                resolve: async(parent, args)=> {
                    const deleteBook = await Book.findByIdAndRemove(args.id)
                    if (!deleteBook) {
                      throw new Error('error')
                    }
                    return deleteBook;
                  }
                
                },
                updateBook:{
                    type:BookType,
                    args:{
                        id:{type: new GraphQLNonNull(GraphQLID)},
                        name: { type: new GraphQLNonNull(GraphQLString) },
                        genre: { type: new GraphQLNonNull(GraphQLString) },
                    },
                    resolve: async(parent, args) =>{
                        const UpdatedBook = await Book.findByIdAndUpdate(args.id,args);
                        if (!UpdatedBook) {
                          throw new Error('Error')
                        }
                        return UpdatedBook;
                    }
                },
                deleteAuthor:{
                    type:AuthorType,
                    args:{
                        id:{type:new GraphQLNonNull(GraphQLID)},
                       
                    },
                    resolve: async(parent, args)=> {
                        const deleteBook = await Book.deleteMany({authourId: args.id})
                        const deleteAuthor = await Author.findByIdAndRemove(args.id)

                        if (!deleteAuthor) {
                          throw new Error('error')
                        }
                        return deleteAuthor, deleteBook;
                      }
                    
                    },
                    updateAuthor:{
                        type:AuthorType,
                        args:{
                            id:{type: new GraphQLNonNull(GraphQLID)},
                            name: { type: new GraphQLNonNull(GraphQLString) },
                            age: { type: new GraphQLNonNull(GraphQLInt) },
                            
                        },
                        resolve: async(parent, args) =>{
                            const updateAuthor = await Author.findByIdAndUpdate(args.id,args);
                            if (!updateAuthor) {
                              throw new Error('Error')
                            }
                            return updateAuthor;
                        }
                    },
                
        }
    })
    
    module.exports = new GraphQLSchema({
        query: RootQuery,
        mutation:Mutation
    });