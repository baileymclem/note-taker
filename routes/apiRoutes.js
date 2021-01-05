// ===============================================================================
// ROUTING
// ===============================================================================
var fs = require("fs");
const path = require("path");

module.exports = function (app) {

  console.log('hittt')

  app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", function (error, data) {

      if (error) {
        return console.log(error);
      }

      console.log(JSON.parse(data));
      res.json(JSON.parse(data));

    });
  });


  // app.post("/api/notes", (req, res) => {



  //   });

    //read what is currently in the db.json
    //write to the file putting the req.body body inside




  }




// app.post("/api/notes", (req, res) => {
//   const note = new note(req.body);

//   note.save()
//     .then((result) => {
//       res.redirect("/api/notes");
//     })
//     .catch((err) => {
//       console.log(err);
//     })
// })