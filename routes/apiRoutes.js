// ===============================================================================
// Required Modules
// requiring fs and the json file db.json
// This data source holds an array in which to store the note information.
// ===============================================================================

var fs = require("fs");
var noteData = require("../db/db.json");


module.exports = function(app) {


    // //JSON Write Function
    // //This function converts JSON to string and
    // //then writes the string back to the db.json file

    // function dbWrite(notes);

    //     notes = JSON.stringify(notes);
    //     console.log (notes);
    //     fs.writeFileSync("./db/db.json", notes, function(err){
    //         if (err) {
    //             return console.log(err);
    //         }
    //     });
    // }


  // API GET Request

  app.get("/api/notes", function(req, res) {
    res.json(noteData);
  });

  // API POST Requests
  // Code below handles when a user submits the note and then submits data to the server.
  // In the below case, when a user submits notes data
  // ...the JSON is pushed to the appropriate db.json array and given a id number
  // so we can search for the data

  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    var newNote = req.body;

    newNote.routeName = newNote.title.replace(/\s+/g, "").toLowerCase();

    console.log(newNote);
    noteData.push(newNote);
    
    res.json(newNote);
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    noteData.length = 0;

    res.json({ ok: true });
  });
};