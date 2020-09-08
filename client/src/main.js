import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import gql from 'graphql-tag';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

export const typeDefs = gql`
  type User {
    id: ID!
    token: String!
  }
`;

const userQuery = gql `
{
    User @client {
      id
      token
    }
}
`;

export const resolvers = {
  Mutation: {
    checkUser: (_, { }, { cache }) => {
      const data = cache.readQuery({ query: userQuery });
      const currentUser = data.User.find(user => user.id > 0);
      cache.writeQuery({ query: userQuery, data });
      return currentUser.id;
    },
    addUser: (_, { id, token }, { cache }) => {
      const data = cache.readQuery({ query: userQuery });
      const newUser = {
        __typename: 'User',
        id: id,
        token : token,
      };
      data.User = [newUser];
      cache.writeQuery({ query: userQuery, data });
      return newUser;
    },
  } 
}


const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
})


cache.writeData({
  data: {
    User: [
      {
        __typename: 'User',
        id: 0,
        token: 'token',
      },
    ],
  },
});

Vue.use(VueApollo)

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  store,
  vuetify,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");