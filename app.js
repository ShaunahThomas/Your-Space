// get dependencies
var multer  =   require('multer');
var http = require('http');
var methodOverride = require('method-override');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();



app.use(express.static(__dirname+'/public'));

// parse requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   });


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});


// Configuring the database
const config = require('./config.js');
const mongoose = require('mongoose');

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

//Routes to handle requests
require('./routes/user.js')(app);
require('./routes/space.routes.js')(app);
// const spaceRoutes = require('./routes/space.routes.js')
// const userRoutes = require('./routes/user');
// require('./routes/user.js')(app);

// app.use("/user", userRoutes);
app.use('/uploads', express.static('uploads'))
// app.use('/success', express.static('public'))


// default route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Your Space"});
});

// // listen on port 3000
// app.listen(config.serverport, () => {
//     console.log("Server is listening on port 3000");
// });





app.listen(config.serverport, () => {
    console.log("Server is listening on port 3000");
});
