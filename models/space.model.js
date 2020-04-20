const mongoose = require('mongoose');

// Space Schema
const spaceSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	spacetype:{
		type: String,
		required: true
	},
	capacity:{
		type: Number
	},
	provider:{
		type: String
	},
	phone:{
		type: String
	},
	address:{
		type: String
	},
	place:{
	type: String
	},
	geometrylat:{
		type:Number
	},
	geometrylng:{
		type:Number
	},
	price:{
		type: Number
	},
	description:{
		type: String
	},
	startdate:{
		type: Date
	},
	enddate:{
		type: Date
	},
	starttime:{
		type: String
	},
	endtime:{
		type: String
	},
	avatar:{
		type: String
	}


});
// spaceSchema.index({ loc: '2dsphere'});
 module.exports = mongoose.model('Space', spaceSchema);
//
// // Get Spaces
// module.exports.getSpaces = (callback, limit) => {
// 	Space.find(callback).limit(limit);
// }
//
// // Get Space
// module.exports.getSpaceById = (id, callback) => {
// 	Space.findById(id, callback);
// }
//
// // Add Space
// module.exports.addSpace = (space, callback) => {
// 	Space.create(space, callback);
// }
//
// // Update Space
// module.exports.updateSpace = (id, space, options, callback) => {
// 	var query = {_id: id};
// 	var update = {
// 		name: space.name,
// 		spacetype: space.spacetype,
// 		provider: space.provider,
// 		phone: space.phone,
// 		image: space.image
//
// 	}
// 	Space.findOneAndUpdate(query, update, options, callback);
// }
//
// // Delete Space
// module.exports.removeSpace = (id, callback) => {
// 	var query = {_id: id};
// 	Space.remove(query, callback);
// }
