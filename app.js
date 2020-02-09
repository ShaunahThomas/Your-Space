// const express = require('express');
// const Datastore = require('nedb');


// const app = express();
// app.listen(3000, () => console.log('listening at 3000'));
// app.use(express.static('public'));
// app.use(express.json({ limit: '1mb' }));

// const database = new Datastore('database.db');
// database.loadDatabase();

// app.get('/api', (request, response) => {
//   database.find({}, (err, data) => {
//     if (err) {
//       response.end();
//       return;
//     }
//     response.json(data);
//   });
// });

// app.post('/api', (request, response) => {
//   const data = request.body;
//   const timestamp = Date.now();
//   data.timestamp = timestamp;
//   database.insert(data);
//   response.json(data);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Genre =require('./models/genre');
Space =require('./models/space');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/spacestore');
var db = mongoose.connection;

// app.use(express.static('public'));
app.use(express.json());
// app.use(bodyParser.urlencoded({
//   extended: true;
// }));

// app.get('/api', (req, res) => {
// 	res.send('Please use /api/spaces or /api/genres');
// });

// app.get('/api/genres', (req, res) => {
// 	Genre.getGenres((err, genres) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(genres);
// 	});
// });

// app.post('/api/genres', (req, res) => {
// 	var genre = req.body;
// 	Genre.addGenre(genre, (err, genre) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });

// app.put('/api/genres/:_id', (req, res) => {
// 	var id = req.params._id;
// 	var genre = req.body;
// 	Genre.updateGenre(id, genre, {}, (err, genre) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });

// app.delete('/api/genres/:_id', (req, res) => {
// 	var id = req.params._id;
// 	Genre.removeGenre(id, (err, genre) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(genre);
// 	});
// });

app.get('/api', (req, res) => {
	Space.getSpaces((err, spaces) => {
		if(err){
			throw err;
		}
		res.json(spaces);
	});
});


// app.get('/', (req, res) => {
// 	Space.getSpaceById(req.params._id, (err, space) => {
// 		if(err){
// 			throw err;
// 		}
// 		res.json(space);
// 	});
// });

app.post('/api', (req, res) => {
  var space = req.body;
  // console.log('body', req.body);action="/"action="/"action="/"
	Space.addSpace(space, (err, space) => {
		if(err){
			throw err;
		}
		res.json(space);
	
	});
	
});


app.put('/api', (req, res) => {
	var id = req.params._id;
	var space = req.body;
	Space.updateSpace(id, space, {}, (err, space) => {
		if(err){
			throw err;
		}
		res.json(space);
	});
});

app.delete('/api', (req, res) => {
	var id = req.params._id;
	Space.removeSpace(id, (err, space) => {
		if(err){
			throw err;
		}
		res.json(space);
	});
});

app.listen(3000);
console.log('Running on port 3000...');



