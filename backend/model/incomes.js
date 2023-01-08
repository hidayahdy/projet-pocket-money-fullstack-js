const mongoose = require("mongoose");
const users = require("../model/user");

const incomes = new mongoose.Schema({

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
    default:"income" 
},
  amount: { 
    type: Number, 
    require: true 
},
  user:{
    type:mongoose.Schema.Types.ObjectId,  //mongoDB ID
    ref:users,
    require:true}},   
  { toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true,
  },
    timestamps:true,})

 

  module.exports = mongoose.model("incomes", incomes);
