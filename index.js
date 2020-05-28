const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var bodyParser = require('body-parser')


//IMPORT routes
const authRoute = require('./route/auth');


dotenv.config();

//connect to db
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true,useUnifiedTopology: true },
()=>console.log('connected to database')
);

//middleware 
app.use(express.json());

// route middleware 
app.use('/api/user', authRoute);



app.listen(3000,()=>console.log('Server Up and running'));
