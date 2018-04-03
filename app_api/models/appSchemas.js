const mongoose = require('mongoose');


const gamesSchema = new mongoose.Schema({year:String, title:String, genre:String});
const musicSchema = new mongoose.Schema({year:String, band:String});

mongoose.model('games', gamesSchema, 'games');
mongoose.model('music', musicSchema, 'music');
