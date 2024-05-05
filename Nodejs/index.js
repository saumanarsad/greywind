const express = require('express');
const app = express(); 

app.use(function(req,res,next){  //Middleware
    console.log("Middleware");
    next();
});

app.get('/',function(req,res){
    res.send('hello world');
});

app.get('/profile',function(req,res,next){
    return next(new Error("Something is not right"));
    res.send('my profile');
});
app.use(function(err,req,res,next){
    console.error(err.stack);
    res.status(500).send('Something broke');
})

app.listen(3000);