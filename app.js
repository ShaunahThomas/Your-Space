var multer  =   require('multer');
// var express = require('express');
var http = require('http');
// var path = require('path');
// var mongoose = require('mongoose');
// var app = express();
// var bodyParser = require('body-parser');
var methodOverride = require('method-override');
// const {ObjectID} = require("mongodb");








// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname+'/public'));


// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');
require('./routes/space.routes.js')(app);
// require('./routes/photo.routes.js')(app);

app.use('/uploads', express.static('uploads'))
// app.use('/success', express.static('public'))


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to ZeptoBook Product app"});
});

// // listen on port 3000
// app.listen(config.serverport, () => {
//     console.log("Server is listening on port 3000");
// });












// app.use(bodyParser());
// app.use(methodOverride());
// //app.use(app.router);
// app.use(express.static(path.join(__dirname,'public')));

// mongoose.connect('mongodb://localhost/test');

// var mySchema = new mongoose.Schema({
//     _id : String,
//     name: String,
//     email : String
// });
//
// var user = mongoose.model('face',mySchema);
//
// app.post('/new',function(req,res){
//     upload(req,res,function(err) {
//         if(err) {
//             return res.end("Error uploading file.");
//         }
//             new user({
//              _id   :  new ObjectID(),
//              name : req.body.name,
//              email : req.body.email
//            }).save(function(err,doc){
//               if(err) res.json(err);
//               else    res.send('Successfully inserted!');
//            });
//     });
//
//
// });
// var storage =   multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, './uploads');
//   },
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   }
// });
// var upload = multer({ storage : storage}).single('userPhoto');
// app.get('/',function(req,res){
//       res.sendFile(__dirname + "/index.html");
// });
// listen on port 3000


























app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
});
