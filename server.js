const express = require('express');
const req = require('express/lib/request');
const app = express();

const port = 3000

app.get('/', (req, res)=>{
    res.send(`99 Bottles of beer on the wall <br/>
    <a href="/98">take one down, pass it around</a>`);
});

app.get('/:bottleNumbers', (req, res)=>{
    res.send(`${req.params.bottleNumbers} Bottles of beer on the wall <br/>
    <a href=/${req.params.bottleNumbers-1}>take one down, pass it around</a>`);
});

app.listen(port, ()=>{
    console.log('Listening on port ', port);
});