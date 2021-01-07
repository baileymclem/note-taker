
const { query } = require("express");
let fs = require("fs");


module.exports = function (app) {


  //Read File
  app.get("/api/notes", (req, res) => {

    fs.readFile('db/db.json', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });

  });


  //Post File
  app.post("/api/notes", (req, res) => {

    fs.readFile('db/db.json', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);

      let newNote = req.body;
      newNote.id = notes.length + 1;
      notes.push(newNote);

        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
          if (err) {
            console.log(err);
          }
          res.json({ ok: true });
        });

    });

  });


  
  //Delete File
  app.delete("/api/notes/:id", (req, res) => {

    fs.readFile('db/db.json', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);

      let newNote = []
      for (let i = 0; i < notes.length; i++) {

        if (notes[i].id != req.params.id) {
          newNote.push(notes[i])
        }
      }

      fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {
        if (err) {
          console.log(err);
        }
        res.json({ ok: true });
      });


    });


  });


}