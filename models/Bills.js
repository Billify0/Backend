const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BillSchema = Schema({
  BillId: {
    type: String,
    required: true
  },
  products:{
    type:[{
        productId:{type: Schema.Types.ObjectId,required: true,ref: 'Product'},
        name:{type: String,required: true},
        quantity:{type: Number,required: true},
        price:{type: Number,required: true},
        
    }]
  } ,
  totalPrice: {
    type: Number,
    required: true
  }
  
}, { timestamps: true })


module.exports = mongoose.model('Bills', BillSchema);