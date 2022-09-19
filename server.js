const express = require('express');
const path = require('path');
// import routes from the index
const api = require('./route/routeIndex.js');

const PORT = process.env.port || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// define endpoint url for accessing the routes
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for the notes UI
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// listener
app.listen(PORT, () =>
  console.log(`Express.js App listening at http://localhost:${PORT} 🚀`)
);
