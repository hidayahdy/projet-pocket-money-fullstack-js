import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/Action/authAction";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faCashRegister} from "@fortawesome/free-solid-svg-icons"



const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstname, setFistname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(register({ firstname,lastname, email, password }, navigate));
  };
  return (
    <section className="position-relative py-5 bg-primary vh-100">
      <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
      <div className="container position-relative mx-auto">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of your income and expenses flow
              </h2>
              <img style={{height:"250px",width:"400px"}} src="https://img.freepik.com/vecteurs-libre/illustration-concept-croissance-entreprise_114360-8949.jpg?w=740&t=st=1661424061~exp=1661424661~hmac=4cb7085edec10e5d3383cae6462d2bb7075922124888d56338233ee3f9b4e071"/>
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
              <form>
                <span className="text-muted">New User <FontAwesomeIcon icon={faCashRegister}> </FontAwesomeIcon></span>
                <h3 className="fw-bold mb-5 text-black" >Register</h3>

            
                <input
              
                  className="form-control mb-2"
                  type="text"
                  placeholder="Enter your firstname"
                  onChange={(e) => setFistname(e.target.value)}
                  value={firstname}
                />
              
                <input
             
                  className="form-control mb-2"
                  type="text"
                  placeholder="Enter your lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                />
         
                <div className="text-danger mb-2">
              
                </div>
                <input
              
                  className="form-control mb-2"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
        
                <div className="text-danger mb-2">
             
                </div>
                <input
              
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
         
                <div className="text-danger mb-2">
            
                </div>

                <Button
                  type="submit"
                  className="btn btn-primary py-2 w-100 mb-4"
                  onClick={handleClick}
                >
                  Register
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;