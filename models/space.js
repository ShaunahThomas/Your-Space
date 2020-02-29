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
	provider:{
		type: String
	},
	phone:{
		type: String
	// 	type: String,
    // 	validate: {
    //   validator: function(v) {
    //     return /\d{3}-\d{3}-\d{4}/.test(v);
    //   },
    //   message: props => `${props.value} is not a valid phone number!`
    // },
    // required: [true, 'User phone number required']
	  },
	image: 
		{ data: Buffer, contentType: String }
	

	
});

const Space = module.exports = mongoose.model('Space', spaceSchema);

// Get Spaces
module.exports.getSpaces = (callback, limit) => {
	Space.find(callback).limit(limit);
}

// Get Space
module.exports.getSpaceById = (id, callback) => {
	Space.findById(id, callback);
}

// Add Space
module.exports.addSpace = (space, callback) => {
	Space.create(space, callback);
}

// Update Space
module.exports.updateSpace = (id, space, options, callback) => {
	var query = {_id: id};
	var update = {
		name: space.name,
		spacetype: space.spacetype,
		provider: space.provider,
		phone: space.phone,
		image: space.image

	}
	Space.findOneAndUpdate(query, update, options, callback);
}

// Delete Space
module.exports.removeSpace = (id, callback) => {
	var query = {_id: id};
	Space.remove(query, callback);
}
