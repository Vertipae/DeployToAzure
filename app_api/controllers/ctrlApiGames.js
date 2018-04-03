const mongoose = require('mongoose');
const games = mongoose.model('games');

const gamesList = function(req, res) {

  games.find({}, function (err, gamesFromDB) {
    if (err) {
      res.status(404).json(err);
    }
    else{
      res.status(200).json(gamesFromDB);
    }
  });
};

const addGame = function (req, res) {
  games.create(req.body, function(err, newGame) {
    if(err) {
      res.status(400).json(err);
    }
    else{
      res.status(201).json(newGame);
    }
  });
};

module.exports = {
  gamesList,
  addGame
};
