const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  productName: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
}, { timestamps: true })


module.exports = mongoose.model('Product', ProductSchema);