import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { edit_EXP } from "../redux/Action/ExpAction";


const EditExpense = ({el}) => {
  const dispatch=useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const handle = (e) => {
    e.preventDefault();
    dispatch(
      edit_EXP(el_id,el.title,el.description,el.amount),
    );}
  return (
    <section className="py-5 bg-secondary vh-100">
      <div className="container text-center">
    
        <div className="row mb-4">
          <div className="col-12 col-md-8 col-lg-5 mx-auto">
            <div className="p-4 shadow-sm rounded bg-white">
              <form>
                <span className="text-muted">
                 
                </span>
                <h2 className="mb-4 fw-light">
             
                </h2>
               
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
          

                <button type="submit" className="btn btn-primary mb-4 w-100" onClick={handle}>
                 Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default  EditExpense;