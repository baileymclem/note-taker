// ===============================================================================
// ROUTING
// ===============================================================================
var fs = require("fs");

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  console.log('hittt')

  app.get("/api/notes", function(req, res) {
    fs.readFile("db/db.json", function(error, data) {

        if (error) {
          return console.log(error);
        }

        console.log(JSON.parse(data));
        res.json(JSON.parse(data));

      });


   // res.json(tableData);
  });


  app.post("/api/notes", function(req, res) {

    console.log('req.body', req.body)

    //read what is currently in the db.json
    //write to the file putting the req.body body inside

    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (tableData.length < 5) {
    //   tableData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function(req, res) {
//     // Empty out the arrays of data
//     tableData.length = 0;
//     waitListData.length = 0;

//     res.json({ ok: true });
//   });
};