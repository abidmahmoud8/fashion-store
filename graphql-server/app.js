let express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
// const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
const path = require('path');



app.use(cors());

// app.use(bodyParser.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));


// app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;


