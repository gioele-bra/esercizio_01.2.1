const express = require('express');
const path = require('path');
const http = require('http');
const app = new express();
const cors = require('cors');
app.use(new cors());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname,'about.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname,'sitemap.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/api', (req, res) => {
  var jsonData = {"results": ["Important 1 ","Thing 2",]};
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
});

app.listen(3000, function () {
    console.log('Server Node listening on port 3000!');
});