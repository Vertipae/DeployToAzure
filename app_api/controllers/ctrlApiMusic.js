const mongoose = require('mongoose');
const music = mongoose.model('music');

const musicList = function(req, res) {
  music.find({}, function (err, musicFromDB) {
    if (err) {
      res.status(404).json(err);
    }
    else{
      res.status(200).json(musicFromDB);
    }
  });
};

const addMusic = function (req, res) {
  music.create(req.body, function(err, newMusic) {
    if(err) {
      res.status(400).json(err);
    }
    else{
      res.status(201).json(newMusic);
    }
  });
};

module.exports = {
  musicList,
  addMusic
};
