import React, { useState } from "react";

import{FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faEdit} from "@fortawesome/free-solid-svg-icons"
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { edituser } from "../redux/Action/authAction";
import { Link } from "react-router-dom";
const Profile = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const user=useSelector((state) => state.Authreducer.user);
console.log("hi",user)
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(edituser(user?._id, {firstname,lastname ,email}), handleClose());  
  };
  return (
    <>
      <section className="position-relative py-5  overflow-hidden bg-light">
        <div className="container">
          <div className="position-relative p-8 border rounded-2">
            <div className="d-flex mb-6 align-items-center">
              <img
                className="img-fluid me-4 rounded-2"
                style={{width:"100px",height:"100px",marginTop:"20px",marginLeft:"20px",marginBottom:'10px'}}
                src="https://play-lh.googleusercontent.com/hNPPO1n7jov3JpkbE9xmxKadMJCxap8R80dSbeWy8DstdG4KmnSrVve3vlMXXjvpVM4"
                alt=""
              />
              <div>
                <h1 >
            
                  <span className="badge ms-2 bg-primary-light text-primary">
                
                    Profile Info
                  </span>
                </h1>
 <h4 className=" text-primary">{user?.firstname}   {user?.lastname}</h4>
 <h5 className=" text-primary">{user?.email}</h5>
                <Button type="button" class="btn btn-primary btn-lg" onClick={handleShow}>
                 <span>Update Profile <FontAwesomeIcon icon={faEdit}> </FontAwesomeIcon></span>
             
                </Button>
                <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  

                  <Form.Group className="mb-3">
                    <Form.Label>firstname : </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                      value={firstname}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>lastname : </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="lastname"
                      onChange={(e) => setLastname(e.target.value)}
                      value={lastname}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="warning" onClick={handleEdit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
              </div>
             
            </div>

            <p className="mb-8"> </p>

          
            <div className="d-flex align-items-center justify-content-center">
              <button 
    
                className="btn me-4 w-100 btn-danger d-flex align-items-center justify-content-center"
              >
                <span>View Expenses History</span>
              </button>
              <button
             
                className="btn w-100 btn-success d-flex align-items-center justify-content-center"
              >
                <span>View Income History</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;