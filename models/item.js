var Config = require('../config');
var mongoose = require('mongoose');

Schema = mongoose.Schema;

var ItemSchema = new Schema({
	nombre : String,
	cantidad : { type : Number, default : 1 },
	created_date: { type: Date, default: Date.now },
	updated_date: { type: Date, default: Date.now }
});

ItemSchema.pre('save', function(done) {
  this.updated_date = new Date();
  done();
});

mongoose.model('Item', ItemSchema);
