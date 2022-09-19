// use modular router
const notes = require('express').Router();
const fs = require('fs');
// import helper functions
const uuid = require('../helpers/uuid');
const { readFromFile, readAndAppend, writeToFile,} = require('../helpers/fsUtils');

// Get route to return all notes in JSON
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data))); 
});

// Get route for a specified note id
notes.get('/:id', (req, res) => {
  const noteId = req.params.id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id === noteId);
      return result.length > 0
      ? res.json(result)
      : res.json('No note with this ID, please check');
    });
});
// Post route to add new note object to database
notes.post('/', (req, res) => {
    console.log(req.body);
    const { title, text } = req.body;

    //define the payload format
    if (title && text) {
        const newNote = {
          title, 
          text,
          id: uuid(),
        };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
            } else {
              // parse JSON object to normal object
              const parsedNotes = JSON.parse(data);

               // Add a new note to the array
              parsedNotes.push(newNote);

              // Write updated notes back to the file
              fs.writeFile(
                './db/db.json', JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                    writeErr
                    ? console.error(writeErr)
                    : console.info('Added new Note succesfully')
              );
            }
        })
        const response = {
            status: 'success',
            body: newNote,
        };

        console.log(response);
        res.status(201).json(response);        
    } else {
        res.status(500).json('Error in posting new note');
    }
});

module.exports = notes;