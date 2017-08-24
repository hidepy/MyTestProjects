var express = require('express');

var commonfunc = {
  fatal_handle: function(err, res){
    console.log("FATAL ERROR OCCURRED...");
    console.log(err);
    if(res) res.send("FATAL...");
  }
};

module.exports = commonfunc;
