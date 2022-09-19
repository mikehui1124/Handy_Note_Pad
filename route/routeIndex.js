// index to import the set of routes from note.js
const express = require('express');

const notesRouter = require('./note');

const app = express();
//define endpoint url for the routes
app.use('/notes', notesRouter);

module.exports = app;
