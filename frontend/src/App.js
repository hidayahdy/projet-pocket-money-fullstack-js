import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Alerterrors from "./Alerterrors";
import "./App.css";
import AddExpense from "./expenses/AddExpense";
import Home from "./Home";
import AddIncome from "./incomes/AddIncome";
import Login from "./user/Login";

import { get_current } from "./redux/Action/authAction";
import Register from  "./user/Register";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./user/Profile";
import PrivateRoutes from "./components/Navigation/PrivateRoutes";
import Dashboard from "./components/Dashboard";
import NotAdmin from "./components/NotAdmin";

import IncomeList from "./incomes/IncomeList";
import ExpensesList from "./expenses/ExpensesList";





function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  return (
    <div className="App">
      <Navigation />
      <Alerterrors />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/not-found" element={<NotAdmin />} />
        <Route path="/Add-expense" element={<PrivateRoutes Children={<AddExpense/>} />}/>
        <Route path="/profile" element={<PrivateRoutes Children={<Profile />} />}/>
        <Route path="/Add-Income" element={<PrivateRoutes Children={<AddIncome/>} />} />
        <Route path="/incomes" element={<PrivateRoutes Children={<IncomeList/>} />} />
        <Route path="/expenses" element={<PrivateRoutes Children={<ExpensesList/>} />} />
     
      </Routes>
     
    </div>
  );
}

export default App;
