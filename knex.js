const knex = require('knex');


module.exports = {
    testing: {
        client: 'sqlite3', 
        useNullAsDefault: true, 
        connection: {
            filename: './data/gamesDB', 
        }
    }
}