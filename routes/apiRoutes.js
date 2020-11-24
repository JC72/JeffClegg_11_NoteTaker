// Required Modules
const fs = require("fs");
const noteInfo = require("../db/db.json");

module.exports = function(app){

    function dbWrite(notes){
        // Converts db.JSON Array back to a string
        notes = JSON.stringify(notes);
        console.log (notes);
        // converts and writes string back to db.json
        fs.writeFileSync("./db/db.json", notes, function(err){
            if (err) {
                return console.log(err);
            }
        });
    }

    // GET Method this will return all results

    app.get("/api/notes", function(req, res){
        res.json(noteInfo);
    });

    // POST Method to add notes
    app.post("/api/notes", function(req, res){

        var nNote = req.body;

        // Set id number to entry
        if (noteInfo.length == 0){
            nNote.id = "1";
        } else{
            nNote.id = JSON.stringify(JSON.parse(noteInfo[noteInfo.length].id) + 1);
        }
        
        console.log("nNote.id: " + nNote.id);

        // Pushes Body to JSON Array
        noteInfo.push(nNote);

        // Write notes data to database
        dbWrite(noteInfo);
        console.log(noteInfo);

        // returns new note in JSON format.
        res.json(nNote);
    });

    // DELETE request to delete a note from its specific ID
    app.delete("/api/notes/:id", function(req, res){
        
        // Obtains id and converts to a string
        let id = req.params.id.toString();
        console.log(id);

        // Goes through notesArray searching for matching ID
        for (i=1; i < noteInfo.length; i++){
           
            if (noteInfo[i].id == id){
                console.log("Found It");
                res.send(noteInfo[i]);

                // Deletes the selected note
                noteInfo.splice(i,1);
                break;
            }
        }

        // Write new notes data back to database
        dbWrite(noteInfo);

    });
};