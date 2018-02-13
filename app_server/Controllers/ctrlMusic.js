
const musiclist = function(req, res) {
  res.render('music', {
    musics:

    [
      { year:'1981', band:'Metallica'},
      { year:'1990', band:'In Flames'},
      { year:'1997', band:'Hardcore Superstar'},
      { year:'1998', band:'Mustasch'},
      { year:'2004', band:'Bring Me the Horizon'},
      { year:'2005', band:'Five Finger Death Punch'},
      { year:'2005', band:'Periphery'},
      { year:'2008', band:'Asking Alexandria'},
      { year:'2009', band:'Of Mice & Men'},
      { year:'2010', band:'The Plot in You'},
      { year:'2016', band:'Bad Omens'}
    ]});
  };
  module.exports = {
    musiclist
  };
