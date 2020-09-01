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

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        category: {
            type: CategoryType,
            args: { id: { type: GraphQLID } },
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

module.exports = new GraphQLSchema({query: RootQuery});
