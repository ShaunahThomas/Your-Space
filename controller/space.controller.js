const Space = require('../models/space.model.js');
// const paginatedResults = require('../middleware/pagination.js');

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
        capacity: req.body.capacity,
        provider: req.body.provider,
        phone: req.body.phone,
        address: req.body.address,
        place: req.body.place,
        geometrylat: req.body.geometrylat,
        geometrylng: req.body.geometrylng,
        price: req.body.price,
        description: req.body.description,
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        starttime: req.body.starttime,
        endtime: req.body.endtime,
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

exports.getSpacesPriceValue= (req, res) => {
    Space.find()
    .then(spaces => {
      const maxval = Math.max.apply(Math, Space.map(function(o) { return o.price; }))
      console.log(maxval)
      // $("myForm").attr("action" ,MY_CONSTANT + "/myroute" );
      // $("priceSearch").setAttribute("max",maxval);

        res.send(maxval);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving spaces."
        });
    });
};




//Testing pagination
//
// exports.getSpaces= (req, res) => {
//   const pagination = req.query.pagination
//   ? parseInt(req.query.pagination)
//   : 10;
//
//   const page = req.query.page
//   ? parseInt(req.query.page)
//   : 1;
//
//
//
//
//     Space.find()
//     .then(spaces => {
//         res.send(spaces);
//         .skip((page-1) * pagination)
//         .limit(pagination)
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Something wrong while retrieving spaces."
//         });
//     });
// };


exports.getSpacesPage=(req, res) => {
res.json(res.paginatedResults)
};

//testing pagination 2
// app.get('/spaces', paginatedResults(Space), (req, res) => {
//   res.json(res.paginatedResults)
// })

// function paginatedResults(model) {
//   return async (req, res, next) => {
//     const page = parseInt(req.query.page)
//     const limit = parseInt(req.query.limit)
//
//     const startIndex = (page - 1) * limit
//     const endIndex = page * limit
//
//     const results = {}
//
//     if (endIndex < await model.countDocuments().exec()) {
//       results.next = {
//         page: page + 1,
//         limit: limit
//       }
//     }
//
//     if (startIndex > 0) {
//       results.previous = {
//         page: page - 1,
//         limit: limit
//       }
//     }
//     try {
//       results.results = await model.find().limit(limit).skip(startIndex).exec()
//       res.paginatedResults = results
//       next()
//     } catch (e) {
//       res.status(500).json({ message: e.message })
//     }
//   }
// }

// module.exports.paginatedResults = paginatedResults;

module.exports.paginatedResults = function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < await model.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec()
      res.paginatedResults = results
      next()
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  }
}





//Single space page
exports.getSingleSpace = (req, res) =>{
  // res.sendFile(__dirname + '/../public/index.html')
   // res.sendFile('public/index.html', { root: __dirname });
   res.sendFile(path.resolve('public/search0.html'));
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


//Redirect page to location
exports.getSearchedSpace = (req, res) =>{
  // res.sendFile(__dirname + '/../public/index.html')
   // res.sendFile('public/index.html', { root: __dirname });
   res.sendFile(path.resolve('public/searchpage.html'));
};











// Retrieve all spaces from the database with searched location.
exports.getLocationSpaces= (req, res) => {
  // Space.find({"address": { $regex: req.body.locationSearch ,$options: 'i' }})
  // .then(space => {
  //      if(!space) {
  //          return res.status(404).send({
  //              message: "Space not found with id " + req.params.address
  //          });
  //      }
  //      res.send(space);
  //  }).catch(err => {
  //      if(err.kind === 'ObjectId') {
  //          return res.status(404).send({
  //              message: "Space not found with id " + req.params.address
  //          });
  //      }
  //      return res.status(500).send({
  //          message: "Something wrong retrieving space with id " + req.params.address
  //      });
  //  });

  if(!req.query) {
      return res.status(400).send({
          message: "Space content can not be empty"
      });
  }
  let locationSearch = req.query.locationSearch

  let capacitySearch = req.query.capacitySearch
  let spaceTypeSearch = req.query.spaceTypeSearch
  let priceSearch = req.query.priceSearch

  console.log(capacitySearch);


  let query = {};

  // if (req.query.locationSearch) {
  //     query.paramOne = req.query.locationSearch;
  // }
  if(req.query){
    console.log(req.query);
  }
  if (req.query.locationSearch) {
      query.place = req.query.locationSearch;
  }

  if (req.query.capacitySearch) {
        // capacity: {$gte:capacitySearch}
          query.capacity = {$gte:capacitySearch}
  }

  if (req.query.spaceTypeSearch) {
       // spacetype: {$eq: spaceTypeSearch}
       query.spacetype = {$eq: spaceTypeSearch}
  }
  if (req.query.priceSearch) {
        // capacity: {$gte:capacitySearch}
          query.price = {$lte:priceSearch}
  }
  console.log(query);

  Space.find(query).then(record => {
      // console.log(res.json(record));
// res.sendFile(path.resolve('public/search20.html'));
      res.send(record);

});





//
// let query = Object.keys(req.query).reduce((mappedQuery, key) => {
//    let param = req.query[key]
//    if (param) {
//      mappedQuery[key] = param
//    }
//
//    return mappedQuery
//  }, {})
// console.log(query);
// Space.find(query).then(record => {
//     // console.log(res.json(record));
//     res.send(record);
// });











    // Space.find({
    //   // address: /gosport/i
    //   // address: {$eq: locationSearch},
    //   capacity: {$gte:capacitySearch},
    //    // capacity: { $regex: /^${req.query.capacitySearch}/i }
    //    spacetype: {$eq: spaceTypeSearch}
    //  }).then(spaces => {
    //        res.send(spaces);
    //    }).catch(err => {
    //        res.status(500).send({
    //            message: err.message || "Something wrong while retrieving spaces."
    //        });
    //    });







//   Space.find({
//     // address: /gosport/i
//     // capacity: req.query.capacitySearch
//      capacity: { $regex: /^${req.query.capacitySearch}/i }
//
//
//
// })
//
//   // Space.find({"address": { $regex: /req.query.locationSearchV/i }})
//   // Space.find()
//   // .then(spaces => {
//   //     res.send(spaces);
//   // }).catch(err => {
//   //     res.status(500).send({
//   //         message: err.message || "Something wrong while retrieving spaces."
//   //     });
//   // });
//   .then(space => {
//       if(!space) {
//           return res.status(404).send({
//               message: "Space not found with id " + req.params.capacity
//           });
//       }
//       res.send(space);
//   }).catch(err => {
//       if(err.kind === 'ObjectId') {
//           return res.status(404).send({
//               message: "Space not found with id " + req.params.address
//           });
//       }
//       return res.status(500).send({
//           message: "Something wrong retrieving space with id " + req.params.address
//       });
//   });
//   for (const key in req.query) {
//   console.log(key, req.query[key])
// }
//
//






// let query = {};
//
// if (req.query.locationSearch) {
//     query.paramOne = req.query.locationSearch;
// }
//
// if (req.query.capacitySearch) {
//     query.paramTwo = req.query.capacitySearch;
// }
//
// if (req.query.spaceTypeSearch) {
//     query.paramThree = req.query.spaceTypeSearch;
// }
//
//
// Space.find(query).then(record => {
//     // console.log(res.json(record));
//     // res.send(record);
//     res.json(record);
//     // res.sendFile(path.resolve('public/search2.html'));
//
// });
};










/*For table to have pages*/
