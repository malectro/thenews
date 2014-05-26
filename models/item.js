var _ = require(__dirname + '/../util/wonderscore.js');
var mongoose = require('mongoose');


var Item = exports;


var Schema = Item.Schema = mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  text: String,
});

Schema.index({user: 1});

