var mongoose = require("mongoose");
var schema = mongoose.Schema;

var UserSchema = new schema({
  id: {type: String, unique: true, required: true},
  name: String
});

module.exports = mongoose.model("User", UserSchema);
