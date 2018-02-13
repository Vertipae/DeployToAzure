
const gameslist = function(req, res) {
  res.render('games', {
    games:

    [
      {year: '2002', title: 'Need for Speed: Hot Pursuit 2', genre: 'Racing'},
      {year: '2004', title: 'World of Warcraft', genre: 'MMORPG'},
      {year: '2005', title: 'F.E.A.R.', genre: 'Horror'},
      {year: '2007', title: 'Penumbra:  Overture', genre: 'Horror'},
      {year: '2010', title: 'Amnesia: The Dark Descent', genre: 'Horror'},
      {year: '2011', title: 'The Elder Scrolls V: Skyrim', genre: 'Fantasy'},
      {year: '2013', title: 'Dead Space 3', genre: 'Horror'},
      {year: '2014', title: 'Outlast', genre: 'Horror'},
      {year: '2015', title: 'The Witcher 3: Wild Hunt', genre: 'Fantasy'},
      {year: '2017', title: 'Get Even', genre: 'Horror'}
    ]});
  };
  module.exports = {
    gameslist

};
