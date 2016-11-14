const mongoose = require('mongoose');
const db = require('../config/db');
const Wonder = require('../models/wonder');

mongoose.connect(db.uri);

Wonder.collection.drop();

Wonder.create([{
  title: 'Acropolis',
  country: 'Greece',
  location: 'Athens',
  info: 'The Acropolis of Athens, a temple sacred to “Athena Polias” serves as a prominent war memorial. Currently nearing completion on a restoration project that has taken over 35 years, the goal was to restore the natural beauty and reverse the decay of centuries of attrition, pollution, and war destruction.',
  posterImage: 'http://s3.amazonaws.com/iexplore_web/images/assets/000/005/600/original/277207635_b92e6c368a_o.jpg?1442892254'
},{
  title: 'Great Barrier Reef',
  country: 'Australia',
  location: 'Queensland',
  info: 'The worlds largest reef system, the Great Barrier Reef off the coast of Queensland is renowned for its water clarity and coral formations that can even be seen from space. The Agincourt Reef lagoon is ideal for swimming and snorkeling and is amongst the best in the world for discovering marine life and nature’s beauty, a delicate ecosystem unlike anywhere else on Earth.',
  posterImage: 'http://s3.amazonaws.com/iexplore_web/images/assets/000/005/595/original/438046776_2563896f56_o.jpg?1442891654'
}], (err, wonders) => {
  if(err) console.log('There was an error creating wonders', err);

  console.log(`${wonders.length} wonders created!`);
  mongoose.connection.close();
});
