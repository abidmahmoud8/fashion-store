const graphql = require('graphql');
let CategoryModel = require('../models/CategoryModel');
let ItemModel = require('../models/ItemModel');
let UserModel = require('../models/UserModel');
let CommandModel = require('../models/CommandModel');
let CommandLineModel = require('../models/CommandLineModel');
let Item_CategoryModel = require('../models/Item_CategoryModel');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat
} = graphql;

// Define types

const CategoryType = new GraphQLObjectType({
    name: 'Category',
    fields: ( ) => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        level: { type: GraphQLInt },
        gendre: { type: GraphQLString },
        imageUrl: { type: GraphQLString },
        parent_id: { type: GraphQLID },
        parent: {
            type: CategoryType,
            resolve(parent, args){
                return CategoryModel.getById(parent.parent_id);
            }
        },
        children : {
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                return CategoryModel.getByMany(parent.id);
            }
        },
        items : {
            type: new GraphQLList(ItemType),
            resolve(parent, args){
                return ItemModel.getByCategory(parent.id);
            }

        }
    })
});

const ItemType = new GraphQLObjectType({
    name: 'Item',
    fields: ( ) => ({
        id: { type: GraphQLID },
        item_id: { type: GraphQLID },
        title: { type: GraphQLString },
        long_description: { type: GraphQLString },
        short_description: { type: GraphQLString },
        images: { type: GraphQLString },
        price: { type: GraphQLFloat },
        discount: { type: GraphQLFloat },
        quantities: { type: GraphQLInt },
        sizes: { type: GraphQLString },
        colors: { type: GraphQLString },
        gendre: { type: GraphQLString },
        categories : {
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                return CategoryModel.getByItems(parent.id);
            }
        }
    })
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: ( ) => ({
        id: { type: GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        adress: { type: GraphQLString },
        zip: { type: GraphQLString },
        city: { type: GraphQLFloat },
        country: { type: GraphQLFloat },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        commands : {
            type: new GraphQLList(CommandType),
            resolve(parent, args){
                return CommandModel.getByUser(parent.id);
            }

        }
    })
});

const CommandType = new GraphQLObjectType({
    name: 'Command',
    fields: ( ) => ({
        id: { type: GraphQLID },
        user_id: { type: GraphQLID },
        status: { type: GraphQLString },
        payement: { type: GraphQLString },
        total_price: { type: GraphQLFloat },
        user: {
            type: UserType,
            resolve(parent, args){
                return UserModel.getById(parent.user_id);
            }
        },
    })
});

const CommandLineType = new GraphQLObjectType({
    name: 'CommandLine',
    fields: ( ) => ({
        id: { type: GraphQLID },
        command_id: { type: GraphQLID },
        item_id: { type: GraphQLID },
        item_name: { type: GraphQLString },
        item_price: { type: GraphQLFloat },
        item_qte: { type: GraphQLFloat },
        item_discount: { type: GraphQLFloat },
        item_total_price: { type: GraphQLFloat },
    })
});

const Item_CategoryType = new GraphQLObjectType({
    name: 'Item_Category',
    fields: ( ) => ({
        id: { type: GraphQLID },
        item_id: { type: GraphQLID },
        category_id: { type: GraphQLID },
    })
});

