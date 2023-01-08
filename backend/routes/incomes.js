const express = require("express");
const { createIncome, delIncome, updateIncome, Getincomes, GetOnEinc } = require("../controlles/incomes");
const { IsAuth } = require("../middlewear/isAuth");

const incomeRoutes = express.Router();

incomeRoutes.post("/",IsAuth, createIncome);
incomeRoutes.delete("/:id",delIncome);
incomeRoutes.put("/:id", updateIncome);
incomeRoutes.get("/",Getincomes);

incomeRoutes.get("/myincomes",IsAuth, GetOnEinc);
module.exports =incomeRoutes;
