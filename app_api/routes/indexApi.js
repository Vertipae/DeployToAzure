var express = require('express');
var router = express.Router();


const ctrlApiGames = require('../controllers/ctrlApiGames');
const ctrlApiMusic = require('../controllers/ctrlApiMusic');

router
.route('/games')
.get(ctrlApiGames.gamesList)
.post(ctrlApiGames.addGame);

router
.route('/music')
.get(ctrlApiMusic.musicList)
.post(ctrlApiMusic.addMusic);

module.exports = router;
