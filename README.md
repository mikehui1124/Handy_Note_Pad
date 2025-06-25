# Handy_note_pad

This is a JavaScript source-code for a Note Taker using express.js as backend service. The Note Taker can be used to write and save notes on a webpage. This application will use an Express.js back end and will save and retrieve note data from a JSON file.
The app will be using Express package of NPM as dependency. The app will be invoked by using the following command:

  “node server.js”

The completed JavaScript source-code, GET and POST routes, modular routes and package log (ie package.json file) are available in the following GitHub repo as Master branch,

•	https://github.com/mikehui1124/challenge_11_handy_notes_taker

The app is deployed on Heroku platform as follows:

•	https://dry-cliffs-31651.herokuapp.com

Brief description
The app is built on a set of GET and POST routes regarding reading and writing new note entry to a database file (db.json).  When readily setup with express.js command on backend, the frontend JS code will make GET or POST require to the designated API endpoint to access resource in the database. This allows the UI to display existing notes or add new items into the database.  

Snapshot of the Note Taker UI

![image](https://user-images.githubusercontent.com/105307687/191013511-fdaf7410-a503-4e3e-9c61-8a7868f57bc2.png)


Acceptance criteria

The application will meet the following criteria expected by an app user,

•	The tool can allow writing and saving new notes
•	When opening the app, I am presented with a landing page with a link to a notes page.
•	When clicking the button on the note page, I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
•	When entering new note title and content, a Save icon appears in the navigation at the top of the page
•	When clicking the save button, the new note I have entered is saved and appears in the left-hand column with the other existing notes
•	When clicking on existing note on the left hand column, then that note appears in the right-hand column
•	When clicking the Add icon in the nav bar, I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
