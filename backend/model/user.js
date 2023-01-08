const mongoose = require("mongoose");

const users = new mongoose.Schema({

  firstname:{type: String, require: true},
  lastname:{type: String, require: true},
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  isAdmin:{type:Boolean,default:false},},
  {
   toObject:{virtuals:true},
  toJSON:{virtuals:true},
    timestamps:true}
);


//virtual
users.virtual("expenses", {
  ref: "expenses",
  foreignField: "user",
  localField: "_id",
});

users.virtual("incomes", {
  ref: "incomes",
  foreignField: "user",
  localField: "_id",
});
module.exports = mongoose.model("users", users);
