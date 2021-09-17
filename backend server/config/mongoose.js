const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/okeep_db');
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection between mongoose db missing'));
db.once('open',function()
{
    console.log('db connection successful with okeep_db');
})