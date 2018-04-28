const express = require('express');
const router = express.Router();

const ctrlMain = require('../controllers/main');
const ctrlGames = require('../controllers/ctrlGames');
const ctrlMusic = require('../controllers/ctrlMusic');

/* GET home page. */
router.get('/', ctrlMain.index); // Home page
router.get('/games', ctrlGames.gameslist); // Games list
router.get('/music', ctrlMusic.musiclist); // Movies list

router
    .route('/games/add')
    .get(ctrlGames.showForm)
    .post(ctrlGames.addData);
router
    .route('/music/add')
    .get(ctrlMusic.showForm)
    .post(ctrlMusic.addData);

module.exports = router;
