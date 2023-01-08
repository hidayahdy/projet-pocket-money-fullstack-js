import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/Action/authAction";
const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.Authreducer.user);
  const token = localStorage.getItem("token");
  return (
    <>
      {!token && (
        <>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
          <div class="container-fluid">
 
            <img style={{height:'50px',width:'60px',marginRight:"10px"}} src="https://img.freepik.com/photos-gratuite/main-tenant-piece-monnaie-golden-russia-rouble-qui-se-dissout-petites-particules-pour-que-rouble-deprecie-valeur-guerre-russie-ukraine-du-concept-sanction-internationale_616485-53.jpg?w=996&t=st=1661423334~exp=1661423934~hmac=b17d2393bc8f1e6289c71ce36fe32443fac16fed66460181e170dcb7f32d668d"/>
           
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item mb-2">
                  <Link as={Link} to="/"  className="btn  btn-outline-light me-2 " aria-current="page">
                    Home
                  </Link>
                </li>
           
                <li class="nav-item mb-2">
                  <Link
                    to="/Add-expense"
                    className="btn  btn-outline-warning me-2"
                  >
                    New Expense
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/Add-Income"
                    className="btn  btn-outline-primary me-2"
                  >
                    New Income
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <Link as={Link} to="/login" className="btn btn-outline-secondary me-2">
                 Login
                </Link>
                <Link to="/register" className="btn btn-primary">
                 Register
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </>
      )}
      {token && user && (
 <>
 <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
   <div class="container-fluid">
     <Link to="/" className="navbar-brand">
       <i class="bi bi-currency-exchange fs-1 text-warning "></i>
     </Link>
     <button
       class="navbar-toggler"
       type="button"
       data-bs-toggle="collapse"
       data-bs-target="#navbarSupportedContent"
       aria-controls="navbarSupportedContent"
       aria-expanded="false"
       aria-label="Toggle navigation"
     >
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarSupportedContent">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <Link to="/expenses" className="nav-link active">
            All Expenses
           </Link>
         </li>

         <li class="nav-item">
           <Link to="/incomes" className="nav-link active">
             All Incomes 
           </Link>
         </li>

         <li class="nav-item mb-2">
           <Link to="/Dashboard" className="btn  btn-outline-warning me-2">
             Dashboard
           </Link>
         </li>
         <li class="nav-item">
           <Link to="/profile" className="btn  btn-outline-primary me-2">
             Profile
           </Link>
         </li>
       </ul>
       <form class="d-flex">
         <Link to="/Add-expense" className="btn btn-danger me-2">
           New Expense
         </Link>
         <Link to="/Add-Income" className="btn btn-success me-2">
           New Income
         </Link>
         <button className="btn btn-warning me-2"    onClick={() => {
                  dispatch(logout());
                  navigate("/");
                }}>Logout</button>
       </form>
     </div>
   </div>
 </nav>
</>


      )}
    </>
  );
};

export default Navigation;