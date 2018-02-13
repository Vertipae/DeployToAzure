const index = function(req, res) {
  res.render('index', { title: 'My favourite games and music'})
};

module.exports = {
  index
};
