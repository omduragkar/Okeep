const express = require("express");
// const fs= require("fs");
const pug= require('pug');
const path= require('path');
const port=5000;
const db= require("./config/mongoose");
const app = express();
var notearray=[
    {
        title: 'Plan 1',
        text: 'azwdefa',
    }
]
app.set('view engine', 'pug');
app.set('views', __dirname);
app.use(express.urlencoded());
app.use(express.static('assets'));
const Notes = require('./models/notes.js')
app.get('/',function(req,res)
{
    console.log(notearray);
    Notes.find({}, function(err, note)
    {
        if(err)
        {
            console.log('error in fetching data');
        }
        return res.render('okeep',{
            title: 'Contact List',
            notes: note,
            length: note.length
        })

    });
    // return res.render('okeep',{
    //     // title: 'Contact List',
    //     notes: notearray,
    //     length: notearray.length
    // })
});
app.post('/add-note',function(req,res)
{
    console.log(req.body);
    notearray.push(req.body);
    Notes.create(req.body, function(err, newnote)
    {
        if(err)
        {
            console.log("mongodb is destructing your kindness");
            // console.log("*****************" + newlist);
            return;
        }
        console.log("*****************" + newnote);
        return res.redirect('/');
    });
    // res.redirect('/');
});
app.get('/rate',function(req,res)
{
    res.render('rate');
});
app.get('/del-note', function(req,res)
{
    let idli = req.query.id;
    Notes.findByIdAndDelete(idli, function(err)
    {
        if(err)
        {
            console.log('error');
            return;
        }
        return res.redirect('/');
    })
})
app.post('/thanks', function(req, res)
{
    res.render('thanks');
    // res.send("Thanks for rating us");
});
app.listen(port, function(err)
{
    if(err)
    {
        console.log("error");
    }
    console.log("YaY! Server started!!");
});