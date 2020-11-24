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

    // POST request which adds the notes to the list and db.json
    app.post("/api/notes", function(req, res){

        // generates a id number for the note
        if (noteInfo.length == 0){
            req.body.id = "0";
        } else{
            req.body.id = JSON.stringify(JSON.parse(noteInfo[noteInfo.length-1].id) + 1);
        }
        
        console.log("req.body.id: " + req.body.id);

        // pushes the note to the Json file
        noteInfo.push(req.body);

        // calls the function to write the file
        dbWrite(noteInfo);
        console.log(noteInfo);

        res.json(req.body);
    });

    // DELETE request to delete a note from its specific ID
    app.delete("/api/notes/:id", function(req, res){
        
        // Obtains id and converts to a string
        let id = req.params.id.toString();
        console.log(id);

        // Goes through the notes Array to find the matching
        // ID and deletes it from the array

        for (i=0; i < noteInfo.length; i++){
           
            if (noteInfo[i].id == id){
                console.log("Found It");
                res.send(noteInfo[i]);

                noteInfo.splice(i,1);
                break;
            }
        }

        // Writes the new array data back to database
        dbWrite(noteInfo);

    });
};