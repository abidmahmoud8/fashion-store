// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '',
      database : 'fashion_store'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory : __dirname + '/migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'fashion_store',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory : __dirname + '/migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: {
      database: 'fashion_store',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory : __dirname + '/migrations'
    }
  }

};
