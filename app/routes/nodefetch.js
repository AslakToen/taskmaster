var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});
con.connect();

router.get('/', function(req, res, next) {
  console.log("hello :3");
  con.query('SELECT * FROM taskmanager.task', function(err, results, fields) {
    if(err) throw err;
    JSON.stringify(results);
    res.send(results);
  })
});

module.exports = router;