// Define Queries


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        category: {
            type: CategoryType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                return CategoryModel.getById(args.id);
            }
        },
        item: {
            type: ItemType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return ItemModel.getById(args.id);
            }
        },
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return UserModel.getById(args.id);
            }
        },
        command: {
            type: CommandType,
            args: { id: { type: GraphQLID }},
            resolve(parent, args){
                return CommandModel.getById(args.id);
            }
        },
        commandline: {
            type: CommandLineType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return CommandLineModel.getById(args.id);
            }
        },
        item_category: {
            type: Item_CategoryType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return Item_CategoryModel.getById(args.id);
            }
        },
        categories: {
            type: new GraphQLList(CategoryType),
            resolve(parent, args){
                return CategoryModel.getAll();
            }
        },
        categorybyGendreAndName: {
            type: new GraphQLList(CategoryType),
            args: {gendre: {type:GraphQLString}, name:{type:GraphQLString} },
            resolve(parent, args){
                return CategoryModel.getByGender(args.name, args.gendre);
            }
        },
        items: {
            type: new GraphQLList(ItemType),
            resolve(parent, args){
                return ItemModel.getAll();
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return UserModel.getAll();
            }
        },
        commands: {
            type: new GraphQLList(CommandType),
            resolve(parent, args){
                return CommandModel.getAll();
            }
        },
        commandlines: {
            type: new GraphQLList(CommandLineType),
            resolve(parent, args){
                return CommandLineModel.getAll();
            }
        },
        items_categories: {
            type: new GraphQLList(Item_CategoryType),
            resolve(parent, args){
                return Item_CategoryModel.getAll();
            }
        },
    }
});


