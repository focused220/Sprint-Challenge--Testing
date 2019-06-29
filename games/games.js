const express = require('express');
const server = express();
const knex = require('knex');
const data = require('../knex.js');
const db = knex(data.testing);



server.use(express.json())


 
server.post('/games', async (req,res) =>{
    let game = req.body;
    if(!game.title || !game.genre){
        return res.status(500).json(`{message: games must have a title and genre}`)
    }
    else{
        try{
            console.log(game)
            let newGame = await db.insert(game)
            .then(entry => res.status(200).json(entry))
            .catch(err => console.log(err))
        }catch(error){console.log(error)}
    }
})

server.get('/games', async (req, res) =>{
    let games = await db('Games')
    .then(entries => {res.status(200).json(entries)})
    .catch(err => res.status(500).json(`{message: no games}`))
})

module.exports = server;