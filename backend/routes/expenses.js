const express = require("express");
const { Getexpenses, updatExpense, delexpense, creatExpense, GetOnExp } = require("../controlles/expenses");
const { IsAuth } = require("../middlewear/isAuth");


const expenseRoutes = express.Router();

expenseRoutes.post("/",IsAuth, creatExpense);
expenseRoutes.delete("/:id", delexpense);
expenseRoutes.put("/:id", updatExpense);


expenseRoutes.get("/",Getexpenses);
expenseRoutes.get("/myexpenses",IsAuth, GetOnExp);
module.exports =expenseRoutes;
