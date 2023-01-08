import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {  get_EXP1 } from "../redux/Action/ExpAction";
import AddDetailsEXP from "./AddDetailsEXP";


const ExpensesList = () => {

  const dispatch = useDispatch();
    useEffect(() => {
    dispatch(get_EXP1());
   
  }, []);
  const expense = useSelector((state) => state.EXPreducer.expenses);
  console.log("im expense",expense)
    return (
      <>
        <section className="py-6">
          <div className="container-fluid">
            <div className="position-relative border rounded-2">
              <div className="pt-8 px-8 mb-8">
                <h6 className="mb-0 fs-3">Recent Expense transactions</h6>
                <p className="mb-0">
                  Below is the history of your EXPENSE transactions records
                </p>
                <Link to="/Add-Expense" className="btn  btn-success me-2 m-2">
                  New Expense
                </Link>
              </div>
              <table className="table">
                <thead>
                  <tr className="table-active">
              
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Title</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Description</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Amount</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Date</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Action</small>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                <div>
                  { expense.map((el) => (
                    <div key={el.id}>
                      <AddDetailsEXP el={el} />
                    </div>
                  )) 
                  }
    
      </div>
  
  
                </tbody>
              </table>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
  
          </div>
        </section>
      </>
    );
  };
  

export default ExpensesList;








