const mongoose = require("mongoose");
const users = require("../model/user");

const expenses = new mongoose.Schema({

  title:{
    type: String,
     require: true
},
  description:{
    type: String, 
    require: true
},
  type: { 
    type: String,
    default:"expense" 
},
  amount: { 
    type: Number, 
    require: true 
},
user:{
  type:mongoose.Schema.Types.ObjectId,  //mongoDB ID
  ref:users,
  require:true},



  createdAt: {
    type: Date,
    default: new Date(),
  },
},
{
  timestamp: true,
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },}

);
;
module.exports = mongoose.model("expenses", expenses);
