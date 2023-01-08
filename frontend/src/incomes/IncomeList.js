import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_INC1 } from "../redux/Action/INCOMEaction";
import AddDetailsINC from "./AddDetailsINC";
const IncomeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_INC1());
    
  }, []);
  const income = useSelector((state) => state.INCOMEreducer.incomes);
  console.log("i'm income",income)
  return (
    <>
      <section className="py-6">
        <div className="container-fluid">
          <div className="position-relative border rounded-2">
            <div className="pt-8 px-8 mb-8">
              <h6 className="mb-0 fs-3">Recent Income transactions</h6>
              <p className="mb-0">
                Below is the history of your income transactions records
              </p>
              <Link to="/Add-Income" className="btn  btn-success me-2 m-2">
                New Income
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
      {income.map((el) => (
        <div key={el.id}>
          <AddDetailsINC el={el} />
        </div>
      ))}
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

export default IncomeList;