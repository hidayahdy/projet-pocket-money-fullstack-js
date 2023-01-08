import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/Action/authAction";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faSignIn} from "@fortawesome/free-solid-svg-icons"



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }, navigate));
  };
   return (
    <section
      style={{ height: "100vh" }}
      className="position-relative py-5  overflow-hidden bg-warning"
    >
      <div className="d-none d-md-block position-absolute top-0 start-0 bg-dark w-75 h-100"></div>
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
      <div className="container position-relative mx-auto">
        <div className="row align-items-center">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of what you are spending
              </h2>
              <hr className="text-warning w-100" />
              <img style={{height:"250px",width:"400px"}}src="https://img.freepik.com/vecteurs-libre/femme-plate-payant-par-terminal-pos-remboursement-cashback_88138-785.jpg?w=996&t=st=1661423853~exp=1661424453~hmac=eb8d1ab3624181ca0d4c793c08eb0ef9ed791fa8376bdc1cd842e894672ab214"/>
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
              <span className="text-muted">Login   <FontAwesomeIcon icon={faSignIn }> </FontAwesomeIcon></span>
              <h3 className="fw-bold mb-5 text-black" >Login to your account</h3>
            
           
              <form>
                <input
         
                  className="form-control mb-2"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
            
                <input
             
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  
                />
              
                <div>
                  <Button
                    type="submit"
                    className="btn btn-primary py-2 w-100 mb-4"
                    onClick={handleClick}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
