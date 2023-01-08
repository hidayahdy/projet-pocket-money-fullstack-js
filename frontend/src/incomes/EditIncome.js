import React from "react";
import { edit_INC } from "../redux/Action/INCOMEaction";


const EditIncome = () => {
  const dispatch=useDispatch()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      edit_INC({id,title,description,amount}),
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
                  />
                </div>
           
                <div className="mb-3 input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Description"
                  />
                </div>
          
                <div className="mb-3 input-group">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Enter Amount"
                  />
                </div>
           

                <button type="submit" className="btn btn-primary mb-4 w-100" onClick={handleSubmit}>
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

export default EditIncome;