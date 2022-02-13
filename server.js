const express= require('express');
const mongoose=require('mongoose');

//create express app server
const app= express();
//use port from env variables or 3002
const PORT = process.env.PORT || 3002;

//server should use json datatype
app.use(express.json());
//server should use urlendcoded form of data
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('debug', true);
//all the routes are contained in routes folder
app.use(require('./routes'));
app.listen(PORT,()=> console.log(`Connected to local host`));

