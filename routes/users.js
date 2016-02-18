var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({}, {}, function(e, docs)
  {
  	res.json(docs);
  });
});

router.get('/user', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  var usern = req.param('username');
  console.log(usern);
  collection.find({ username: usern}, function(e, docs)
  {
    res.json(docs);
  });
});

router.post('/adduser', function(req, res) {
    console.log(req.body);
    var db = req.db;
    var collection = db.get('userlist');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
