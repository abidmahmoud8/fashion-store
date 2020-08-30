let express = require('express');
const bodyParser = require('body-parser');
let app = express();
const path = require('path');
let knex = require("./config/db.js")
const categoryRoutes = require('./routes/Category')
const itemRoutes = require('./routes/Item')
const userRouter = require('./routes/User')
const commandRouter = require('./routes/Command')
const commandLineRouter = require('./routes/CommandLine')
const itemCategoryRouter = require('./routes/Item_Category')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    
    next();
  });
  
app.use(bodyParser.json());


app.use('/api/category', categoryRoutes);
app.use('/api/item', itemRoutes);
app.use('/api/item_category', itemCategoryRouter);
app.use('/api/auth', userRouter);
app.use('/api/command', commandRouter);
app.use('/api/commandline', commandLineRouter);
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;


