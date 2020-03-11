const Space = require('../models/space.model.js');

var path = require('path');
//Create new Space
exports.addSpace = (req, res, next) => {
    // Request validation
    if(!req.body) {
        return res.status(400).send({
            message: "Space content can not be empty"
        });
    }

    // Create a Space
    let space = new Space({
        name: req.body.name || "No space name",
        spacetype: req.body.spacetype,
        provider: req.body.provider,
        phone: req.body.phone,
        avatar: "none"
        // 		spacetype: space.spacetype,
        // 		phone: space.phone,
        // 		phone: space.phone,
        // 		image: space.image

    })
    if(req.file){
      space.avatar = req.file.path;
      console.log("theres is a file");
    } else {
      space.avatar = "uploads/no-image.png";
      console.log("no file");
    }
// space.save()
// .then(response =>{
//   res.json({
//     message: 'added successfully'
//   })
// })
// .catch(error => {
//   res.json({
//     message: 'an error'
//   })
// })
    // Save Space in the database
    space.save()
    .then(data => {
        // res.send(data);
        res.redirect('/success');
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the space."
        });
    });
    // next();
    // res.header('Authorization', auth);
    // res.status(200);
    // res.redirect('/success');
    // res.render()
    // res.finished = true;
    // res.end();

};






exports.getIndex = (req, res) =>{
  // res.sendFile(__dirname + '/../public/index.html')
   // res.sendFile('public/index.html', { root: __dirname });
   res.sendFile(path.resolve('public/index.html'));
};




// Retrieve all spaces from the database.
exports.getSpaces= (req, res) => {
    Space.find()
    .then(spaces => {
        res.send(spaces);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving spaces."
        });
    });
};

// Find a single space with a spaceId
exports.getSpaceById = (req, res) => {
    Space.findById(req.params.spaceId)
    .then(space => {
        if(!space) {
            return res.status(404).send({
                message: "Space not found with id " + req.params.spaceId
            });
        }
        res.send(space);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Space not found with id " + req.params.spaceId
            });
        }
        return res.status(500).send({
            message: "Something wrong retrieving space with id " + req.params.spaceId
        });
    });
};

// Update a space
exports.updateSpace = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Space content can not be empty"
        });
    }

    // Find and update space with the request body
    Space.findByIdAndUpdate(req.params.spaceId, {
        name: req.body.name || "No space name",
        spacetype: req.body.spacetype,
        provider: req.body.provider,
        phone: req.body.phone
    }, {new: true})
    .then(space => {
        if(!space) {
            return res.status(404).send({
                message: "Space not found with id " + req.params.spaceId
            });
        }
        res.send(space);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Space not found with id " + req.params.spaceId
            });
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.spaceId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.removeSpace = (req, res) => {
    Space.findByIdAndRemove(req.params.spaceId)
    .then(space => {
        if(!space) {
            return res.status(404).send({
                message: "Space not found with id " + req.params.spaceId
            });
        }
        res.send({message: "Space deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Space not found with id " + req.params.spaceId
            });
        }
        return res.status(500).send({
            message: "Could not delete space with id " + req.params.spaceId
        });
    });
};














/*For table to have pages*/
