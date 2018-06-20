const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

let app = express();
hbs.registerPartials(__dirname + "/views/partials");
hbs.registerHelper('currentYear', ()=> new Date().getFullYear());
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

app.use((req, res, next)=>{
  let time = new Date().toString();
  let log = (`time: ${time} method: ${req.method} ${req.url}`);
  fs.appendFile('log.txt',log+'\n',(err)=>{
      if (err){
          console.log("unable to connect to the server ");
      }
  });
  //next();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my public',
    });
});

app.get('/about',(req,res)=>{
   res.render('about.hbs',{
       title: "this is about page",
       year: new Date().getFullYear(),
       welcomeMessage: 'this is about page'
   });
});
app.listen(3000);
