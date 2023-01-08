import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_INC } from "../redux/Action/INCOMEaction";


const AddIncome = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      add_INC({title,description,amount },navigate('/incomes')),
    );}
  return (
    <>
      <section className="py-5 bg-success vh-100">
        <div className="container text-center">
          <a className="d-inline-block mb-5">
            <img
              className="img-fluid"
              src="https://img.freepik.com/vecteurs-libre/homme-payant-ligne-recevant-du-cashback-dans-son-portefeuille_88138-692.jpg?w=996&t=st=1661422005~exp=1661422605~hmac=8f3e32fff9354a4016bfdb11f2e844b580c952151febe91ba38f55b5c244660a"
              alt="SVGeXPENSES"
              width="200"
            />
          </a>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form>
                  <span className="text-muted">Income</span>
                  <h2 className="mb-4 fw-light">Record New Income</h2>
               
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
               

                  <button type="submit" className="btn btn-success mb-4 w-100" onClick={handleSubmit}>
                    Add Income
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

export default AddIncome;