var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect();

router.get('/:task', function(req, res, next) {
  if(!req.params.task){
    res.send('{"error": "No task"}')
  }
  else{
    let sql = "INSERT INTO `taskmanager`.`task` (`TaskName`) VALUES ('" + req.params.task + "')";
    con.query(sql, function(err, results, fields) {
      if (err) throw err;
      console.log("entry added");
      res.status(200).send("table row added");
    })
  }
});

module.exports = router;
