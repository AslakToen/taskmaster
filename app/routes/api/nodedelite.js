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
  if(!req.param.id){
    res.send('{"error": "No id"}')
  }
  else{
    res.send('id found! it was: ' + req.param.id)
  }

  /*con.query(' DELETE FROM `taskmanager`.`task` WHERE idTask = '+ 1, function(err, results, fields) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    res.status(200).send(req.body);
  })*/
});

module.exports = router;