// Define Mutations

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        // categories
        createCategory: {
            type: CategoryType,
            args: {
                name: { type: GraphQLString },
                level: { type: GraphQLInt },
                gendre: { type: GraphQLString },
                imageUrl: { type: GraphQLString },
                parent_id: { type: GraphQLID },        
            },
            async resolve(parent, args){   
                let res = await CategoryModel.insert({
                    name: args.name,
                    level: args.level,
                    gendre: args.gendre,
                    imageUrl: args.imageUrl,
                    parent_id: args.parent_id,
                })
                return res
            },          
        },
        deleteCategory: {
            type: CategoryType,
            args: {
                id: { type: GraphQLID },
            },
            async resolve(parent, args){   
                let res = await CategoryModel.delete(args.id)
                return res
            },          
            
        },
        // items
        createItem: {
            type: ItemType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                long_description: { type: GraphQLString },
                short_description: { type: GraphQLString },
                images: { type: GraphQLString },
                price: { type: GraphQLFloat },
                discount: { type: GraphQLFloat },
                quantities: { type: GraphQLInt },
                sizes: { type: GraphQLString },
                colors: { type: GraphQLString },
                gendre: { type: GraphQLString },        
            },
            async resolve(parent, args){                  
                let res = await ItemModel.insert({
                    title: args.title,
                    long_description: args.long_description,
                    short_description: args.short_description,
                    images: args.images,
                    price: args.price,
                    discount: args.discount,
                    quantities: args.quantities,
                    sizes: args.sizes,
                    colors: args.colors,
                    gendre: args.gendre,
                })
                return res
            },          
        },
        updateItem: {
            type: ItemType,
            args: {
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                long_description: { type: GraphQLString },
                short_description: { type: GraphQLString },
                images: { type: GraphQLString },
                price: { type: GraphQLFloat },
                discount: { type: GraphQLFloat },
                quantities: { type: GraphQLInt },
                sizes: { type: GraphQLString },
                colors: { type: GraphQLString },
                gendre: { type: GraphQLString },        
            },
            async resolve(parent, args){   
                let res = await ItemModel.update(args.id, {
                    title: args.title,
                    long_description: args.long_description,
                    short_description: args.short_description,
                    images: args.images,
                    price: args.price,
                    discount: args.discount,
                    quantities: args.quantities,
                    sizes: args.prsizesice,
                    colors: args.colors,
                    gendre: args.gendre,
                })
                return res
            },          
        },
        deleteItem: {
            type: ItemType,
            args: {
                id: { type: GraphQLID },
            },
            async resolve(parent, args){   
                let res = await ItemModel.delete(args.id)
                return res
            },          
            
        },

        // commands

        createCommand: {
            type: CommandType,
            args: {
                id: { type: GraphQLID },
                user_id: { type: GraphQLID },
                status: { type: GraphQLString },
                payement: { type: GraphQLString },
                total_price: { type: GraphQLFloat },
            },
            async resolve(parent, args){   
                let res = await CommandModel.insert({
                    user_id: args.user_id,
                    status: args.status,
                    status: args.status,
                    payement: args.payement,
                    total_price: args.total_price,
                })
                return res
            },          
        },
        updateCommand: {
            type: CommandType,
            args: {
                id: { type: GraphQLID },
                user_id: { type: GraphQLID },
                status: { type: GraphQLString },
                payement: { type: GraphQLString },
                total_price: { type: GraphQLFloat },
            },
            async resolve(parent, args){   
                let res = await CommandModel.update(args.id, {
                    user_id: args.user_id,
                    status: args.status,
                    status: args.status,
                    payement: args.payement,
                    total_price: args.total_price,
                })
                return res
            },          
        },
        deleteCommand: {
            type: CommandType,
            args: {
                id: { type: GraphQLID },
            },
            async resolve(parent, args){   
                let res = await CommandModel.delete(args.id)
                return res
            },          
            
        },

        // commandline

        createCommandLine: {
            type: CommandLineType,
            args: {
                id: { type: GraphQLID },
                command_id: { type: GraphQLID },
                item_id: { type: GraphQLID },
                item_name: { type: GraphQLString },
                item_price: { type: GraphQLFloat },
                item_qte: { type: GraphQLFloat },
                item_discount: { type: GraphQLFloat },
                item_total_price: { type: GraphQLFloat },
            },
            async resolve(parent, args){   
                let res = await CommandLineModel.insert({
                    command_id: args.command_id,
                    item_id: args.item_id,
                    item_name: args.item_name,
                    item_price: args.item_price,
                    item_qte: args.item_qte,
                    item_discount: args.item_discount,
                    item_total_price: args.item_total_price,
                })
                return res
            },          
        },
        updateCommandLine: {
            type: CommandLineType,
            args: {
                id: { type: GraphQLID },
                command_id: { type: GraphQLID },
                item_id: { type: GraphQLID },
                item_name: { type: GraphQLString },
                item_price: { type: GraphQLFloat },
                item_qte: { type: GraphQLFloat },
                item_discount: { type: GraphQLFloat },
                item_total_price: { type: GraphQLFloat },
            },
            async resolve(parent, args){   
                let res = await CommandLineModel.update(args.id, {
                    command_id: args.command_id,
                    item_id: args.item_id,
                    item_name: args.item_name,
                    item_price: args.item_price,
                    item_qte: args.item_qte,
                    item_discount: args.item_discount,
                    item_total_price: args.item_total_price,
                })
                return res
            },          
        },
        deleteCommandLine: {
            type: CommandLineType,
            args: {
                id: { type: GraphQLID },
            },
            async resolve(parent, args){   
                let res = await CommandLineModel.delete(args.id)
                return res
            },          
            
        },

        // item_category

        createItem_Category: {
            type: Item_CategoryType,
            args: {
                id: { type: GraphQLID },
                item_id: { type: GraphQLID },
                category_id: { type: GraphQLID },
            },
            async resolve(parent, args){   
                let res = await Item_CategoryModel.insert({
                    item_id: args.item_id,
                    category_id: args.category_id,
                    })
                    return res
            },          
        },
        updateItem_Category: {
            type: Item_CategoryType,
            args: {
                id: { type: GraphQLID },
                item_id: { type: GraphQLID },
                category_id: { type: GraphQLID },
            },
            async resolve(parent, args){   
                let res = await Item_CategoryModel.update(args.id, {
                    item_id: args.item_id,
                    category_id: args.category_id,
                })
                return res
            },          
        },
        deleteItem_Category: {
            type: Item_CategoryType,
            args: {
                id: { type: GraphQLID },
            },
            async resolve(parent, args){   
                let res = await Item_CategoryModel.delete(args.id)
                return res
            },    
                  
            
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});