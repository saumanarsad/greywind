const express = require('express');
const app = express();
const path = require('path');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));  //All static files will be found here

app.get('/',function(req,res){
    res.render('index');
})
app.get('/profile/:username',function(req,res){ 
    req.params.username  //Dynamic thorugh colon
    res.send(req.params.username);
})

app.listen(3000);