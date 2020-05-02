//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
// const URI = 'mongodb://thisistheend:Root1122mongodb@ds143039.mlab.com:43039/heroku_zgkfm4v0';

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/solo-thisistheend").then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );

module.exports = mongoose.connection;



