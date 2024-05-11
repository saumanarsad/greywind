const express = require('express');
const app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));  //All static files will be found here



app.get('/',function(req,res){
    res.send("hello");
});

app.listen(3000);
