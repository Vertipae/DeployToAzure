db.dropDatabase();

db.music.save(
[
  {year:'1981', band: 'Metallica'},
  {year:'1990', band: 'In Flames'},
  {year:'1997', band: 'Hardcore Superstar'},
  {year:'1998', band: 'Mustasch'},
  {year:'2004', band: 'Bring Me the Horizon'},
  {year:'2005', band: 'Five Finger Death Punch'},
  {year:'2005', band: 'Periphery'},
  {year:'2008', band: 'Asking Alexandria'},
  {year:'2009', band: 'Of Mice & Men'},
  {year:'2010', band: 'The Plot in You'},
  {year:'2016', band: 'Bad Omens'}
]
);



db.games.save(
  [
  {year:'2002', title:'Need for Speed: Hot Pursuit 2', genre:'Racing'},
  {year:'2004', title:'World of Warcraft', genre:'MMORPG'},
  {year:'2005', title:'F.E.A.R.', genre:'Horror'},
  {year:'2007', title:'Penumbra: Overture', genre:'Horror'},
  {year:'2010', title:'Amnesia: The Dark Descent', genre:'Horror'},
  {year:'2011', title:'The Elder Scrolls V: Skyrim', genre:'Fantasy'},
  {year:'2013', title:'Dead Space 3', genre:'Horror'},
  {year:'2014', title:'Outlast', genre:'Horror'},
  {year:'2015', title:'The Witcher 3: Wild Hunt', genre:'Fantasy'},
  {year:'2017', title:'Get Even', genre:'Horror'}
]);
