const http = require('http')

const app = require('./app')

const server = http.createServer(app)
server.listen(4000, function() {
    console.log('serveur démarré sur le port 4000')
})