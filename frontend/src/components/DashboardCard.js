import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";

import Form from "react-bootstrap/Form";

import Modal from "react-bootstrap/Modal";
import { deluser, edituser } from "../redux/Action/authAction";
import Dateformat from "./Date";

const DashboardCard= ({ el }) => {
  console.log(el)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState(el.firstname);
  const [lastname, setLastname] = useState(el.lastname);
  const [email, setEmail] = useState(el.email);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(edituser(el._id, { firstname,lastname ,email }), handleClose());  
  };
  console.log("hello",el)
  return (
    <div>
      <Card
        style={{
          width: "18rem",

          margin: "50px",
        }}
      >
        <ListGroup variant="flush">
          <ListGroup.Item >firstname : {el.firstname}</ListGroup.Item>
          <ListGroup.Item>lastname : {el.lastname}</ListGroup.Item>
          <ListGroup.Item>email : {el.email}</ListGroup.Item>
          <ListGroup.Item>date of create: {Dateformat(el.createdAt)}</ListGroup.Item>
          <ListGroup.Item>date of update: {Dateformat(el.updatedAt)}</ListGroup.Item>
          <ListGroup.Item
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button variant="danger" onClick={() => dispatch(deluser(el._id))}>
              DELETE
            </Button>
            <Button variant="warning" onClick={handleShow}>
              EDIT
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
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default DashboardCard;