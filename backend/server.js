const express = require("express");
const connectDB = require("./config/connectDB");
const expenseRoutes = require("./routes/expenses");
const incomeRoutes = require("./routes/incomes");
const userRoutes = require("./routes/user");
const app = express();
app.use(express.json());
require("dotenv").config();

connectDB();


//Routes
//users routes
app.use("/api/users", userRoutes);
//incomes routes
app.use("/api/income", incomeRoutes);
//expenses routes
app.use("/api/expense", expenseRoutes);


app.listen(process.env.port, () =>
  console.log(`app is runnig on port ${process.env.port}`)
);
