var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    produtonome: {type: String, required: true},
    categoria: {type: String, required: true},    
    quantidade: {type: Number,required: true}
});

module.exports = mongoose.model('Produto', schema);