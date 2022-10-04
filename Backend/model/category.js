const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  count: { type: Number, required: true },
  childCount: { type: Number},
  children: [{ type: mongoose.Types.ObjectId, required:true,ref: 'Cat' }]
});


module.exports = mongoose.model('Cat', categorySchema);