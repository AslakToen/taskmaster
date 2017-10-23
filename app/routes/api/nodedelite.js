var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect();

router.get('/:id', function(req, res, next) {
  if(!req.params.id){
    res.send('{"error": "No id"}')
  }
  else{
    con.query(' DELETE FROM `taskmanager`.`task` WHERE idTask = '+ req.params.id, function(err, results, fields) {
      if (err) throw err;
      console.log("Number of records deleted: " + results.affectedRows);
      res.status(200).send("table row " + req.params.id + " delited!");
    })
  }
});

module.exports = router;
