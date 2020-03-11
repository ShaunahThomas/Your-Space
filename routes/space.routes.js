module.exports = (app) => {
    const spaces = require('../controller/space.controller.js');

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


  app.get('/success', spaces.getIndex);



    // Retrieve all Spaces
    app.get('/spaces', spaces.getSpaces);

    // Retrieve a single Space with spaceId
    app.get('/spaces/:spaceId', spaces.getSpaceById);

    // Update a Note with spaceId
    app.put('/spaces/:spaceId', spaces.updateSpace);


    // // Update a Note with spaceId
    // app.put('/spaces/:spaceId', spaces.updateSpace);

    // Delete a Note with spaceId
    app.delete('/spaces/:spaceId', spaces.removeSpace);

    
}
