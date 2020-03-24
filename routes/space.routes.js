module.exports = (app) => {
    const spaces = require('../controller/space.controller.js');
    const Space = require('../models/space.model.js');

    // // Create a new Space
    // app.post('/spaces', spaces.create);
    //
    // // Retrieve all Spaces
    // app.get('/spaces', spaces.findAll);
    //
    // // Retrieve a single Space with spaceId
    // app.get('/spaces/:spaceId', spaces.findOne);
    //
    // // Update a Note with spaceId
    // app.put('/spaces/:spaceId', spaces.update);
    //
    // // Delete a Note with spaceId
    // app.delete('/spaces/:spaceId', spaces.delete);
const upload = require('../middleware/upload.js')


//new ones ---
    // // Create a new Space
    // app.post('/spaces', spaces.addSpace);


    // Create a new Space
    app.post('/spaces', upload.single('avatar'),spaces.addSpace);

//successful form submission
  app.get('/success', spaces.getIndex);

  // Retrieve all Spaces
  app.get('/spaces', spaces.getSpaces);

    // Retrieve spacesbypage
    app.get('/spacespage',spaces.paginatedResults(Space), spaces.getSpacesPage);



//Load single space
    app.get('/singlespace', spaces.getSingleSpace);

    // Retrieve a single Space with spaceId
    app.get('/spaces/:spaceId', spaces.getSpaceById);

    // Update a Note with spaceId
    app.put('/spaces/:spaceId', spaces.updateSpace);


    // // Update a Note with spaceId
    // app.put('/spaces/:spaceId', spaces.updateSpace);

    // Delete a Note with spaceId
    app.delete('/spaces/:spaceId', spaces.removeSpace);

    // app.get('/search2.html', spaces.getLocationSpaces);

    // /Load searched space
        app.get('/searchedspace', spaces.getSearchedSpace);

    // Retrieve a all Spaces with location
    app.get('/location', spaces.getLocationSpaces);

}
