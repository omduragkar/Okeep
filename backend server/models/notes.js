const { text } = require('express');
const mongoose = require('mongoose');
const noteschema = mongoose.Schema({
    title:
    {
        type: String
    },
    text:
    {
        type: String,
        require: true
    },
    date:
    {
        type:Date
    }
});
const Notes = mongoose.model('Notes', noteschema);
module.exports = Notes;