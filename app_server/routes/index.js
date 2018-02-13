const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlGames = require('../controllers/ctrlGames');
const ctrlMusic = require('../controllers/ctrlMusic');

/* GET home page. */
router.get('/', ctrlMain.index); // Home page
router.get('/games', ctrlGames.gameslist); // Games list
router.get('/music', ctrlMusic.musiclist); // Movies list


module.exports = router;
