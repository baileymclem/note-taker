
const { query } = require("express");
let fs = require("fs");

module.exports = function (app) {

  const notes = JSON.parse(fs.readFileSync("./db/db.json"));

  //Read File
  app.get("/api/notes", (req, res) => {

    res.json(notes);

  });

  //Post File
  app.post("/api/notes", (req, res) => {

    let newNote = req.body;
    newNote.id = notes.length + 1;
    notes.push(newNote),

      fs.writeFile("./db/db.json", JSON.stringify(notes, null, 2), (err) => {
        if (err) {
          console.log(err);
        }

      });

    res.json({ ok: true });

  });


  //Delete File
  app.delete("/api/notes/:id", (req, res) => {

    console.log(notes[1].id);

    //res.json({ ok: true });

  });


}