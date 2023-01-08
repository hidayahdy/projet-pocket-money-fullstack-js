import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { add_EXP } from "../redux/Action/ExpAction";

const AddExpense = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_EXP({title,description,amount },navigate("/expenses")),
    );}
  return (
    <>
      <section className="py-5 bg-danger vh-100">
        <div className="container text-center">
          <a className="d-inline-block mb-5">
            <img
              className="img-fluid"
              src="https://img.freepik.com/vecteurs-libre/employes-du-service-financier-calculent-depenses-entreprise_1150-41782.jpg?w=996&t=st=1661422080~exp=1661422680~hmac=a3d29da873902cc4726e90661997262003a41cd17c6fd02d74b6ee993d2757c8"
              alt="SVGeXPENSES"
              width="200"
            />
          </a>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form>
                  <span className="text-muted">Expense</span>
                  <h2 className="mb-4 fw-light">Add New Expense</h2>
               
                  <div className="mb-3 input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Title"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  </div>
                 
                  <div className="mb-3 input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Description"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>
                
                  <div className="mb-3 input-group">
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Enter Amount"
                
                      onChange={(e) => setAmount(e.target.value)}
                      value={amount}
                    />
                  </div>

                  <button type="submit" className="btn btn-danger mb-4 w-100" onClick={handleSubmit}>
                   Add Expense
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddExpense;