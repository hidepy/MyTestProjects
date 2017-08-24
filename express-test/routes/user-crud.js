var express = require('express');
var commonfunc = require('../utils/commonfunc');
var User = require("../app/models/user");

var router = express.Router();

// Create User by POST
router.route("/users")
  .post(function(req, res){
    var user = new User();
    user.id = req.body.id;
    user.name = req.body.name;

    user.save(function(err){
      if(err){
        res.send(err);
      }

      res.json({message: "user created!!"});
    });
  })
  .get(function(req, res){
    User.find(function(err, users){
      if(err){
        res.send(err);
      }

      res.json(users);
    });
  });

// CRUDをget/put/deleteによって決定
router.route("/users/:user_id")
  .get(function(req, res){
    User.find({id: req.params.user_id}, function(err, user){
      if(err) res.send(err);
      res.json(user);
    });
  })
  .put(function(req, res){
    User.findOne({id: req.params.user_id}, function(err, user){
      if(err) res.send(err);

      user.name = req.body.name;

      try{
        user.save(function(err){
          if(err) res.send(err);
          res.json({message: "updated!!"});
        })
      }
      catch(e){
        commonfunc.fatal_handle(e, res);
      }
    })
  })
  .delete(function(req, res){
    console.log(req.params.user_id);
    User.remove({
      id: req.params.user_id
    }, function(err, user){
      if(err) res.send(err);
      res.json({message: "deleted!!"});
    });
  })


module.exports = router;
